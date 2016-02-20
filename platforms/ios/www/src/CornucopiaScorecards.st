Smalltalk createPackage: 'CornucopiaScorecards'!
Object subclass: #CrEggSupplier
	instanceVariableNames: 'brand company rating location marketArea totalScore'
	package: 'CornucopiaScorecards'!

!CrEggSupplier methodsFor: 'accessing'!

brand
	^ brand
!

brand: aString
	brand := aString
!

company
	^ company
!

company: aString
	company := aString
!

location
	^ location
!

location: aString
	location := aString
!

marketArea
	^ marketArea
!

marketArea: aString
	marketArea := aString
!

rating
	^ rating
!

rating: anInteger
	rating := anInteger
!

totalScore
	^ totalScore
!

totalScore: anInteger
	totalScore := anInteger
! !

!CrEggSupplier methodsFor: 'printing'!

printOn: aStream
	aStream
		nextPutAll: brand;
		nextPutAll: ' is rated a ';
		print: rating
! !

CrEggSupplier class instanceVariableNames: 'all'!

!CrEggSupplier class methodsFor: 'accessing'!

all
	^ all ifNil: [ all := self downloadAll ]
!

allAphabeticalByBrand
	^ self all asOrderedCollection sort: [ :a :b | a brand < b brand ]
!

brandsStartingWith: aString

	^ self allAphabeticalByBrand select: [ :e | e brand asLowercase beginsWith: aString asLowercase ]
!

downloadAll
	"This must be done syncronously. Solution adapted from http://stackoverflow.com/questions/13009755/getjson-synchronous"

	| response |
	response := JQuery current ajax: #{ #dataType -> 'json'. #url -> './egg_suppliers.json'. #async -> false }.
	^ response responseJSON collect: [ :e |
		| supplier |
		supplier := CrEggSupplier new.
		e keysAndValuesDo: [ :k :v | supplier instVarAt: k put: v ].
		supplier ].
! !

!CrEggSupplier class methodsFor: 'private'!

all: aCollection
	all := aCollection
! !
