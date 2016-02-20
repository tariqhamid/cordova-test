Smalltalk createPackage: 'Silk-Tests'!
(Smalltalk packageAt: 'Silk-Tests') imports: {'amber/jquery/Wrappers-JQuery'}!
DOMiteTest subclass: #SilkInheritedTest
	instanceVariableNames: ''
	package: 'Silk-Tests'!

!SilkInheritedTest methodsFor: 'fixture'!

testedClass
	^ Silk
! !

TestCase subclass: #SilkTest
	instanceVariableNames: 'fixtureDiv'
	package: 'Silk-Tests'!

!SilkTest methodsFor: 'fixture'!

assertBodyEndsWith: aString
	| sanitizedBody sanitizedAssertion |
	sanitizedBody := document body innerHTML replace: '\s*' with: ''.
	sanitizedAssertion := aString replace: '\s*' with: ''.
	self assert: sanitizedBody size >= sanitizedAssertion size.
	self
		assert: (sanitizedBody last: sanitizedAssertion size)
		equals: sanitizedAssertion
!

assertBodyEndsWithOneOf: aStringArray
	| sanitizedBody err |
	sanitizedBody := document body innerHTML replace: '\s*' with: ''.
	aStringArray do: [ :aString |
		| sanitizedAssertion |
		sanitizedAssertion := aString replace: '\s*' with: ''.
		[ self
			assert: sanitizedBody size >= sanitizedAssertion size;
			assert: (sanitizedBody last: sanitizedAssertion size)
			equals: sanitizedAssertion. ^ self ] on: Error do: [ :e | err := e ]].
	err ifNotNil: [ err signal ]
!

setUp
	fixtureDiv := document createElement: 'div'.
	document body appendChild: fixtureDiv.
	fixtureDiv setAttribute: 'id' to: 'fixture'.
	fixtureDiv innerHTML: 'sentinel'
!

tearDown
	| lastChild |
	lastChild := document body lastChild.
	self assert: lastChild equals: fixtureDiv.
	document body removeChild: lastChild
! !

!SilkTest methodsFor: 'testing'!

testInsertTable

	| d tbl  |

	d := 'html body div#fixture' asSilk.

	tbl := d TABLE.

	tbl TR
		TD: 'A';
		TD: 'B';
		TD: 'C'.
	
	tbl TR
		TD: 'D';
		TD: 'E';
		TD: 'F'.
	
	self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'
!

testInsertTable2

	| d tbl  |

	d := 'html body div#fixture' asSilk.

	tbl := d TABLE.

	tbl TR: {
		Silk TD: 'A'.
		Silk TD: 'B'.
		Silk TD: 'C'};
		TR: {
		Silk TD: 'D'.
		Silk TD: 'E'.
		Silk TD: 'F'}.
	
	self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'
!

testNestedDIVsWithAttributes
 "demonstrates how DIVs are nested and given attributes"
	| s |

	s := '#fixture' asSilk.
	
	s := s DIV << ('id' -> 'container') << ('class' -> 'mySilkContainerClass').
	s DIV << ('id' -> 'contentarea') << 'here comes the content'.
	s := s DIV << ('id' -> 'toolbar') << ('class' -> 'myToolbarClass').
	(s BUTTON: 'do something') on: 'click' bind: [Transcript show: 'button pressed'].
	
	self assertBodyEndsWithOneOf: #(
		'>sentinel<div class="mySilkContainerClass" id="container"><div id="contentarea">here comes the content</div><div class="myToolbarClass" id="toolbar"><button>do something</button></div></div></div>'
		'>sentinel<div id="container" class="mySilkContainerClass"><div id="contentarea">here comes the content</div><div id="toolbar" class="myToolbarClass"><button>do something</button></div></div></div>'
	)
!

testOnClickEvent
	"#on:bind"
	
	| s para |

	s := '#fixture' asSilk.
	para := s P: 'DOM'. 

	self timeout: 100.

	(self async: [para on: 'click' bind:
			["Test successful" self finished].

		'#fixture p' asJQuery trigger: 'click'.
		]) fork
! !

