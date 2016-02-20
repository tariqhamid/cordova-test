define("domite/DOMite", ["amber/boot", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('DOMite');
$core.packages["DOMite"].innerEval = function (expr) { return eval(expr); };
$core.packages["DOMite"].transport = {"type":"amd","amdNamespace":"domite"};

$core.addClass('Domite', $globals.ProtoStream, ['element', 'reference'], 'DOMite');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Domite.comment="I am (hopefully thin) wrapper around the notion of \x22cursor in a page\x22.\x0aI represent a DOM node _and_ a point where\x0ato insert new content into it.\x0a\x0aSo I play both the role of a container that inserts\x0aas well as the role of an element being inserted.\x0a\x0aI inherit from `ProtoStream`.\x0a\x0aCreation API:\x0a\x0a - `Domite new` creates an insertion point at the bottom of `<body>`.\x0a - `Domite newStream` is unique way to create pieces of content. It creates an instance \x22floating in thin air\x22 (wrapper around DOM DocumentFragment) that can be filled with any contents and then inserted in a page.\x0a - `Domite fromElement: aDomElement` wraps an element and set the cursor to its end.\x0a - `Domite newElement: 'div'` creates new `<div />` element (and returns it wrapped as a Domite).\x0a\x0aCSS selector API:\x0a\x0a - `Domite at: aSelector` wraps an element found by `document.querySelector(aSelector)`.\x0a - `aDomite at: aSelector` wraps an element found by `element.querySelector(aSelector)`.\x0a - `Domite allAt: aSelector` return collection of wrapped results of `document.querySelectorAll(aSelector)`.\x0a - `aDomite allAt: aSelector` return collection of wrapped results of `element.querySelectorAll(aSelector)`.\x0a\x0aManipulation API:\x0a\x0a - `aDomite << obj` inserts obj at the insertion point.\x0a - `aDomite resetContents` deletes contents of the wrapped element.\x0a - `aDomite cutUpTo: anotherDomite` removes contents between the two cursors (or up to the end of the receiver) and returns it collected in a wrapped DocumentFragment (IOW, you can `anotherPlace << theResult` to move the contents in the specified range).\x0a\x0a - `aDomite attrAt: aString` returns attribute of the wrapped element or nil.\x0a - `aDomite attrAt: aString put: anotherString` sets an attribute of the wrapped element.\x0a - `aDomite propAt: aString` returns JS property of the wrapped element or nil.\x0a - `aDomite propAt: aString put: anObject` sets JS property of the wrapped element.\x0a\x0aCursor moving API:\x0a\x0aTake this sample HTML, where `[n]` are just markers, not real content:\x0a\x0a```\x0a<body>\x0a  <h1>header</h1>\x0a  [4]<p>[2]Hello[1]world[3]</p>[5]\x0a  <small>footer</small>\x0a</body>\x0a```\x0a\x0aIf `d` is a `Domite` representing `[1]`, then:\x0a\x0a - `d setToStart` would move `d` to be at `[2]`,\x0a - `d setToEnd` would move `d` to be at `[3]`,\x0a - `d setToBefore` would move `d` to be at `[4]`, and\x0a - `d setToAfter` would move `d` to be at `[5]`.\x0a\x0aIt is not presumed one would use `setToXxx`\x0ato actually move around in a single instance.\x0aIt is envisioned this API will be used mostly\x0ain combination with `copy`, like\x0a`afterMe := self copy setToAfter`.\x0a\x0aEvent API:\x0a\x0a - `aDomite on: aString bind: [ :ev | ... ]` binds a block to process an event.\x0a - `aDomite off: aString unbind: aBlock` unbinds the block from processing an event.\x0a - `aDomite fire: aString [detail: anObject]` triggers a CustomEvent with specified type and, optionally, a detail object.\x0a - `aDomite fireEvent: anEvent` triggers existing DOM Event object";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "=",
protocol: 'comparing',
fn: function (aDomite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$5,$4,$6,$1;
$3=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__eq($recv(aDomite)._class());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__eq($recv(aDomite)._element());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=2;
//>>excludeEnd("ctx");
return $recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=self._reference();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["reference"]=1;
//>>excludeEnd("ctx");
return $recv($6).__eq($recv(aDomite)._reference());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aDomite:aDomite},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomite"],
source: "= aDomite\x0a\x09^ self class = aDomite class and: [\x0a\x09\x09self element = aDomite element and: [\x0a\x09\x09\x09self reference = aDomite reference ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "=", "class", "element", "reference"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "allAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._wrap_($recv(self._class())._domListAsArray_($recv(self._element())._querySelectorAll_(aString)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allAt:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "allAt: aString\x0a\x09^ self class wrap: (self class domListAsArray: (self element querySelectorAll: aString))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["wrap:", "class", "domListAsArray:", "querySelectorAll:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "asJQuery",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._element())._asJQuery();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJQuery",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJQuery\x0a\x09^ self element asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._fromElement_($recv(self._element())._querySelector_(aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09^ self class fromElement: (self element querySelector: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "class", "querySelector:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._reference())._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09^ self reference isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "reference"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "atStart",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._reference()).__eq($recv(self._element())._firstChild());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atStart",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atStart\x0a\x09^ self reference = self element firstChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "reference", "firstChild", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "attrAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@element"])._hasAttribute_(aString);
if($core.assert($1)){
$2=$recv(self["@element"])._getAttribute_(aString);
return $2;
} else {
return nil;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attrAt:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "attrAt: aString\x0a\x09(element hasAttribute: aString)\x0a\x09\x09ifTrue: [ ^ element getAttribute: aString ]\x0a\x09\x09ifFalse: [ ^ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "hasAttribute:", "getAttribute:"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "attrAt:put:",
protocol: 'accessing',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@element"])._setAttribute_to_(aString,anotherString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attrAt:put:",{aString:aString,anotherString:anotherString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "attrAt: aString put: anotherString\x0a\x09element setAttribute: aString to: anotherString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setAttribute:to:"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "canSetToUpperLevel",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._element())._parentNode())._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canSetToUpperLevel",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canSetToUpperLevel\x0a\x09^ self element parentNode notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil", "parentNode", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "cutUpTo:",
protocol: 'deletion',
fn: function (aDomite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var result = document.createDocumentFragment(),
		start = self['@reference'],
		end = aDomite['@reference'],
		tmp;
	while (start && start != end) {
		tmp = start;
		start = start.nextSibling;
		result.appendChild(tmp);
	}
	self['@reference'] = start;
	return self._class()._fromElement_(result);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cutUpTo:",{aDomite:aDomite},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomite"],
source: "cutUpTo: aDomite\x0a<\x0a\x09var result = document.createDocumentFragment(),\x0a\x09\x09start = self['@reference'],\x0a\x09\x09end = aDomite['@reference'],\x0a\x09\x09tmp;\x0a\x09while (start && start != end) {\x0a\x09\x09tmp = start;\x0a\x09\x09start = start.nextSibling;\x0a\x09\x09result.appendChild(tmp);\x0a\x09}\x0a\x09self['@reference'] = start;\x0a\x09return self._class()._fromElement_(result);\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "element",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@element"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "element\x0a\x09^ element",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "element:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@element"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "element: anObject\x0a\x09element := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "fire:",
protocol: 'events',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._fire_detail_(aString,nil._asJSON());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fire:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "fire: aString\x0a\x09self fire: aString detail: nil asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fire:detail:", "asJSON"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "fire:detail:",
protocol: 'events',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._fireEvent_($recv(self._class())._createCustomEvent_detail_(aString,anObject));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fire:detail:",{aString:aString,anObject:anObject},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "fire: aString detail: anObject\x0a\x09self fireEvent: (\x0a\x09\x09self class createCustomEvent: aString detail: anObject)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fireEvent:", "createCustomEvent:detail:", "class"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "fireEvent:",
protocol: 'events',
fn: function (anEvent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._element())._dispatchEvent_(anEvent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fireEvent:",{anEvent:anEvent},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "fireEvent: anEvent\x0a\x09self element dispatchEvent: anEvent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dispatchEvent:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Domite.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@element"]=$recv(document)._body();
self["@reference"]=nil._asJSON();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09element := document body.\x0a\x09reference := nil asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "body", "asJSON"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "isInvalid",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._element())._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInvalid",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInvalid\x0a\x09^ self element isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._atEnd();
if($core.assert($1)){
return nil;
} else {
var result;
result=self._peek();
result;
self._setToNext();
$2=result;
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09self atEnd\x0a\x09\x09ifTrue: [ ^ nil ]\x0a\x09\x09ifFalse: [ | result |\x0a\x09\x09\x09result := self peek.\x0a\x09\x09\x09self setToNext.\x0a\x09\x09\x09^ result ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atEnd", "peek", "setToNext"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'insertion',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPutString_($recv(anObject)._printString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09self nextPutString: anObject printString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutString:", "printString"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "nextPutDomNode:",
protocol: 'insertion',
fn: function (aDomElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._element())._insertBefore_reference_(aDomElement,self._reference());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutDomNode:",{aDomElement:aDomElement},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomElement"],
source: "nextPutDomNode: aDomElement\x0a\x09self element\x0a\x09\x09insertBefore: aDomElement\x0a\x09\x09reference: self reference",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["insertBefore:reference:", "element", "reference"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "nextPutJSObject:",
protocol: 'insertion',
fn: function (aJSObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._isDomNode_(aJSObject);
if($core.assert($1)){
self._nextPutDomNode_(aJSObject);
} else {
self._nextPut_(aJSObject);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutJSObject:",{aJSObject:aJSObject},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSObject"],
source: "nextPutJSObject: aJSObject\x0a\x09(self class isDomNode: aJSObject)\x0a\x09\x09ifTrue: [ self nextPutDomNode: aJSObject ]\x0a\x09\x09ifFalse: [ self nextPut: aJSObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isDomNode:", "class", "nextPutDomNode:", "nextPut:"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "nextPutString:",
protocol: 'insertion',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPutDomNode_($recv(document)._createTextNode_($recv(aString)._asString()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutString:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "nextPutString: aString\x0a\x09self nextPutDomNode: (\x0a\x09\x09document createTextNode: aString asString )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutDomNode:", "createTextNode:", "asString"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "off:unbind:",
protocol: 'events',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._element())._removeEventListener_block_useCapture_(aString,aBlock,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"off:unbind:",{aString:aString,aBlock:aBlock},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "off: aString unbind: aBlock\x0a\x09self element removeEventListener: aString block: aBlock useCapture: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeEventListener:block:useCapture:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "on:bind:",
protocol: 'events',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._element())._addEventListener_block_useCapture_(aString,aBlock,false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:bind:",{aString:aString,aBlock:aBlock},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "on: aString bind: aBlock\x0a\x09self element addEventListener: aString block: aBlock useCapture: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:block:useCapture:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "peek",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self._reference();
if(($receiver = $2) == null || $receiver.isNil){
$1=$2;
} else {
var ref;
ref=$receiver;
$1=$recv(self._class())._fromElement_(ref);
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09^ self reference\x0a\x09\x09ifNotNil: [ :ref | self class fromElement: ref ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "reference", "fromElement:", "class"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "prev",
protocol: 'reading',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._atStart();
if($core.assert($1)){
return nil;
} else {
self._setToPrev();
$2=self._peek();
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"prev",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "prev\x0a\x09self atStart\x0a\x09\x09ifTrue: [ ^ nil ]\x0a\x09\x09ifFalse: [ self setToPrev. ^ self peek ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atStart", "setToPrev", "peek"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "propAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@element"])._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"propAt:",{aString:aString},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "propAt: aString\x0a\x09^ element at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "propAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@element"])._at_put_(aString,anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"propAt:put:",{aString:aString,anObject:anObject},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "propAt: aString put: anObject\x0a\x09^ element at: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aStream)._nextPutDomNode_(self._element());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPutDomNode: self element",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutDomNode:", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "reference",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@reference"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reference\x0a\x09^ reference",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "reference:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@reference"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "reference: anObject\x0a\x09reference := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._reference_($recv(self._element())._firstChild());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09self reference: self element firstChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reference:", "firstChild", "element"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "resetContents",
protocol: 'deletion',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	var element = self['@element'], child;
	while (child = element.firstChild) element.removeChild(child);
	self['@reference'] = null;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetContents",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetContents\x0a<\x0a\x09var element = self['@element'], child;\x0a\x09while (child = element.firstChild) element.removeChild(child);\x0a\x09self['@reference'] = null;\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "setToAfter",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._nextSibling();
self._reference_($1);
$3=self._element_($recv(self._element())._parentNode());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToAfter",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToAfter\x0a\x09self\x0a\x09\x09reference: self element nextSibling;\x0a\x09\x09element: self element parentNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reference:", "nextSibling", "element", "element:", "parentNode"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "setToBefore",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
self._reference_($1);
$2=self._element_($recv(self._element())._parentNode());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToBefore",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToBefore\x0a\x09self\x0a\x09\x09reference: self element;\x0a\x09\x09element: self element parentNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reference:", "element", "element:", "parentNode"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "setToEnd",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._reference_(nil._asJSON());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToEnd",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToEnd\x0a\x09self reference: nil asJSON \x22null\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reference:", "asJSON"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "setToNext",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._atEnd();
if(!$core.assert($1)){
self._reference_($recv(self._reference())._nextSibling());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToNext",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToNext\x0a\x09self atEnd ifFalse: [\x0a\x09\x09self reference: self reference nextSibling ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atEnd", "reference:", "nextSibling", "reference"]
}),
$globals.Domite);

$core.addMethod(
$core.method({
selector: "setToPrev",
protocol: 'positioning',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$receiver;
$1=self._atStart();
if(!$core.assert($1)){
$3=self._reference();
if(($receiver = $3) == null || $receiver.isNil){
$2=$recv(self._element())._lastChild();
} else {
var ref;
ref=$receiver;
$2=$recv(ref)._previousSibling();
};
self._reference_($2);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setToPrev",{},$globals.Domite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setToPrev\x0a\x09self atStart ifFalse: [\x0a\x09\x09self reference: (self reference\x0a\x09\x09\x09ifNil: [ self element lastChild ]\x0a\x09\x09\x09ifNotNil: [ :ref | ref previousSibling ])]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atStart", "reference:", "ifNil:ifNotNil:", "reference", "lastChild", "element", "previousSibling"]
}),
$globals.Domite);


$core.addMethod(
$core.method({
selector: "allAt:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._wrap_(self._domListAsArray_($recv(document)._querySelectorAll_(aString)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allAt:",{aString:aString},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "allAt: aString\x0a\x09^ self wrap: (self domListAsArray: (document querySelectorAll: aString))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["wrap:", "domListAsArray:", "querySelectorAll:"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromElement_($recv(document)._querySelector_(aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{aString:aString},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "at: aString\x0a\x09^ self fromElement: (document querySelector: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "querySelector:"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "createCustomEvent:detail:",
protocol: 'events',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new CustomEvent(aString, {detail: anObject});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createCustomEvent:detail:",{aString:aString,anObject:anObject},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "createCustomEvent: aString detail: anObject\x0a<return new CustomEvent(aString, {detail: anObject})>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "domListAsArray:",
protocol: 'converting',
fn: function (aDomList){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return Array.prototype.slice.call(aDomList);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"domListAsArray:",{aDomList:aDomList},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomList"],
source: "domListAsArray: aDomList\x0a<return Array.prototype.slice.call(aDomList)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "fromElement:",
protocol: 'instance creation',
fn: function (aDomElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2,$receiver;
if(($receiver = aDomElement) == null || $receiver.isNil){
aDomElement;
} else {
$1=self._isDomNode_(aDomElement);
if(!$core.assert($1)){
self._error_($recv(self._name()).__comma(": Need a DOM node"));
};
};
$3=self._new();
$recv($3)._element_(aDomElement);
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromElement:",{aDomElement:aDomElement},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomElement"],
source: "fromElement: aDomElement\x0a\x09aDomElement ifNotNil: [\x0a\x09\x09(self isDomNode: aDomElement) ifFalse: [\x0a\x09\x09\x09self error: self name, ': Need a DOM node' ]].\x0a\x09^ self new\x0a\x09\x09element: aDomElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "ifFalse:", "isDomNode:", "error:", ",", "name", "element:", "new", "yourself"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "fromElement:cursorBefore:",
protocol: 'instance creation',
fn: function (aDomElement,anotherDomElement){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._fromElement_(aDomElement);
$recv($2)._reference_(anotherDomElement);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromElement:cursorBefore:",{aDomElement:aDomElement,anotherDomElement:anotherDomElement},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDomElement", "anotherDomElement"],
source: "fromElement: aDomElement cursorBefore: anotherDomElement\x0a\x09^ (self fromElement: aDomElement)\x0a\x09\x09reference: anotherDomElement;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reference:", "fromElement:", "yourself"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "isDomNode:",
protocol: 'testing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

	return anObject.nodeType > 0 &&
		Object.prototype.toString.call(anObject) !== "[object Object]";
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isDomNode:",{anObject:anObject},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "isDomNode: anObject\x0a<\x0a\x09return anObject.nodeType >> 0 &&\x0a\x09\x09Object.prototype.toString.call(anObject) !== \x22[object Object]\x22\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "newElement:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromElement_($recv(document)._createElement_(aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newElement:",{aString:aString},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newElement: aString\x0a\x09^ self fromElement: (document createElement: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "createElement:"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "newElement:xmlns:",
protocol: 'instance creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromElement_($recv(document)._createElementNS_tagName_(anotherString,aString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newElement:xmlns:",{aString:aString,anotherString:anotherString},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "newElement: aString xmlns: anotherString \x0a\x0a\x09^ self fromElement: (document createElementNS: anotherString tagName: aString)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "createElementNS:tagName:"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "newStream",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._fromElement_($recv(document)._createDocumentFragment());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newStream",{},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newStream\x0a\x09^ self fromElement: document createDocumentFragment",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "createDocumentFragment"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "wrap:",
protocol: 'converting',
fn: function (aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aCollection)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._fromElement_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"wrap:",{aCollection:aCollection},$globals.Domite.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "wrap: aCollection\x0a\x09^ aCollection collect: [ :each | self fromElement: each ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "fromElement:"]
}),
$globals.Domite.klass);

$core.addMethod(
$core.method({
selector: "nextPutDomNode:",
protocol: '*DOMite',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._nextPut_(aNode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPutDomNode:",{aNode:aNode},$globals.ProtoStream)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextPutDomNode: aNode\x0a\x09self nextPut: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.ProtoStream);

});
