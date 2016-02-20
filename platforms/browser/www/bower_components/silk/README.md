# Stream-based in-page Web framework for Amber

Stream-based framework for creating and manipulating
contents of a page. For Amber Smalltalk.

Based on https://github.com/amber-smalltalk/amber-contrib-domite,
created as an alternative to existing Web package
present in Amber.

## Getting Started

If not already present, create a project
in an empty directory with `amber init`.

In a project, `bower install silk --save` and `grunt devel`.

Start development server with `amber serve`
and go to `http://localhost:4000/` in your browser.

In all packages that uses Silk, add `'silk/Silk'`
to the package imports, save the change and commit the package.
Reload.

## Introduction


Silk does not have any dependency except the amber library ``domite`` that it builds upon.

The metaphor it heavily builds upon is: 

     Each element is a Stream of its children. You can write to that stream, copy that stream to get the copy of the "cursor" etc. 

The package ``silk`` contains only one class ``Silk``, which represents a DOM node _both_ as an element (that can be inserted) and as a stream (which can insert things into itself).

The main message there is ``<<``, the high-level message to put an object on a stream. ``Silk new`` conveniently wraps the HTML ``body`` and puts the cursor at the end of it. 

With

```smalltalk
Silk new << 'Hello, world!'
```

you append a text node to the body.

Silk uses the browser support for ``querySelector`` to get to the elements - that is, you can do all the basic things, but not all the fancy stuff (:visible) that only jQuery has. 

For example with

```smalltalk
'#log' asSilk << 'another item'
```

you append the text ``another item`` to the element with id ``#log``.

Silk uses DNU (Smalltalk ``does not understand``) to help you to create HTML elements, and uses associations as a way to set attributes. So you do:

```smalltalk
Silk new
   H1: {'id'->'header'. 'Welcome'};
   P: {'id'->'welcome'. 'This is an acme page.'. 'It was created by Silk'};
   HR;
   SMALL: {'id'->'footer'. 'We do not guarantee anything.'}
```

BTW, `foo H1: bar` is just a convenience for `foo H1 << bar; yourself`.

You can use blocks, if you ``<<`` them (or include them in TAGNAME:), they are called and passed the wrapped element stream in the first parameter.

As for widgets, any object will work, it only needs ``renderOnSilk: aSilk`` method present. If you ``aSilk << suchObject``, its ``renderOnSilk:`` will be called (that's how association and block magic is done).


## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
