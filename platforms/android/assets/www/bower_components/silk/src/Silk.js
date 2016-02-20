define("silk/Silk", ["amber/boot", "amber/domite/DOMite", "amber_core/Kernel-Objects", "amber_core/Kernel-Methods", "amber_core/Kernel-Collections", "amber_core/Kernel-Infrastructure"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Silk');
$core.packages["Silk"].innerEval = function (expr) { return eval(expr); };
$core.packages["Silk"].transport = {"type":"amd","amdNamespace":"silk"};

$core.addClass('Silk', $globals.Domite, [], 'Silk');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Silk.comment="I am adding convenience APIs to my subclass, `Domite`.\x0a\x0a##Rendering\x0a\x0a - `aSilk << anObject` uses double-dispatch via `renderOnSilk:`. This allows creating widgets (no formal superclass, anything with `renderOnSilk:` is a widget), as well as incorporating magic on other objects:\x0a   - blocks: `aSilk << aBlock` runs the block, passing aSilk as a parameter.\x0a   - associations: `aSilk << (key -> value)` set attribute key to value.\x0a\x0aIt is good to note that rendering collection has magic\x0aof its own built-in in general: if you `stream << aCollection`, its items are `<<`'d in sequence.\x0aSo, de facto, array are deeply flattened\x0awhen putting on a stream via `<<`.\x0a\x0a##Convenience\x0a\x0a - `aCssSelectorString asSilk` returns Silk wrapping an element at a selector.\x0a - `anObject inSilk` returns anObject rendered in a document fragment.\x0a\x0a##Element creation\x0a\x0aThese messages use DNU to dynamically create\x0aelements with any (letters-and-numbers) tag name,\x0aNext samples show this on an example of `<div>`.\x0a\x0a - `Silk DIV` is shortcut for `Silk newElement: 'div'`.\x0a - `aSilk DIV` is shortcut for `[ |tmp| tmp := Silk DIV. aSilk << tmp. tmp] value`. IOW, it not just creates the element and returns it, but also puts in on aSilk.\x0a - `aSilk DIV: anObject` is shortcut for `aSilk DIV << anObject; yourself`. IOW, it not just creates and insert the element, but puts a content into it.\x0a\x0a##Conclusions\x0a\x0aTaken all this together, one can do pretty neat constructs:\x0a\x0a```\x0a  aSilk P: { 'id'->'mission'. 'We are the champions.' }\x0a```\x0a\x0aadds `<p id=\x22mission\x22>We are the champions.</p>` into `aSilk`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'writing',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv(self._class())._tryMakeDnuElement_(aMessage);
if(($receiver = $1) == null || $receiver.isNil){
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Silk.superclass.fn.prototype._doesNotUnderstand_.apply($recv(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
} else {
var newElement;
newElement=$receiver;
self.__lt_lt(newElement);
return newElement;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.Silk)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09\x22`aSilk DIV` creates a div element and inserts it.\x0a\x09`aSilk DIV: anObject` creates a div element, inserts it\x0a\x09and puts contents in it\x22\x0a\x09(self class tryMakeDnuElement: aMessage)\x0a\x09\x09ifNil: [ ^ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :newElement | self << newElement. ^ newElement ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "tryMakeDnuElement:", "class", "doesNotUnderstand:", "<<"]
}),
$globals.Silk);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'writing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(anObject)._renderOnSilk_(self);
if(($receiver = $1) == null || $receiver.isNil){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Silk.superclass.fn.prototype._nextPut_.apply($recv(self), [anObject]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject},$globals.Silk)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09\x22Double-dispatches anObject via renderOnSilk: message.\x0a\x09If a message returns nil, this fallbacks to superclass.\x0a\x09Otherwise, it is assumed renderOnSilk: did its job.\x22\x0a\x0a\x09(anObject renderOnSilk: self)\x0a\x09\x09ifNil: [ super nextPut: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "renderOnSilk:", "nextPut:"]
}),
$globals.Silk);


$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'message handling',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._tryMakeDnuElement_(aMessage);
if(($receiver = $1) == null || $receiver.isNil){
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Silk.klass.superclass.fn.prototype._doesNotUnderstand_.apply($recv(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $2;
} else {
var newElement;
newElement=$receiver;
return newElement;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.Silk.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09\x22`Silk DIV` creates a div element.\x0a\x09`Silk DIV: anObject` creates a div element and puts contents in it\x22\x0a\x09(self tryMakeDnuElement: aMessage)\x0a\x09\x09ifNil: [ ^ super doesNotUnderstand: aMessage ]\x0a\x09\x09ifNotNil: [ :newElement | ^ newElement ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "tryMakeDnuElement:", "doesNotUnderstand:"]
}),
$globals.Silk.klass);

