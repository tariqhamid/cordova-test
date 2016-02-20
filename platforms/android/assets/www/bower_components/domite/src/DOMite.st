Smalltalk createPackage: 'DOMite'!
ProtoStream subclass: #Domite
	instanceVariableNames: 'element reference'
	package: 'DOMite'!
!Domite commentStamp!
I am (hopefully thin) wrapper around the notion of "cursor in a page".
I represent a DOM node _and_ a point where
to insert new content into it.

So I play both the role of a container that inserts
as well as the role of an element being inserted.

I inherit from `ProtoStream`.

Creation API:

 - `Domite new` creates an insertion point at the bottom of `<body>`.
 - `Domite newStream` is unique way to create pieces of content. It creates an instance "floating in thin air" (wrapper around DOM DocumentFragment) that can be filled with any contents and then inserted in a page.
 - `Domite fromElement: aDomElement` wraps an element and set the cursor to its end.
 - `Domite newElement: 'div'` creates new `<div />` element (and returns it wrapped as a Domite).

CSS selector API:

 - `Domite at: aSelector` wraps an element found by `document.querySelector(aSelector)`.
 - `aDomite at: aSelector` wraps an element found by `element.querySelector(aSelector)`.
 - `Domite allAt: aSelector` return collection of wrapped results of `document.querySelectorAll(aSelector)`.
 - `aDomite allAt: aSelector` return collection of wrapped results of `element.querySelectorAll(aSelector)`.

Manipulation API:

 - `aDomite << obj` inserts obj at the insertion point.
 - `aDomite resetContents` deletes contents of the wrapped element.
 - `aDomite cutUpTo: anotherDomite` removes contents between the two cursors (or up to the end of the receiver) and returns it collected in a wrapped DocumentFragment (IOW, you can `anotherPlace << theResult` to move the contents in the specified range).

 - `aDomite attrAt: aString` returns attribute of the wrapped element or nil.
 - `aDomite attrAt: aString put: anotherString` sets an attribute of the wrapped element.
 - `aDomite propAt: aString` returns JS property of the wrapped element or nil.
 - `aDomite propAt: aString put: anObject` sets JS property of the wrapped element.

Cursor moving API:

Take this sample HTML, where `[n]` are just markers, not real content:

```
<body>
  <h1>header</h1>
  [4]<p>[2]Hello[1]world[3]</p>[5]
  <small>footer</small>
</body>
```

If `d` is a `Domite` representing `[1]`, then:

 - `d setToStart` would move `d` to be at `[2]`,
 - `d setToEnd` would move `d` to be at `[3]`,
 - `d setToBefore` would move `d` to be at `[4]`, and
 - `d setToAfter` would move `d` to be at `[5]`.

It is not presumed one would use `setToXxx`
to actually move around in a single instance.
It is envisioned this API will be used mostly
in combination with `copy`, like
`afterMe := self copy setToAfter`.

Event API:

 - `aDomite on: aString bind: [ :ev | ... ]` binds a block to process an event.
 - `aDomite off: aString unbind: aBlock` unbinds the block from processing an event.
 - `aDomite fire: aString [detail: anObject]` triggers a CustomEvent with specified type and, optionally, a detail object.
 - `aDomite fireEvent: anEvent` triggers existing DOM Event object!

!Domite methodsFor: 'accessing'!

allAt: aString
	^ self class wrap: (self class domListAsArray: (self element querySelectorAll: aString))
!

at: aString
	^ self class fromElement: (self element querySelector: aString)
!

attrAt: aString
	(element hasAttribute: aString)
		ifTrue: [ ^ element getAttribute: aString ]
		ifFalse: [ ^ nil ]
!

attrAt: aString put: anotherString
	element setAttribute: aString to: anotherString
!

element
	^ element
!

element: anObject
	element := anObject
!

propAt: aString
	^ element at: aString
!

propAt: aString put: anObject
	^ element at: aString put: anObject
!

reference
	^ reference
!

reference: anObject
	reference := anObject
! !

!Domite methodsFor: 'comparing'!

= aDomite
	^ self class = aDomite class and: [
		self element = aDomite element and: [
			self reference = aDomite reference ]]
! !

!Domite methodsFor: 'converting'!

asJQuery
	^ self element asJQuery
! !

!Domite methodsFor: 'deletion'!

