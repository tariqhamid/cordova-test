Smalltalk createPackage: 'Silk'!
Domite subclass: #Silk
	instanceVariableNames: ''
	package: 'Silk'!
!Silk commentStamp!
I am adding convenience APIs to my subclass, `Domite`.

##Rendering

 - `aSilk << anObject` uses double-dispatch via `renderOnSilk:`. This allows creating widgets (no formal superclass, anything with `renderOnSilk:` is a widget), as well as incorporating magic on other objects:
   - blocks: `aSilk << aBlock` runs the block, passing aSilk as a parameter.
   - associations: `aSilk << (key -> value)` set attribute key to value.

It is good to note that rendering collection has magic
of its own built-in in general: if you `stream << aCollection`, its items are `<<`'d in sequence.
So, de facto, array are deeply flattened
when putting on a stream via `<<`.

##Convenience

 - `aCssSelectorString asSilk` returns Silk wrapping an element at a selector.
 - `anObject inSilk` returns anObject rendered in a document fragment.

##Element creation

These messages use DNU to dynamically create
elements with any (letters-and-numbers) tag name,
Next samples show this on an example of `<div>`.

 - `Silk DIV` is shortcut for `Silk newElement: 'div'`.
 - `aSilk DIV` is shortcut for `[ |tmp| tmp := Silk DIV. aSilk << tmp. tmp] value`. IOW, it not just creates the element and returns it, but also puts in on aSilk.
 - `aSilk DIV: anObject` is shortcut for `aSilk DIV << anObject; yourself`. IOW, it not just creates and insert the element, but puts a content into it.

##Conclusions

Taken all this together, one can do pretty neat constructs:

```
  aSilk P: { 'id'->'mission'. 'We are the champions.' }
```

adds `<p id="mission">We are the champions.</p>` into `aSilk`.!

!Silk methodsFor: 'writing'!

doesNotUnderstand: aMessage
	"`aSilk DIV` creates a div element and inserts it.
	`aSilk DIV: anObject` creates a div element, inserts it
	and puts contents in it"
	(self class tryMakeDnuElement: aMessage)
		ifNil: [ ^ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :newElement | self << newElement. ^ newElement ]
!

nextPut: anObject
	"Double-dispatches anObject via renderOnSilk: message.
	If a message returns nil, this fallbacks to superclass.
	Otherwise, it is assumed renderOnSilk: did its job."

	(anObject renderOnSilk: self)
		ifNil: [ super nextPut: anObject ]
! !

!Silk class methodsFor: 'instance creation'!

tryMakeDnuElement: aMessage
	"`DIV` creates a div element.
	`DIV: anObject` creates a div element and puts contents in it"
	| selector newElement useArg |
	selector := aMessage selector.
	selector asUppercase = selector
		ifFalse: [ ^ nil ].
	selector last = ':'
		ifTrue: [ useArg := true. selector := selector allButLast ]
		ifFalse: [ useArg := false ].
	(selector includes: ':')
		ifTrue: [ ^ nil ].
	newElement := self newElement: selector asLowercase.
	useArg ifTrue: [ newElement << aMessage arguments first ].
	^ newElement
! !

!Silk class methodsFor: 'message handling'!

doesNotUnderstand: aMessage
	"`Silk DIV` creates a div element.
	`Silk DIV: anObject` creates a div element and puts contents in it"
	(self tryMakeDnuElement: aMessage)
		ifNil: [ ^ super doesNotUnderstand: aMessage ]
		ifNotNil: [ :newElement | ^ newElement ]
! !

!Association methodsFor: '*Silk'!

renderOnSilk: aSilk
	key attrPut: value on: aSilk
! !

!BlockClosure methodsFor: '*Silk'!

renderOnSilk: aSilk
	self value: aSilk
! !

!CharacterArray methodsFor: '*Silk'!

asSilk
	^ Silk at: self asString
! !

!JSObjectProxy methodsFor: '*Silk'!

inSilk
	^ Silk newStream << self; yourself
! !

!Object methodsFor: '*Silk'!

inSilk
	^ Silk newStream << self; yourself
!

renderOnSilk: aSilk
	^ nil
! !

!String methodsFor: '*Silk'!

attrPut: anObject on: aSilk
	aSilk attrAt: self put: anObject
! !

