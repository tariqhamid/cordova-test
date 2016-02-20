Smalltalk createPackage: 'Boomerang'!
Object subclass: #Boomerang
	instanceVariableNames: ''
	package: 'Boomerang'!

!Boomerang methodsFor: 'error handling'!

debug
	self subclassResponsibility
! !

!Boomerang methodsFor: 'evaluating'!

parse
	self subclassResponsibility
!

print
	self subclassResponsibility
! !

Boomerang subclass: #AnyBoomerang
	instanceVariableNames: 'choices'
	package: 'Boomerang'!

Boomerang subclass: #StringBoomerang
	instanceVariableNames: 'string'
	package: 'Boomerang'!

!StringBoomerang methodsFor: 'accessing'!

parse: strings
	^ Generator on: [ :g |
	strings length > 0 & ((strings at: 0) == string)
		ifTrue: [ g yield: (ParseRemainder 
		  	strings: strings allButFirst
			stackModifier: [ :result | result ])]
		ifFalse: [ g yield: (ParseRemainder
			strings: strings
			expected: string) ]]
!

string
	^ string
!

string: anObject
	string := anObject
! !

!StringBoomerang class methodsFor: 'instance creation'!

from: aString
	"Create a String boomerang from the given string"

	^ StringBoomerang new string: aString
! !

Stream subclass: #Generator
	instanceVariableNames: 'block next continue home'
	package: 'Boomerang'!

!Generator methodsFor: 'accessing'!

close
	"Close the receiving generator and unwind its ensure-blocks."

	continue ifNotNil:[continue unwindTo: home].
	continue := block := next := nil
!

contents
	"Answer the contents of this generator. Do not call this method on infinite generators."

	| stream |
	stream := (Array new: 10) writeStream.
	[ self atEnd ]
		whileFalse: [ stream nextPut: self next ].
	^ stream contents
!

next
	"Generate and answer the next object in the receiver."

	^ self atEnd ifFalse: [
		home swapSender: thisContext sender.
		continue := thisContext swapSender: continue
	]
!

nextPut: anObject
	"Add anObject into the generator. A synonym to #yield: and value:."

	| previous |
	previous := next.
	next := anObject.
	continue := thisContext swapSender: continue.
	^ previous
!

peek
	"Answer the upcoming object of the receiver."

	^ next
!

size
	"A generator does not know its size."

	^ self shouldNotImplement
! !

!Generator methodsFor: 'initialization'!

initializeOn: aBlock
	block := aBlock.
	self reset
! !

!Generator methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: self class name; nextPutAll: ' on: '; print: block
! !

!Generator methodsFor: 'private'!

fork
	| result |
	home := thisContext.
	block reentrant value: self.
	thisContext swapSender: continue.
	result := next.
	continue := next := home := nil.
	^ result
! !

!Generator methodsFor: 'public'!

reset
	"Reset the generator, i.e., start it over"
	continue ifNotNil:[continue unwindTo: home].
	next := nil.
	continue := thisContext.
	[ self fork ] value
!

value: anObject 
	"Allows passing generators as arguments to methods expecting blocks.
	A synonym for #yield: / #nextPut:."
	^ self nextPut: anObject
!

yield: anObject 
	"Yield the next value to the consumer of the generator.
	A synonym for #nextPut:"
	^ self nextPut: anObject
! !

!Generator methodsFor: 'testing'!

atEnd
	"Answer whether the receiver can access any more objects."

	^ continue isNil
! !

!Generator class methodsFor: 'instance creation'!

on: aBlock
	^ self basicNew initializeOn: aBlock
! !

Object subclass: #ParseRemainder
	instanceVariableNames: 'strings stackModifier expected failed'
	package: 'Boomerang'!

!ParseRemainder methodsFor: 'accessing'!

expected
	^ expected
!

failed
	^ failed
!

stackModifier
	^ stackModifier
!

strings
	^ strings
! !

!ParseRemainder class methodsFor: 'instance creation'!

strings: aStrings expected: anExpectation
		^ self new
		strings: aStrings;
		expected: anExpectation;
		failed: true;
		yourself
!

strings: aStrings stackModifier: aStackModifier
		^ self new
		strings: aStrings;
		stackModifier: aStackModifier;
		failed: false;
		yourself
! !

