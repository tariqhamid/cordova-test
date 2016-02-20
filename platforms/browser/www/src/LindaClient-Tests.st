Smalltalk createPackage: 'LindaClient-Tests'!
TestCase subclass: #LindaAbstractTest
	instanceVariableNames: ''
	package: 'LindaClient-Tests'!

!LindaAbstractTest methodsFor: 'as yet unclassified'!

sampleClient
!

sampleTupleSpace
!

serverUrl
	^'http://127.0.0.1:8931'
!

tupleSpaceName
	^'testSample'
! !

LindaAbstractTest subclass: #LindaClientTest
	instanceVariableNames: 'client tupleSpace'
	package: 'LindaClient-Tests'!

!LindaClientTest methodsFor: 'as yet unclassified'!

estTupleSpaceReading
	Transcript show: 'reading ...'; cr.
	tupleSpace read: #{#type -> 'chat'} with: [:err :tuple| Transcript show: 'read'; show: tuple ;cr ] .
!

setUp
	client := LindaClient serverUrl: self serverUrl.
	tupleSpace := client tupleSpace: self tupleSpaceName
!

testServerUrl
	self assert: (client io uri = self serverUrl)
!

testTupleSpaceWriting
	Transcript show: 'writing'; cr.
	tupleSpace write: #{#type -> 'chat'. #message -> 'aaa'} options: #{#from -> 'xxx'}.
!

testTuplespaceName
	self assert: (tupleSpace name = self tupleSpaceName)
! !

LindaAbstractTest subclass: #SocketIoTest
	instanceVariableNames: 'sample'
	package: 'LindaClient-Tests'!

!SocketIoTest methodsFor: 'as yet unclassified'!

sampleLocalInstance

	^SocketIo serverUrl: self serverUrl
!

setUp

	sample ifNil: [sample := self sampleLocalInstance]
!

tearDown

	sample ifNotNil: [sample close.
		sample := nil]
!

testUri
	self assert: (sample uri = self serverUrl)
! !

LindaAbstractTest subclass: #TupleSpaceTest
	instanceVariableNames: ''
	package: 'LindaClient-Tests'!

LindaAbstractTest subclass: #TupleTest
	instanceVariableNames: ''
	package: 'LindaClient-Tests'!

Object subclass: #Person
	instanceVariableNames: 'name address'
	package: 'LindaClient-Tests'!

!Person methodsFor: 'accessing'!

address
	^ address
!

address: anObject
	address := anObject
!

name
	^ name
!

name: anObject
	name := anObject
! !

!Person class methodsFor: 'as yet unclassified'!

sample1
	| newPerson |
	newPerson := Person new.
	newPerson name: 'aaaa'.
	newPerson address: 'adress1'.
	^newPerson
! !

