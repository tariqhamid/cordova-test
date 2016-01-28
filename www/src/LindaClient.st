Smalltalk createPackage: 'LindaClient'!
(Smalltalk packageAt: 'LindaClient') imports: {'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #NodeLindaProxy
	instanceVariableNames: 'proxy'
	package: 'LindaClient'!

!NodeLindaProxy methodsFor: 'accessing'!

proxy
	^ proxy
!

proxy: anObject
	proxy := anObject
! !

!NodeLindaProxy methodsFor: 'utilities'!

keysOfJSON: aJS
	<	return Object.keys(aJS);
	>
! !

!NodeLindaProxy class methodsFor: 'as yet unclassified'!

new
	| newProxy |
	newProxy := super new.
	^newProxy
!

proxy: aJSProxy
	aJSProxy isNil ifTrue: [^nil].
	^self new proxy: aJSProxy ; yourself
! !

NodeLindaProxy subclass: #LindaClient
	instanceVariableNames: ''
	package: 'LindaClient'!

!LindaClient methodsFor: 'accessing'!

io

	^self proxy io
!

serverUrl
	^self io io uri
! !

!LindaClient methodsFor: 'services'!

connect: aSocketIo

	self proxy connect: aSocketIo proxy.
!

tupleSpace: aName
	^TupleSpace proxy: (self proxy tuplespace: aName).
! !

LindaClient class instanceVariableNames: 'defaultServerUrl'!

!LindaClient class methodsFor: 'accessing'!

defaultServerUrl

	"defaultServerUrl ifNil: [defaultServerUrl := self serverUrls second]."
	defaultServerUrl ifNil: [defaultServerUrl := self serverUrls first].
	^defaultServerUrl
!

serverUrls

	^#('http://127.0.0.1:8931/' 'http://node-linda-ststudy.herokuapp.com')
! !

!LindaClient class methodsFor: 'examples'!

chatRoom
! !

!LindaClient class methodsFor: 'instance creation'!

connect: aSocketIo
	| newClient |
	newClient := self proxy: self linda new.
	^newClient connect: aSocketIo; yourself
!

default
	^self serverUrl: self defaultServerUrl
!

serverUrl: aUrlString

	^self connect: (SocketIo serverUrl: aUrlString).
! !

!LindaClient class methodsFor: 'private'!

linda
	"JS function LindaClient"
	^Linda
! !

!LindaClient class methodsFor: 'utilities'!

changeDeefaultServerUrlForHeroku
	"LindaCLient changeDeefaultServerUrlForHeroku"
	
	defaultServerUrl := 'http://node-linda-ststudy.herokuapp.com'
!

flushDeefaultServerUrlForHeroku
	"LindaCLient flushDeefaultServerUrlForHeroku"
	
	defaultServerUrl := nil
! !

NodeLindaProxy subclass: #SocketIo
	instanceVariableNames: ''
	package: 'LindaClient'!

!SocketIo methodsFor: 'services'!

close
	^self proxy close
!

uri
	^self proxy uri
! !

!SocketIo class methodsFor: 'as yet unclassified'!

serverUrl: aUrlString

	"^self proxy: (self socketIo value: aUrlString value: #{#autoConnect -> false})"
	"^self proxy: (self socketIo value connect: aUrlString )"
	^self proxy: (self socketIo value: aUrlString )
!

socketIo
	^socketIo
! !

NodeLindaProxy subclass: #Tuple
	instanceVariableNames: 'data expireAt fromAddress'
	package: 'LindaClient'!

!Tuple methodsFor: 'accessing'!

data
	data ifNil: [data := #{}.
		self proxy ifNotNil: [self proxy data keysAndValuesDo: [:k :v | data at: k put: v]]].
	^data
!

data: anObject
	data := anObject
!

expireAt
	^ self proxy at: 'expire_at' ifAbsent: [nil]
!

fromAddress
	^self proxy at: 'from' ifAbsent: [nil]
!

keys
	^self keysOfJSON: self data
!

type
	^self data at: #type
!

type: anObject
	self data at: #type put: anObject
! !

!Tuple methodsFor: 'converting'!

asJSON
	self proxy ifNil: [proxy := self data asJSON].
	self proxy at: #class put: self class name.
	^proxy
! !

!Tuple class methodsFor: 'as yet unclassified'!

fromJSON: aProxy
	| tupleClassName |
	aProxy ifNil: [^nil].
	tupleClassName := aProxy data at: 'class' ifAbsent: ['Tuple'].
	^(Smalltalk globals at: tupleClassName) proxy: aProxy
! !

NodeLindaProxy subclass: #TupleSpace
	instanceVariableNames: ''
	package: 'LindaClient'!

!TupleSpace methodsFor: 'accessing'!

ioCallbacks
	^self proxy at: 'io_callbacks'
!

name
	^self proxy name
!

watchCallbackIds
	^self proxy at: 'watch_callback_ids'
! !

!TupleSpace methodsFor: 'callback services'!

createCallBackId

	^(self proxy at: 'create_callback_id') value
!

createWatchCallbackId: aTupleHashedCollection

	^(self proxy at: 'create_watch_callback_id') value: aTupleHashedCollection asJSON
! !

!TupleSpace methodsFor: 'private'!

removeIoCallbacks

	^(self proxy at: 'remove_io_callbacks') value
! !

!TupleSpace methodsFor: 'services'!

cancel: anId

	self proxy cancel: anId
!

option: aHashedCollection

	^self proxy option: aHashedCollection
!

read: aTuple
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	| ans |
	ans := OrderedCollection new.
	self read: aTuple callback: [:e :t| ans add: (Tuple fromJSON: t)].
	^ans
!

read: aTuple callback: aBlockClosure
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	^self proxy read: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
!

readp: aTuple wait: aMilliseconds callback: aBlockClosure 
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	| id |
	id := self read: aTuple asJSON callback: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)].
	[self cancel: id] valueWithTimeout: aMilliseconds
!

take: aTuple
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	| ans |
	ans := OrderedCollection new.
	self take: aTuple callback: [:e :t| ans add: t].
	^ans
!

take: aTuple callback: aBlockClosure
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	^self proxy take: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
!

takep: aTuple  wait: aMilliseconds callback: aBlockClosure
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	| id |
	id := self take: aTuple asJSON callback: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)].
	[self cancel: id] valueWithTimeout: aMilliseconds
!

watch: aTuple callback: aBlockClosure
	"aTuple	<Tuple | HaschedCollection>
	aBlockClosure <[:err :tuple | ]>"
	
	^self proxy watch: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
!

write: aTuple 
	"aTuple	<Tuple | HaschedCollection>"

	self write: aTuple options: nil
!

write: aTuple expireSeconds: anInteger	
	"aTuple	<Tuple | HaschedCollection>"
	
	self write: aTuple options: #{#expire -> anInteger}
!

write: aTuple options: optionsHashedCollection
	"aTuple	<Tuple | HaschedCollection>"

	self proxy write: aTuple asJSON with: optionsHashedCollection asJSON
! !

!TupleSpace class methodsFor: 'as yet unclassified'!

lindaClient: aLindaClient name: aTupleSpaceName

	^self proxy: (aLindaClient tupleSpace: aTupleSpaceName).
! !