cutUpTo: aDomite
<
	var result = document.createDocumentFragment(),
		start = self['@reference'],
		end = aDomite['@reference'],
		tmp;
	while (start && start !!= end) {
		tmp = start;
		start = start.nextSibling;
		result.appendChild(tmp);
	}
	self['@reference'] = start;
	return self._class()._fromElement_(result);
>
!

resetContents
<
	var element = self['@element'], child;
	while (child = element.firstChild) element.removeChild(child);
	self['@reference'] = null;
>
! !

!Domite methodsFor: 'events'!

fire: aString
	self fire: aString detail: nil asJSON
!

fire: aString detail: anObject
	self fireEvent: (
		self class createCustomEvent: aString detail: anObject)
!

fireEvent: anEvent
	self element dispatchEvent: anEvent
!

off: aString unbind: aBlock
	self element removeEventListener: aString block: aBlock useCapture: false
!

on: aString bind: aBlock
	self element addEventListener: aString block: aBlock useCapture: false
! !

!Domite methodsFor: 'initialization'!

initialize
	super initialize.
	element := document body.
	reference := nil asJSON
! !

!Domite methodsFor: 'insertion'!

nextPut: anObject
	self nextPutString: anObject printString
!

nextPutDomNode: aDomElement
	self element
		insertBefore: aDomElement
		reference: self reference
!

nextPutJSObject: aJSObject
	(self class isDomNode: aJSObject)
		ifTrue: [ self nextPutDomNode: aJSObject ]
		ifFalse: [ self nextPut: aJSObject ]
!

nextPutString: aString
	self nextPutDomNode: (
		document createTextNode: aString asString )
! !

!Domite methodsFor: 'positioning'!

reset
	self reference: self element firstChild
!

setToAfter
	self
		reference: self element nextSibling;
		element: self element parentNode
!

setToBefore
	self
		reference: self element;
		element: self element parentNode
!

setToEnd
	self reference: nil asJSON "null"
!

setToNext
	self atEnd ifFalse: [
		self reference: self reference nextSibling ]
!

setToPrev
	self atStart ifFalse: [
		self reference: (self reference
			ifNil: [ self element lastChild ]
			ifNotNil: [ :ref | ref previousSibling ])]
! !

!Domite methodsFor: 'reading'!

next
	self atEnd
		ifTrue: [ ^ nil ]
		ifFalse: [ | result |
			result := self peek.
			self setToNext.
			^ result ]
!

peek
	^ self reference
		ifNotNil: [ :ref | self class fromElement: ref ]
!

prev
	self atStart
		ifTrue: [ ^ nil ]
		ifFalse: [ self setToPrev. ^ self peek ]
! !

!Domite methodsFor: 'streaming'!

putOn: aStream
	aStream nextPutDomNode: self element
! !

!Domite methodsFor: 'testing'!

atEnd
	^ self reference isNil
!

atStart
	^ self reference = self element firstChild
!

canSetToUpperLevel
	^ self element parentNode notNil
!

isInvalid
	^ self element isNil
! !

!Domite class methodsFor: 'converting'!

domListAsArray: aDomList
<return Array.prototype.slice.call(aDomList)>
!

wrap: aCollection
	^ aCollection collect: [ :each | self fromElement: each ]
! !

!Domite class methodsFor: 'events'!

createCustomEvent: aString detail: anObject
<return new CustomEvent(aString, {detail: anObject})>
! !

!Domite class methodsFor: 'instance creation'!

allAt: aString
	^ self wrap: (self domListAsArray: (document querySelectorAll: aString))
!

at: aString
	^ self fromElement: (document querySelector: aString)
!

fromElement: aDomElement
	aDomElement ifNotNil: [
		(self isDomNode: aDomElement) ifFalse: [
			self error: self name, ': Need a DOM node' ]].
	^ self new
		element: aDomElement;
		yourself
!

fromElement: aDomElement cursorBefore: anotherDomElement
	^ (self fromElement: aDomElement)
		reference: anotherDomElement;
		yourself
!

newElement: aString
	^ self fromElement: (document createElement: aString)
!

newElement: aString xmlns: anotherString 

	^ self fromElement: (document createElementNS: anotherString tagName: aString)
!

newStream
	^ self fromElement: document createDocumentFragment
! !

!Domite class methodsFor: 'testing'!

isDomNode: anObject
<
	return anObject.nodeType >> 0 &&
		Object.prototype.toString.call(anObject) !!== "[object Object]"
>
! !

!ProtoStream methodsFor: '*DOMite'!

nextPutDomNode: aNode
	self nextPut: aNode
! !