$core.addMethod(
$core.method({
selector: "tryMakeDnuElement:",
protocol: 'instance creation',
fn: function (aMessage){
var self=this;
var selector,newElement,useArg;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
selector=$recv(aMessage)._selector();
$1=$recv($recv(selector)._asUppercase()).__eq(selector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
return nil;
};
$2=$recv($recv(selector)._last()).__eq(":");
if($core.assert($2)){
useArg=true;
useArg;
selector=$recv(selector)._allButLast();
selector;
} else {
useArg=false;
useArg;
};
$3=$recv(selector)._includes_(":");
if($core.assert($3)){
return nil;
};
newElement=self._newElement_($recv(selector)._asLowercase());
$4=useArg;
if($core.assert($4)){
$recv(newElement).__lt_lt($recv($recv(aMessage)._arguments())._first());
};
$5=newElement;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryMakeDnuElement:",{aMessage:aMessage,selector:selector,newElement:newElement,useArg:useArg},$globals.Silk.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "tryMakeDnuElement: aMessage\x0a\x09\x22`DIV` creates a div element.\x0a\x09`DIV: anObject` creates a div element and puts contents in it\x22\x0a\x09| selector newElement useArg |\x0a\x09selector := aMessage selector.\x0a\x09selector asUppercase = selector\x0a\x09\x09ifFalse: [ ^ nil ].\x0a\x09selector last = ':'\x0a\x09\x09ifTrue: [ useArg := true. selector := selector allButLast ]\x0a\x09\x09ifFalse: [ useArg := false ].\x0a\x09(selector includes: ':')\x0a\x09\x09ifTrue: [ ^ nil ].\x0a\x09newElement := self newElement: selector asLowercase.\x0a\x09useArg ifTrue: [ newElement << aMessage arguments first ].\x0a\x09^ newElement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector", "ifFalse:", "=", "asUppercase", "ifTrue:ifFalse:", "last", "allButLast", "ifTrue:", "includes:", "newElement:", "asLowercase", "<<", "first", "arguments"]
}),
$globals.Silk.klass);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: '*Silk',
fn: function (aSilk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@key"])._attrPut_on_(self["@value"],aSilk);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk},$globals.Association)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09key attrPut: value on: aSilk",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attrPut:on:"]
}),
$globals.Association);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: '*Silk',
fn: function (aSilk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._value_(aSilk);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOnSilk:",{aSilk:aSilk},$globals.BlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09self value: aSilk",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.BlockClosure);

$core.addMethod(
$core.method({
selector: "asSilk",
protocol: '*Silk',
fn: function (){
var self=this;
function $Silk(){return $globals.Silk||(typeof Silk=="undefined"?nil:Silk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Silk())._at_(self._asString());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asSilk",{},$globals.CharacterArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asSilk\x0a\x09^ Silk at: self asString",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["at:", "asString"]
}),
$globals.CharacterArray);

$core.addMethod(
$core.method({
selector: "inSilk",
protocol: '*Silk',
fn: function (){
var self=this;
function $Silk(){return $globals.Silk||(typeof Silk=="undefined"?nil:Silk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Silk())._newStream();
$recv($2).__lt_lt(self);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inSilk",{},$globals.JSObjectProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inSilk\x0a\x09^ Silk newStream << self; yourself",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["<<", "newStream", "yourself"]
}),
$globals.JSObjectProxy);

$core.addMethod(
$core.method({
selector: "inSilk",
protocol: '*Silk',
fn: function (){
var self=this;
function $Silk(){return $globals.Silk||(typeof Silk=="undefined"?nil:Silk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Silk())._newStream();
$recv($2).__lt_lt(self);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inSilk",{},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inSilk\x0a\x09^ Silk newStream << self; yourself",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["<<", "newStream", "yourself"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "renderOnSilk:",
protocol: '*Silk',
fn: function (aSilk){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSilk"],
source: "renderOnSilk: aSilk\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "attrPut:on:",
protocol: '*Silk',
fn: function (anObject,aSilk){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aSilk)._attrAt_put_(self,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attrPut:on:",{anObject:anObject,aSilk:aSilk},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aSilk"],
source: "attrPut: anObject on: aSilk\x0a\x09aSilk attrAt: self put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attrAt:put:"]
}),
$globals.String);

});
