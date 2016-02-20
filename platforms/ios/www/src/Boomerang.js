define("amber-ambercordova/Boomerang", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Boomerang');
$core.packages["Boomerang"].innerEval = function (expr) { return eval(expr); };
$core.packages["Boomerang"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('Boomerang', $globals.Object, [], 'Boomerang');
$core.addMethod(
$core.method({
selector: "debug",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"debug",{},$globals.Boomerang)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "debug\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Boomerang);

$core.addMethod(
$core.method({
selector: "parse",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse",{},$globals.Boomerang)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "parse\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Boomerang);

$core.addMethod(
$core.method({
selector: "print",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"print",{},$globals.Boomerang)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "print\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Boomerang);



$core.addClass('AnyBoomerang', $globals.Boomerang, ['choices'], 'Boomerang');


$core.addClass('StringBoomerang', $globals.Boomerang, ['string'], 'Boomerang');
$core.addMethod(
$core.method({
selector: "parse:",
protocol: 'accessing',
fn: function (strings){
var self=this;
function $Generator(){return $globals.Generator||(typeof Generator=="undefined"?nil:Generator)}
function $ParseRemainder(){return $globals.ParseRemainder||(typeof ParseRemainder=="undefined"?nil:ParseRemainder)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=$recv($Generator())._on_((function(g){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv($recv($recv(strings)._length()).__gt((0))).__and($recv($recv(strings)._at_((0))).__eq_eq(self["@string"]));
if($core.assert($2)){
return $recv(g)._yield_($recv($ParseRemainder())._strings_stackModifier_($recv(strings)._allButFirst(),(function(result){
return result;

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yield:"]=1;
//>>excludeEnd("ctx");
} else {
return $recv(g)._yield_($recv($ParseRemainder())._strings_expected_(strings,self["@string"]));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({g:g},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{strings:strings},$globals.StringBoomerang)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["strings"],
source: "parse: strings\x0a\x09^ Generator on: [ :g |\x0a\x09strings length > 0 & ((strings at: 0) == string)\x0a\x09\x09ifTrue: [ g yield: (ParseRemainder \x0a\x09\x09  \x09strings: strings allButFirst\x0a\x09\x09\x09stackModifier: [ :result | result ])]\x0a\x09\x09ifFalse: [ g yield: (ParseRemainder\x0a\x09\x09\x09strings: strings\x0a\x09\x09\x09expected: string) ]]",
referencedClasses: ["Generator", "ParseRemainder"],
//>>excludeEnd("ide");
messageSends: ["on:", "ifTrue:ifFalse:", "&", ">", "length", "==", "at:", "yield:", "strings:stackModifier:", "allButFirst", "strings:expected:"]
}),
$globals.StringBoomerang);

$core.addMethod(
$core.method({
selector: "string",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@string"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "string\x0a\x09^ string",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringBoomerang);

$core.addMethod(
$core.method({
selector: "string:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@string"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "string: anObject\x0a\x09string := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.StringBoomerang);


$core.addMethod(
$core.method({
selector: "from:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
function $StringBoomerang(){return $globals.StringBoomerang||(typeof StringBoomerang=="undefined"?nil:StringBoomerang)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($StringBoomerang())._new())._string_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"from:",{aString:aString},$globals.StringBoomerang.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "from: aString\x0a\x09\x22Create a String boomerang from the given string\x22\x0a\x0a\x09^ StringBoomerang new string: aString",
referencedClasses: ["StringBoomerang"],
//>>excludeEnd("ide");
messageSends: ["string:", "new"]
}),
$globals.StringBoomerang.klass);


$core.addClass('Generator', $globals.Stream, ['block', 'next', 'continue', 'home'], 'Boomerang');
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
$1=$recv(self["@continue"])._isNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09\x22Answer whether the receiver can access any more objects.\x22\x0a\x0a\x09^ continue isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "close",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@continue"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@continue"])._unwindTo_(self["@home"]);
};
self["@next"]=nil;
self["@block"]=self["@next"];
self["@continue"]=self["@block"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09\x22Close the receiving generator and unwind its ensure-blocks.\x22\x0a\x0a\x09continue ifNotNil:[continue unwindTo: home].\x0a\x09continue := block := next := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "unwindTo:"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "contents",
protocol: 'accessing',
fn: function (){
var self=this;
var stream;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
stream=$recv($recv($Array())._new_((10)))._writeStream();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(stream)._nextPut_(self._next());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=$recv(stream)._contents();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{stream:stream},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09\x22Answer the contents of this generator. Do not call this method on infinite generators.\x22\x0a\x0a\x09| stream |\x0a\x09stream := (Array new: 10) writeStream.\x0a\x09[ self atEnd ]\x0a\x09\x09whileFalse: [ stream nextPut: self next ].\x0a\x09^ stream contents",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["writeStream", "new:", "whileFalse:", "atEnd", "nextPut:", "next", "contents"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "fork",
protocol: 'private',
fn: function (){
var self=this;
var result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@home"]=$core.getThisContext();
$recv($recv(self["@block"])._reentrant())._value_(self);
$core.getThisContext()._swapSender_(self["@continue"]);
result=self["@next"];
self["@home"]=nil;
self["@next"]=self["@home"];
self["@continue"]=self["@next"];
$1=result;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fork",{result:result},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fork\x0a\x09| result |\x0a\x09home := thisContext.\x0a\x09block reentrant value: self.\x0a\x09thisContext swapSender: continue.\x0a\x09result := next.\x0a\x09continue := next := home := nil.\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "reentrant", "swapSender:"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "initializeOn:",
protocol: 'initialization',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@block"]=aBlock;
self._reset();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeOn:",{aBlock:aBlock},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "initializeOn: aBlock\x0a\x09block := aBlock.\x0a\x09self reset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._atEnd();
if(!$core.assert($2)){
$recv(self["@home"])._swapSender_($core.getThisContext()._sender());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["swapSender:"]=1;
//>>excludeEnd("ctx");
self["@continue"]=$core.getThisContext()._swapSender_(self["@continue"]);
$1=self["@continue"];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09\x22Generate and answer the next object in the receiver.\x22\x0a\x0a\x09^ self atEnd ifFalse: [\x0a\x09\x09home swapSender: thisContext sender.\x0a\x09\x09continue := thisContext swapSender: continue\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "atEnd", "swapSender:", "sender"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "nextPut:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
var previous;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
previous=self["@next"];
self["@next"]=anObject;
self["@continue"]=$core.getThisContext()._swapSender_(self["@continue"]);
$1=previous;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPut:",{anObject:anObject,previous:previous},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "nextPut: anObject\x0a\x09\x22Add anObject into the generator. A synonym to #yield: and value:.\x22\x0a\x0a\x09| previous |\x0a\x09previous := next.\x0a\x09next := anObject.\x0a\x09continue := thisContext swapSender: continue.\x0a\x09^ previous",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["swapSender:"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "peek",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@next"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09\x22Answer the upcoming object of the receiver.\x22\x0a\x0a\x09^ next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_($recv(self._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_(" on: ");
$1=$recv(aStream)._print_(self["@block"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self class name; nextPutAll: ' on: '; print: block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "name", "class", "print:"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'public',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@continue"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@continue"])._unwindTo_(self["@home"]);
};
self["@next"]=nil;
self["@continue"]=$core.getThisContext();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._fork();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09\x22Reset the generator, i.e., start it over\x22\x0a\x09continue ifNotNil:[continue unwindTo: home].\x0a\x09next := nil.\x0a\x09continue := thisContext.\x0a\x09[ self fork ] value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "unwindTo:", "value", "fork"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._shouldNotImplement();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09\x22A generator does not know its size.\x22\x0a\x0a\x09^ self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'public',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPut_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject \x0a\x09\x22Allows passing generators as arguments to methods expecting blocks.\x0a\x09A synonym for #yield: / #nextPut:.\x22\x0a\x09^ self nextPut: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.Generator);

$core.addMethod(
$core.method({
selector: "yield:",
protocol: 'public',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._nextPut_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yield:",{anObject:anObject},$globals.Generator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "yield: anObject \x0a\x09\x22Yield the next value to the consumer of the generator.\x0a\x09A synonym for #nextPut:\x22\x0a\x09^ self nextPut: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPut:"]
}),
$globals.Generator);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._basicNew())._initializeOn_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aBlock:aBlock},$globals.Generator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "on: aBlock\x0a\x09^ self basicNew initializeOn: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeOn:", "basicNew"]
}),
$globals.Generator.klass);


$core.addClass('ParseRemainder', $globals.Object, ['strings', 'stackModifier', 'expected', 'failed'], 'Boomerang');
$core.addMethod(
$core.method({
selector: "expected",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@expected"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "expected\x0a\x09^ expected",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ParseRemainder);

$core.addMethod(
$core.method({
selector: "failed",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@failed"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "failed\x0a\x09^ failed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ParseRemainder);

$core.addMethod(
$core.method({
selector: "stackModifier",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stackModifier"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stackModifier\x0a\x09^ stackModifier",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ParseRemainder);

$core.addMethod(
$core.method({
selector: "strings",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@strings"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "strings\x0a\x09^ strings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ParseRemainder);


$core.addMethod(
$core.method({
selector: "strings:expected:",
protocol: 'instance creation',
fn: function (aStrings,anExpectation){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._strings_(aStrings);
$recv($2)._expected_(anExpectation);
$recv($2)._failed_(true);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strings:expected:",{aStrings:aStrings,anExpectation:anExpectation},$globals.ParseRemainder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStrings", "anExpectation"],
source: "strings: aStrings expected: anExpectation\x0a\x09\x09^ self new\x0a\x09\x09strings: aStrings;\x0a\x09\x09expected: anExpectation;\x0a\x09\x09failed: true;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strings:", "new", "expected:", "failed:", "yourself"]
}),
$globals.ParseRemainder.klass);

$core.addMethod(
$core.method({
selector: "strings:stackModifier:",
protocol: 'instance creation',
fn: function (aStrings,aStackModifier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._strings_(aStrings);
$recv($2)._stackModifier_(aStackModifier);
$recv($2)._failed_(false);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strings:stackModifier:",{aStrings:aStrings,aStackModifier:aStackModifier},$globals.ParseRemainder.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStrings", "aStackModifier"],
source: "strings: aStrings stackModifier: aStackModifier\x0a\x09\x09^ self new\x0a\x09\x09strings: aStrings;\x0a\x09\x09stackModifier: aStackModifier;\x0a\x09\x09failed: false;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strings:", "new", "stackModifier:", "failed:", "yourself"]
}),
$globals.ParseRemainder.klass);

});
