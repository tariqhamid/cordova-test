Smalltalk createPackage: 'LindaClientDemo'!
(Smalltalk packageAt: 'LindaClientDemo') imports: {'ko' -> 'knockout'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Tuple subclass: #CompassTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!CompassTuple methodsFor: 'accessing'!

handleName

	^self data at: self class handleNameKey
!

handleName: aString

	self data at: self class handleNameKey put: aString
!

heading

	^self data at: self class headingKey
!

heading: aString

	self data at: self class headingKey put: aString
!

headingRotate

	^self data at: self class headingRotateKey
!

headingRotate: aString

	self data at: self class headingRotateKey put: aString
! !

!CompassTuple class methodsFor: 'accessor key'!

handleNameKey
	^'handleName'.
!

headingKey
	^'heading'.
!

headingRotateKey
	^'headingRotate'.
! !

!CompassTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'compass'
! !

Tuple subclass: #FibTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!FibTuple methodsFor: 'accessing'!

answer

	^self data at: self class answerKey
!

answer: anInteger

	self data at: self class answerKey put: anInteger
!

n

	^self data at: self class nKey
!

n: anIndex

	^self data at: self class nKey put: anIndex
! !

!FibTuple class methodsFor: 'accessor '!

answerKey
	^'answer'.
!

fibTypeKey
	^'fib'.
!

nKey
	^'n'.
!

resultTypeKey
	^'fib-result'.
! !

!FibTuple class methodsFor: 'instance creation'!

fib
	| tuple |
	tuple := self new.
	tuple type: self fibTypeKey.
	^tuple
!

result
	| tuple |
	tuple := self new.
	tuple type: self resultTypeKey.
	^tuple
! !

!FibTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'fibSpace'
! !

Tuple subclass: #GyroTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!GyroTuple methodsFor: 'accessing'!

gX

	^self data at: self class gXKey
!

gX: aValue

	self data at: self class gXKey put: aValue
!

gY

	^self data at: self class gYKey
!

gY: aValue

	self data at: self class gYKey put: aValue
!

gZ

	^self data at: self class gZKey
!

gZ: aValue

	self data at: self class gZKey put: aValue
!

handleName

	^self data at: self class handleNameKey
!

handleName: aString

	self data at: self class handleNameKey put: aString
! !

!GyroTuple class methodsFor: 'accessor key'!

gXKey
	^'gX'.
!

gYKey
	^'gY'.
!

gZKey
	^'gZ'.
!

handleNameKey
	^'handleName'.
! !

!GyroTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'gyroSpace'
! !

Object subclass: #LindaBasicDemo
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaBasicDemo class methodsFor: 'defaults'!

defaultTupleSpace
	| lindaClient |
	lindaClient := LindaClient default.
	^lindaClient tupleSpace: 'default'
! !

!LindaBasicDemo class methodsFor: 'factorial'!

factorialMaster

	| tickets n lot ts ans|
	tickets := 5.
	n := 100.
	lot := n /  tickets.
	ts := LindaBasicDemo defaultTupleSpace.
	(1 to: n by: lot) do:[:i |
		ts write: #{#type -> #fact . #i -> i. #lot -> lot}.].
	ans := OrderedCollection new.
	(1 to: tickets) do:[:i |
		ts take: #{#type -> #ans} callback: [:err :t |
			ans add: (t data at: #ans).
			(i = tickets)
				ifTrue: [(ans inject: 1 into: [:sum :e | sum * e]) inspect].
		]].
!

factorialWorker

	| base lot ts ans|
	ts := LindaBasicDemo defaultTupleSpace.
	ts take: #{#type -> #fact} callback: [:err :t |
		base := t data at: 'i'.
		lot := t data at: 'lot'.
		ans := (base to: (base + lot - 1)) inject: 1 into: [:sum :elm | sum * elm].
		ts write: #{#type -> #ans . #i -> base . #ans -> ans} .
	].
! !

!LindaBasicDemo class methodsFor: 'pholosoper table'!

phil: anIndex total: num
	"[LindaBasicDemo phil: 4 total: 5] valueWithInterval: 2000"

	| ts |
	ts := self philosopherTupleSpace.

	Transcript show: 'Phil ', anIndex printString, ' is thinking'; cr.
	ts read: #{'type' -> 'ticket'} callback: [:err1 :ti |
		ts read: #{'type' -> 'chopstick' . 'i' -> anIndex} callback: [:err2 :c1 |
			ts read: #{'type' -> 'chopstick' . 'i' -> ((anIndex + 1) \\ num)} callback: [:err3 :c2 |
				Transcript show: 'Phil ', anIndex printString, ' starts eating'; cr.
				Transcript show: 'Phil ', anIndex printString, ' ends eating'; cr.
				ts write: #{'type' -> 'chopstick' . 'i' -> anIndex}.
				ts write: #{'type' -> 'chopstick' . 'i' -> ((anIndex + 1) \\ num)}.
				ts write: #{'type' -> 'ticket'} .
			].
		].
	].
