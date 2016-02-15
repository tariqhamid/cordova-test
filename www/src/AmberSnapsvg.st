Smalltalk createPackage: 'AmberSnapsvg'!
(Smalltalk packageAt: 'AmberSnapsvg') imports: {'snapSvg' -> 'snap.svg'}!
Object subclass: #AmberSnapsvg
	instanceVariableNames: ''
	package: 'AmberSnapsvg'!

!AmberSnapsvg methodsFor: 'action'!

doSnapSvg
"translation to Smalltalk points 1 to 4 of
http://snapsvg.io/start/ "

| s bigCircle smallCircle |

"s := snapSvg value: 300 value: 600."
s := snapSvg value: '#svg'.

bigCircle := s circle: 150 value: 150 value: 100.
bigCircle attr: #{'fill' -> '#bada55'. 'stroke' -> '#000'. 'strokeWidth' -> 5}.
smallCircle := s circle: 100 value: 150 value: 70.

"Transcript show: s outerSVG."
"s inspect"
! !

!AmberSnapsvg methodsFor: 'starting'!

augmentPage

	'#snapsvg-button' asJQuery click: [self doSnapSvg].

	'#snapsvg-button' asJQuery css: #{ 'background-color' ->'hotpink'}.
! !

!AmberSnapsvg class methodsFor: 'starting'!

start
	self new augmentPage
! !

