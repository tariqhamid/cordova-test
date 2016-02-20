Smalltalk createPackage: 'DOMite-Tests'!
TestCase subclass: #DOMiteTest
	instanceVariableNames: 'fixtureDiv'
	package: 'DOMite-Tests'!

!DOMiteTest methodsFor: 'fixture'!

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
!

testedClass

	^ Domite
! !

!DOMiteTest methodsFor: 'testing'!

assertBodyEndsWith: aString
	| sanitizedBody sanitizedAssertion |
	sanitizedBody := document body innerHTML replace: '\s*' with: ''.
	sanitizedAssertion := aString replace: '\s*' with: ''.
	self assert: sanitizedBody size >= sanitizedAssertion size.
	self
		assert: (sanitizedBody last: sanitizedAssertion size)
		equals: sanitizedAssertion
!

testDefaultInsertElement

	self testedClass new << (self testedClass newElement: 'p').
	self assertBodyEndsWith: '<p></p>'.
	document body removeChild: document body lastChild
!

testDefaultInsertString
	self testedClass new << 'a-foo--in-a-bar'.
	self assertBodyEndsWith: 'a-foo--in-a-bar'.
	document body removeChild: document body lastChild
!

testDefaultInsertStringInFragment
	self testedClass new << (self testedClass newStream << 'a-foo--in-a-bar').
	self assertBodyEndsWith: 'a-foo--in-a-bar'.
	document body removeChild: document body lastChild
!

testFromBadSelectorIsInvalid
	| d |
	d := self testedClass at: '#goo'.
	self assert: d isInvalid.
	d := self testedClass at: 'body'.
	self deny: d isInvalid.
	d := self testedClass at: 'html body div#fixture'.
	self deny: d isInvalid
!

testInsertDomNode
	| d |
	d := self testedClass fromElement: fixtureDiv.
	d << (document createElement: 'pre').
	self assertBodyEndsWith: '>sentinel<pre></pre></div>'
!

testInsertDomNodeInFragment
	| d |
	d := self testedClass at: '#fixture'.
	d << (self testedClass newStream << (document createElement: 'script')).
	self assertBodyEndsWith: '>sentinel<script></script></div>'
!

testInsertElement
	| d |
	d := self testedClass at: 'html body div#fixture'.
	d << (self testedClass newElement: 'p').
	self assertBodyEndsWith: '>sentinel<p></p></div>'
!

testInsertElementTwoLevel
	| d p s |
	d := self testedClass fromElement: fixtureDiv.
	p := self testedClass newElement: 'p'.
	d << p.
	s := self testedClass newElement: 'span'.
	p << s.
	s << 'dom-mite'.
	self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'
!

testInsertElementTwoLevelViaFragments
	| d p s |
	d := self testedClass at: '#fixture'.
	p := self testedClass newElement: 'p'.
	d << (self testedClass newStream << p).
	s := self testedClass newElement: 'span'.
	p << (self testedClass newStream << s).
	s << (self testedClass newStream << 'dom-mite').
	self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'
!

testInsertElementTwoLevelViaTwoLevelFragments
	| d p s |
	d := self testedClass fromElement: fixtureDiv.
	p := self testedClass newElement: 'p'.
	d << (self testedClass newStream << (self testedClass newStream << p)).
	s := self testedClass newElement: 'span'.
	p << (self testedClass newStream << (self testedClass newStream << s)).
	s << (self testedClass newStream << (self testedClass newStream << 'dom-mite')).
	self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'
!

testInsertString
	| d |
	d := self testedClass fromElement: fixtureDiv.
	d << 'a-foo--in-a-bar'.
	self assertBodyEndsWith: '>sentinela-foo--in-a-bar</div>'
!

testInsertStringInFragment
	| d |
	d := self testedClass at: '#fixture'.
	d << (self testedClass newStream << 'a-foo--in-a-bar').
	self assertBodyEndsWith: '>sentinela-foo--in-a-bar</div>'
!

testInsertTable
	| d tbl tr |
	d := self testedClass at: 'html body div#fixture'.
	tbl := self testedClass newElement: 'table'.
	
	tr := self testedClass newElement: 'tr'.
	tr << ((self testedClass newElement: 'td') << 'A').
	tr << ((self testedClass newElement: 'td') << 'B').
	tr << ((self testedClass newElement: 'td') << 'C').
	
	tbl << tr.
	
	tr := self testedClass newElement: 'tr'.
	tr << ((self testedClass newElement: 'td') << 'D').
	tr << ((self testedClass newElement: 'td') << 'E').
	tr << ((self testedClass newElement: 'td') << 'F').
	
	tbl << tr.
	d << tbl.
	 
	self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'
!

testMultipleInserts
	| d p s |
	d := self testedClass fromElement: fixtureDiv.
	p := self testedClass newElement: 'p'.
	d << p.
	s := self testedClass newElement: 'span'.
	d << s.
	d << 'dom-mite'.
	self assertBodyEndsWith: '>sentinel<p></p><span></span>dom-mite</div>'
!

testMultipleInsertsWithClear
	| d p s |
	d := self testedClass at: '#fixture'.
	p := self testedClass newElement: 'p'.
	d << p.
	s := self testedClass newElement: 'span'.
	d << s.
	d resetContents.
	d << 'dom-mite'.
	d resetContents.
	d resetContents.
	self assertBodyEndsWith: '></div>'
!

testMultipleInsertsWithClearInBetween
	| d p s |
	d := self testedClass fromElement: fixtureDiv.
	p := self testedClass newElement: 'p'.
	d << p.
	s := self testedClass newElement: 'span'.
	d << s.
	d resetContents.
	d << 'dom-mite'.
	self assertBodyEndsWith: '>dom-mite</div>'
! !