!

philMasterTotal: num
	"LindaBasicDemo philosopherTupleSpace take: #{} callback: [:e :t| Transcript show: t; cr].

	LindaBasicDemo philMasterTotal: 5.

	1 to: 5 do: [:i |
		[LindaBasicDemo phil: i total: 5] valueWithInterval: (10 atRandom * 1000)
	]"

	| ts |
	ts := self philosopherTupleSpace.
	1 to: num do: [:i |
		ts write: #{'type' -> 'chopstick' . 'i' -> i}.
	].

	(num - 1) timesRepeat: [
		ts write: #{'type' -> 'ticket'} .
	]
!

philosopherTupleSpace
	| lindaClient |
	lindaClient := LindaClient default.
	^lindaClient tupleSpace: 'philTable'
! !

Object subclass: #LindaClientApp
	instanceVariableNames: 'lindaClient viewModel watchId interval'
	package: 'LindaClientDemo'!

!LindaClientApp methodsFor: 'accessing'!

interval
	interval ifNil: [interval := 0].
	^ interval
!

interval: anObject
	interval := anObject
!

lindaClient
	^ lindaClient
!

lindaClient: anObject
	lindaClient := anObject
!

serverUrl
	^ (self viewModel at: #serverUrl) value
!

viewModel
	^viewModel ifNil: [viewModel := #{}]
!

viewModel: anObject
	viewModel := anObject
!

watchId
	^ watchId
!

watchId: anObject
	watchId := anObject
! !

!LindaClientApp methodsFor: 'action'!

doJQueryPrepend: aMsg
	| elem|
	elem := '<li>' asJQuery.
	elem html: aMsg.
	'#output-list' asJQuery prepend: elem
!

incInterval
	self interval > self intervalLimit ifTrue: [self interval: 0].
	self interval: self interval + 1
!

intervalLimit
	^100
!

startDemo

	self setupLindaClient.
	'#start' asJQuery text: 'デモ中'
! !

!LindaClientApp methodsFor: 'starting'!

augmentPage

	'#start' asJQuery click: [ self startDemo ].
	self setupViewModel.
	ko applyBindings: viewModel.
	self setupLindaClient.
!

resetStartButton

	'#start' asJQuery text: 'START'
!

setupLindaClient

	lindaClient := LindaClient serverUrl: self serverUrl
!

setupViewModel

	self viewModel addAll: #{
		#availableServers -> (ko observableArray: LindaClient serverUrls) .
		#serverUrl -> (ko observable: LindaClient defaultServerUrl)
	}.
! !

!LindaClientApp class methodsFor: 'starting'!

ko
	^ko
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaCompass
	instanceVariableNames: 'workersTable'
	package: 'LindaClientDemo'!

!LindaCompass methodsFor: 'accessing'!

dataOfWorkersTable
	^self workersTable values collect: [:e | e data]
!

handleName
	^(viewModel at: #handleName ) value
!

heading
	^(viewModel at: #heading) value
!

heading: aValue
	(viewModel at: #heading) value: aValue
!

headingRotate
	^(viewModel at: #headingRotate) value
!

headingRotate: aValue
	(viewModel at: #headingRotate) value: aValue
!

tupleSpace
	^self lindaClient tupleSpace: CompassTuple tupleSpaceName
!

workerAt: aKey
	^self workersTable at: aKey
!

workerAt: aKey put: aWorker
	self workersTable at: aKey put: aWorker
!

workersTable
	workersTable ifNil: [workersTable := #{}].
	^workersTable
! !

!LindaCompass methodsFor: 'action'!

setupHandle

	window addEventListener: #deviceorientation
		with: self deviceorientationHandler
		with: false.
!

startDemo

	| tuple |
	super startDemo.
	self setupHandle.
	tuple := CompassTuple new.
	watchId ifNotNil: [self tupleSpace cancel: watchId].
	watchId := self tupleSpace watch: tuple callback: [:err :t |
		self workerAt: t fromAddress put: t.
		(self viewModel at: #workers) value: self dataOfWorkersTable.
	].
! !

!LindaCompass methodsFor: 'starting'!

augmentPage

	super augmentPage.
!

deviceorientationHandler
	^[:event |
		| tmp tuple |
		tmp := event webkitCompassHeading.
		tmp ifNil: [tmp := event alpha].
		self updateHeading: tmp.
		tuple := CompassTuple new.
		tuple handleName: self handleName.
		tuple heading: self heading.
		tuple headingRotate: self headingRotate.
		self interval > self intervalLimit
			ifTrue: [self tupleSpace write: tuple]
			ifFalse: [self incInterval].
	].
!

setupViewModel

	super setupViewModel.

	viewModel addAll: #{
		#handleName -> (ko observable: 'handle name') .
		#accuracy -> (ko observable: 0) .
		#heading -> (ko observable: 0) .
		#headingRotate -> (ko observable: (self rotateStr: 0)) .
		#workers -> (ko observableArray: #())

	}.
! !

!LindaCompass methodsFor: 'updating'!

rotateStr: anInteger

	^('rotate(', anInteger negated printString, 'deg)')
!

updateHeading: anInteger

	| aValue |
	aValue := anInteger.
	aValue < 0
		ifTrue: [aValue := aValue + 360].
	aValue := aValue + window orientation.
	self heading: aValue.
	self headingRotate: (self rotateStr: aValue)
! !

LindaClientApp subclass: #LindaFibMaster
	instanceVariableNames: 'n result startDate'
	package: 'LindaClientDemo'!

!LindaFibMaster methodsFor: 'accessing'!

map
	| requestTuple resultTuple |
	resultTuple := FibTuple result.

	(self n to: 1 by: -1) do: [:i |
		requestTuple := FibTuple fib.
		requestTuple n: i.
		self tupleSpace write: requestTuple].

	resultTuple n: 0; answer: 0.
	self tupleSpace write: resultTuple.
!

n
	^(self viewModel at:#n) value asNumber
!

n: anObject
	(self viewModel at:#n) value: anObject
!

numberOfEntry
	^(self viewModel at:#numberOfEntry) value
!

numberOfEntry: anObject
	(self viewModel at:#numberOfEntry) value: anObject
!

readResultTuple
	| tuple |
	tuple := FibTuple result.
	tuple n: self n.
	self tupleSpace read: tuple callback: [:err :t |
		self timeToRun: Date now - startDate.
		self result: t answer]
!

result
	^ (self viewModel at: #result) value
!

result: anObject
	(self viewModel at: #result) value: anObject
!

startMap
	| requestTuple resultTuple |
	resultTuple := FibTuple result.

	(self n to: 1 by: -1) do: [:i |
		requestTuple := FibTuple fib.
		requestTuple n: i.
		self tupleSpace write: requestTuple.
		self decNumberOfEntry].

	resultTuple n: 0; answer: 0.
	self tupleSpace write: resultTuple.
!

timeToRun: anObject
	(self viewModel at: #timeToRun) value: anObject
!

tupleSpace

	^self lindaClient tupleSpace: FibTuple tupleSpaceName
! !

!LindaFibMaster methodsFor: 'action'!

clearResults

	|  resultTuple |
	resultTuple := FibTuple result.
	(self n to: 1 by: -1) do: [:i |
		resultTuple n: i.
		self tupleSpace takep: resultTuple wait: 10 callback: [:e :t | ]].

	resultTuple n: 0; answer: 0.
	self tupleSpace takep: resultTuple wait: 10 callback: [:e :t | ].
!

decNumberOfEntry

	self numberOfEntry: (self numberOfEntry - 1)
!

incNumberOfEntry

	self numberOfEntry: (self numberOfEntry + 1)
!

resetNumberOfEntry

	self numberOfEntry: 0
!

startDemo
	| msec |
	super startDemo.
	self result: 0.
	self timeToRun: 0.
	startDate := Date now.
	self startMap.
	self readResultTuple.
! !

!LindaFibMaster methodsFor: 'starting'!

augmentPage
	| ts entryTuple |
	super augmentPage.
	'#clear' asJQuery click: [ self clearResults ].

	self resetNumberOfEntry.
	ts := self tupleSpace.
	entryTuple := #{'type' -> 'entry'}.
	ts watch: entryTuple callback: [:e1 :t1 |
		ts take: entryTuple callback: [:e2 :t2 |
			self incNumberOfEntry.
		].
	]
!

setupViewModel
	super setupViewModel.
	viewModel addAll: #{
		#n -> (ko observable: 5) .
		#result -> (ko observable: 0) .
		#timeToRun -> (ko observable: 0) .
		#numberOfEntry -> (ko observable: 0)
	}.
! !

!LindaFibMaster class methodsFor: 'starting'!

example

	| app  lot ts ans|
	app := LindaFibMaster new.
	app lindaClient: (LindaClient default).
	app n: 10.
	app startMap.
	app readResultTuple.
	app inspect
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFibWorker
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaFibWorker methodsFor: 'accessing'!

resultNumber
	"^ end"
	^ nil
!

targetNumber
	"^ start"
	^ nil
! !

!LindaFibWorker methodsFor: 'action'!

startDemo

	super startDemo.
	self tupleSpace write: #{#type -> 'entry'}.
	self startReduce
!

startReduce

	self tupleSpace take: #{#type -> 'fib'} callback: [:err :t |
		self reduce: (t data at: 'n').
		self resetStartButton]
! !

!LindaFibWorker methodsFor: 'starting'!

orgfib: n
		^ n < 2
		ifTrue: [1]
		ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]
!

readResultNoWait: anIndex
	| ans id tuple |
	ans := OrderedCollection new.
	tuple := FibTuple result.
	tuple n: anIndex.
	id := self tupleSpace read: tuple callback: [:err :tu | ans add: tu ].
	[self tupleSpace cancel: id] valueWithTimeout:1.
	^ans reject: [:e | e isNil]
!

reduce: n
	| ans id value v1 v2 |
	ans := self readResultNoWait: n.
	ans isEmpty
		ifTrue: [n < 3
					ifTrue: [self writeResult: n value: 1]
					ifFalse: [
						self tupleSpace read: #{#type -> 'fib-result' . #n -> (n - 2)} callback: [:e1 :t1 |
							self tupleSpace read: #{#type -> 'fib-result' .  #n -> (n - 1)} callback: [:e2 :t2 |
								v1 := (t1 data at: 'answer').
								v2 := (t2 data at: 'answer').
								self writeResult: n value: (v1 + v2).
								]
							]
						]
					]
!

setupViewModel
	super setupViewModel.
	viewModel addAll: #{
		#targetNumber -> (ko observable: 0) .
		#resultNumber -> (ko observable: 0)
	}.
!

tupleSpace

	^self lindaClient tupleSpace: FibTuple tupleSpaceName
!

writeResult: anIndex value: aValue
	| tuple |
	self doJQueryPrepend:'第', anIndex printString, '番目のフィボナッチ数: ', aValue printString.
	tuple := FibTuple result.
	tuple n: anIndex.
	tuple answer: aValue.
	self tupleSpace write: tuple
! !

!LindaFibWorker class methodsFor: 'starting'!

example

	| solver |
	solver := LindaFibWorker new.
	solver lindaClient: (LindaClient default).
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t |
		solver reduce: (t data at: 'n')]
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaGyroMaster
	instanceVariableNames: 'workersTable debugList'
	package: 'LindaClientDemo'!

!LindaGyroMaster methodsFor: 'accessing'!

dataOfWorkersTable
	^self workersTable values collect: [:e | e data]
!

tupleSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
!

workerAt: aKey
	^self workersTable at: aKey
!

workerAt: aKey put: aWorker
	self workersTable at: aKey put: aWorker
!

workersTable
	workersTable ifNil: [workersTable := #{}].
	^workersTable
! !

!LindaGyroMaster methodsFor: 'action'!

startDemo
	| tuple |
	super startDemo.
	self inspect.
	tuple := GyroTuple new.
	debugList := OrderedCollection new.
	watchId ifNotNil: [self tupleSpace cancel: watchId].
	watchId := self tupleSpace watch: tuple callback: [:err :t |
		debugList add: t.
		self workerAt: t fromAddress put: t.
		(self viewModel at: #workers) value: self dataOfWorkersTable.

		"self doJQueryPrepend: t asJSON printString."
	].
! !

!LindaGyroMaster methodsFor: 'starting'!

augmentPage
	super augmentPage.
!

setupViewModel
	super setupViewModel.
	viewModel addAll: #{
		#workers -> (ko observableArray: #())
	}.
! !

LindaClientApp subclass: #LindaGyroWorker
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaGyroWorker methodsFor: 'accessing'!

gX
	^(viewModel at: #gX) value
!

gX: aValue
	(viewModel at: #gX) value: aValue
!

gY
	^(viewModel at: #gY) value
!

gY: aValue
	(viewModel at: #gY) value: aValue
!

gZ
	^(viewModel at: #gZ) value
!

gZ: aValue
	(viewModel at: #gZ) value: aValue
!

handleName
	^(viewModel at: #handleName ) value
!

tupeSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
!

tupleSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
! !

!LindaGyroWorker methodsFor: 'action'!

setupHandle

	window addEventListener: #devicemotion with: self devicemotionHandler.
!

startDemo
	super startDemo.
	self setupHandle.
! !

!LindaGyroWorker methodsFor: 'starting'!

augmentPage

	super augmentPage.
!

devicemotionHandler
	^[:event |
		self

			gX: (event acceleration x * 100) rounded
			gY: (event acceleration y * 100) rounded
			gZ: (event acceleration z * 100) rounded
"
			gX: (event accelerationIncludingGravity x * 10) rounded
			gY: (event accelerationIncludingGravity y * 10) rounded
			gZ: (event accelerationIncludingGravity z * 10) rounded
"
	].
!

olddevicemotionHandler
	^[:event |
		"(viewModel at: #accX) value: event acceleration x.
		(viewModel at: #accY) value: event acceleration y.
		(viewModel at: #accZ) value: event acceleration z."

		(viewModel at: #gX) value: (event accelerationIncludingGravity x rounded) * 10.
		(viewModel at: #gY) value: (event accelerationIncludingGravity y rounded) * 10.
		(viewModel at: #gZ) value: (event accelerationIncludingGravity z rounded) * 10.

		"
		(viewModel at: #tiltLR) value: event rotationRate gamma rounded.
		(viewModel at: #tiltFB) value: event rotationRate beta rounded.
		(viewModel at: #webRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg) rotate3d(1,0,0, ', ((viewModel at: #tiltFB) value * -1) printString, 'deg)' .
		(viewModel at: #mozRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg)' .
		"
		(viewModel at: #rotateYX) value: 'rotateX(', (self gY) printString, 'deg)',
		' rotateY(', (self gX) printString, 'deg)'.


	].
!

setupViewModel

	super setupViewModel.

	viewModel addAll: #{
		#handleName -> (ko observable: 'handle name') .
		#gX -> (ko observable: 0) .
		#gY -> (ko observable: 0) .
		#gZ -> (ko observable: 0) .

		"
		#tiltLR -> (ko observable: 0).
		#tiltFB -> (ko observable: 0).
		#webRotate -> (ko observable: 'rotate(', (30) printString, 'deg) rotate3d(1,0,0, ', ((30) * -1) printString, 'deg)').
		#mozRotate -> (ko observable: 'rotate(', (30) printString, 'deg)').
		"

		#rotateYX -> (ko observable:
		'rotateX(', 30 printString, 'deg)',
		' rotateY(', 30 printString, 'deg)')
	}.
! !

!LindaGyroWorker methodsFor: 'updating'!

gX: xValue gY: yValue gZ: zValue
	| tuple |
	(self gX ~= xValue) | (self gY ~= yValue) | (self gZ ~= zValue)
		ifTrue: [

			self gX: (xValue ).
			self gY: (yValue ).
			self gZ: (zValue ).

			(viewModel at: #rotateYX) value: 'rotateX(', (yValue) negated printString, 'deg)',
				' rotateY(', (xValue) negated printString, 'deg)'.
			tuple := GyroTuple new.
			tuple handleName: self handleName.
			tuple gX: self gX.
			tuple gY: self gY.
			tuple gZ: self gZ.
			self tupleSpace write: tuple.
		]
! !

LindaClientApp subclass: #LindaThermoController
	instanceVariableNames: 'workerList'
	package: 'LindaClientDemo'!

!LindaThermoController methodsFor: 'accessing'!

dataOfWorkerList
	^self workerList collect: [:e | e data]
!

tupleSpace
	^self lindaClient tupleSpace: ThermoTuple tupleSpaceName
!

workerList
	workerList ifNil: [workerList := #()].
	^workerList
! !

!LindaThermoController methodsFor: 'action'!

airconOff
	| tuple list |
	self startDemo.
	tuple := ThermoTuple airconCommand.
	tuple airconOff.
	self tupleSpace write: tuple.
!

airconOn
	| tuple list |
	self startDemo.
	tuple := ThermoTuple airconCommand.
	tuple airconOn.
	self tupleSpace write: tuple.
!

airconTimer
	| tuple list |
	self startDemo.
	tuple := ThermoTuple airconCommand.
	tuple airconTimer.
	self tupleSpace write: tuple.
!

startDemo
	| tuple log |
	super startDemo.
	tuple := ThermoTuple new.

	watchId ifNotNil: [self tupleSpace cancel: watchId].
	watchId := self tupleSpace watch: tuple callback: [:err :t |
		t ifNotNil: [
			self workerList addFirst: t.
			(self viewModel at: #workers) value: self dataOfWorkerList. ]
	].
!

thermoQuery
	| tuple list |
	self startDemo.
	tuple := ThermoTuple airconCommand.
	tuple airconQuery.
	self tupleSpace write: tuple.
! !

!LindaThermoController methodsFor: 'starting'!

augmentPage
	super augmentPage.
	'#airconOn' asJQuery click: [ self airconOn ].
	'#airconOff' asJQuery click: [ self airconOff ].
	'#thermoQuery' asJQuery click: [ self thermoQuery ].
!

setupViewModel
	super setupViewModel.
	viewModel addAll: #{
		#workers -> (ko observableArray: #())
	}.
! !

Tuple subclass: #PrimeTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!PrimeTuple methodsFor: 'accessing'!

i

	^self data at: self class iKey
!

i: aValue

	self data at: self class iKey put: aValue
!

isFixed

	^self data at: self class isFixedKey
!

isFixed: aValue

	self data at: self class isFixedKey put: aValue
!

isPrime

	^self data at: self class isPrimeKey
!

isPrime: aValue

	self data at: self class isPrimeKey put: aValue
!

max

	^self data at: self class maxKey
!

max: aValue

	self data at: self class maxKey put: aValue
! !

!PrimeTuple methodsFor: 'initialization'!

initialize
	super initialize.
	self isFixed: false.
	self isPrime: true
! !

!PrimeTuple methodsFor: 'status changing'!

beFixed

	self isFixed: true
!

beNotFixed

	self isFixed: false
!

beNotPrime

	self isPrime: false
! !

!PrimeTuple class methodsFor: 'accessor key'!

iKey
	^'i'.
!

isFixedKey
	^'isFiexed'.
!

isPrimeKey
	^'isPrime'.
!

maxKey
	^'max'.
! !

!PrimeTuple class methodsFor: 'instance create'!

beMax
!

beMax: anInteger

	| tuple |
	tuple := self new.
	self max: anInteger.
	^tuple
!

i: anInteger
	"PrimeTuple i: 3"
	^self new i: anInteger
!

notFixed
	^self new
! !

!PrimeTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'sieve'
! !

Tuple subclass: #ThermoTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!ThermoTuple methodsFor: 'accessing'!

aircon

	^self data at: self class airconKey ifAbsent: ['N/A']
!

aircon: aValue

	self data at: self class airconKey put: aValue
!

celsius

	^self data at: self class celsiusKey ifAbsent: ['N/A']
!

celsius: aValue

	self data at: self class celsiusKey put: aValue
!

sensor

	^self data at: self class sensorKey ifAbsent: ['N/A']
!

sensor: aValue

	self data at: self class sensorKey put: aValue
!

time

	^self data at: self class timeKey ifAbsent: ['N/A']
!

time: aValue

	self data at: self class timeKey put: aValue
! !

!ThermoTuple methodsFor: 'initialization'!

initForAircon
	super initialize.

	self sensor: ''.
	self celsius: 1000.
	self time: ''
! !

!ThermoTuple methodsFor: 'status changing'!

airconOff

	self aircon: 'off'.
	self time: 'エアコン消せ'
!

airconOn

	self aircon: 'on'.
	self time: 'エアコン点けれ'
!

airconQuery

	self aircon: 'query'.
	self time: '何℃か教えれ'
!

airconTimer

	self aircon: 'timer'
! !

!ThermoTuple class methodsFor: 'accessor key'!

airconCommand

	| tuple |
	tuple := self new.
	tuple initForAircon.
	^tuple
!

airconKey
	^'aircon'.
!

celsiusKey
	^'celsius'.
!

sensorKey
	^'sensor'.
!

timeKey
	^'time'.
! !

!ThermoTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'sensors'
! !
