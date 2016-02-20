Smalltalk createPackage: 'Boomerang-Tests'!
TestCase subclass: #BoomerangParseWordsAndArraysTest
	instanceVariableNames: ''
	package: 'Boomerang-Tests'!

!BoomerangParseWordsAndArraysTest methodsFor: 'tests'!

testParseTheAsTheIdentityFunction

	| iterator item |
	iterator := (StringBoomerang from: 'the') parse: #('the').
	item := iterator next.
	self assert: item == 7
! !

