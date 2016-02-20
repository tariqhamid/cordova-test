define("amber_core/Platform-Browser", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Platform-Browser');
$core.packages["Platform-Browser"].innerEval = function (expr) { return eval(expr); };
$core.packages["Platform-Browser"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('BrowserPlatform', $globals.Object, [], 'Platform-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserPlatform.comment="I am `Platform` service implementation for browser.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "globals",
protocol: 'accessing',
fn: function (){
"use strict";
var e=this,t;return t=window,t},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "globals\x0a\x09^ window",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BrowserPlatform);

$core.addMethod(
$core.method({
selector: "newXhr",
protocol: 'accessing',
fn: function (){
"use strict";
function t(){return $globals.XMLHttpRequest||(typeof XMLHttpRequest=="undefined"?nil:XMLHttpRequest)}function n(){return $globals.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}var e=this;return $core.withContext(function(r){var i,s;return(s=t())!=null&&!s.isNil?(i=$recv(n())._constructorOf_(t()),i):(e._error_("XMLHttpRequest not available."),e)},function(t){t.fill(e,"newXhr",{},$globals.BrowserPlatform)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newXhr\x0a\x09XMLHttpRequest\x0a\x09\x09ifNotNil: [ ^ NativeFunction constructorOf: XMLHttpRequest ]\x0a\x09\x09ifNil: [ self error: 'XMLHttpRequest not available.' ]",
referencedClasses: ["XMLHttpRequest", "NativeFunction"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:ifNil:", "constructorOf:", "error:"]
}),
$globals.BrowserPlatform);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'testing',
fn: function (){
"use strict";
function t(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}var e=this;return $core.withContext(function(n){var r;return r=e._isFeasible(),$core.assert(r)&&$recv(t())._registerIfNone_(e._new()),e},function(t){t.fill(e,"initialize",{},$globals.BrowserPlatform.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Platform registerIfNone: self new ]",
referencedClasses: ["Platform"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}),
$globals.BrowserPlatform.klass);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: 'testing',
fn: function (){
"use strict";
var e=this;return $core.withContext(function(t){return typeof window!="undefined"},function(t){t.fill(e,"isFeasible",{},$globals.BrowserPlatform.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<return typeof window !== \x22undefined\x22>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BrowserPlatform.klass);


$core.addClass('BrowserTerminal', $globals.Object, [], 'Platform-Browser');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.BrowserTerminal.comment="I am `Terminal` service implementation for browser.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alert:",
protocol: 'actions',
fn: function (e){
"use strict";
var t=this;return $core.withContext(function(t){var n;return n=$recv(window)._alert_(e),n},function(n){n.fill(t,"alert:",{aString:e},$globals.BrowserTerminal)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "alert: aString\x0a\x09^ window alert: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "confirm:",
protocol: 'actions',
fn: function (e){
"use strict";
var t=this;return $core.withContext(function(t){var n;return n=$recv(window)._confirm_(e),n},function(n){n.fill(t,"confirm:",{aString:e},$globals.BrowserTerminal)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "confirm: aString\x0a\x09^ window confirm: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["confirm:"]
}),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "prompt:",
protocol: 'actions',
fn: function (e){
"use strict";
var t=this;return $core.withContext(function(t){var n;return n=$recv(window)._prompt_(e),n},function(n){n.fill(t,"prompt:",{aString:e},$globals.BrowserTerminal)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "prompt: aString\x0a\x09^ window prompt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:"]
}),
$globals.BrowserTerminal);

$core.addMethod(
$core.method({
selector: "prompt:default:",
protocol: 'actions',
fn: function (e,t){
"use strict";
var n=this;return $core.withContext(function(n){var r;return r=$recv(window)._prompt_default_(e,t),r},function(r){r.fill(n,"prompt:default:",{aString:e,defaultString:t},$globals.BrowserTerminal)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "defaultString"],
source: "prompt: aString default: defaultString\x0a\x09^ window prompt: aString default: defaultString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["prompt:default:"]
}),
$globals.BrowserTerminal);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'testing',
fn: function (){
"use strict";
function t(){return $globals.Terminal||(typeof Terminal=="undefined"?nil:Terminal)}var e=this;return $core.withContext(function(n){var r;return r=e._isFeasible(),$core.assert(r)&&$recv(t())._registerIfNone_(e._new()),e},function(t){t.fill(e,"initialize",{},$globals.BrowserTerminal.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self isFeasible ifTrue: [ Terminal registerIfNone: self new ]",
referencedClasses: ["Terminal"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isFeasible", "registerIfNone:", "new"]
}),
$globals.BrowserTerminal.klass);

$core.addMethod(
$core.method({
selector: "isFeasible",
protocol: 'testing',
fn: function (){
"use strict";
var e=this;return $core.withContext(function(t){return typeof window!="undefined"},function(t){t.fill(e,"isFeasible",{},$globals.BrowserTerminal.klass)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFeasible\x0a<return typeof window !== \x22undefined\x22>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BrowserTerminal.klass);

$core.addMethod(
$core.method({
selector: "postMessageTo:",
protocol: '*Platform-Browser',
fn: function (e){
"use strict";
var t=this;return $core.withContext(function(n){var r;return r=t._postMessageTo_origin_(e,"*"),r},function(n){n.fill(t,"postMessageTo:",{aFrame:e},$globals.Object)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame"],
source: "postMessageTo: aFrame\x0a^ self postMessageTo: aFrame origin: '*'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["postMessageTo:origin:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "postMessageTo:origin:",
protocol: '*Platform-Browser',
fn: function (e,t){
"use strict";
var n=this;return $core.withContext(function(r){return e.postMessage(n,t)},function(r){r.fill(n,"postMessageTo:origin:",{aFrame:e,aString:t},$globals.Object)})},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFrame", "aString"],
source: "postMessageTo: aFrame origin: aString\x0a<return aFrame.postMessage(self, aString)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

});
