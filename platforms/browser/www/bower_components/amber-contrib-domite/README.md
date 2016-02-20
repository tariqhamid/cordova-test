# Lite mite wrapping basic DOM for Amber Smalltalk

[![Join the chat at https://gitter.im/amber-smalltalk/domite](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/amber-smalltalk/amber-contrib-domite?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Lite mite wrapping basic DOM for Amber Smalltalk.

It uses a selection of raw DOM API to perform tasks;
it does not use any cross-browser library.
To work on IE8 (or other non-compliant browser),
include `amber-compat-es5` and also shim event API
(https://github.com/jonathantneal/EventListener looks good).

## Getting Started

- Install Amber ([Instructions](http://docs.amber-lang.net/faq.html))
- Do ``amber init``
- ``bower install domite --save``
- ``grunt devel``
- Start server with `amber serve` and go to `http://localhost:4000/`

This makes modules from `domite` namespace loadable.

To do so in the Helios IDE change the `imports:` section of your packages which use ``Domite`` to
`imports: {'domite/DOMite'}`.

Or you may add it to the `testing.js` / `devel.js` files.
The former is preferred because of an easier deployment process.

## API (class doc of class Domite)

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

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):

Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
