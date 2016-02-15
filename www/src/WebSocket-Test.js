define("amber-ambercordova/WebSocket-Test", ["amber/boot", "amber_core/Kernel-Objects", "amber/web/Web"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('WebSocket-Test');
$core.packages["WebSocket-Test"].innerEval = function (expr) { return eval(expr); };
$core.packages["WebSocket-Test"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('WebSocketTest', $globals.Object, ['wsUri', 'output', 's'], 'WebSocket-Test');
$core.addMethod(
$core.method({
selector: "doSend:",
protocol: 'not yet classified',
fn: function (message){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeToScreen_("SENT: ".__comma(message));
$recv(self._s())._send_(message);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSend:",{message:message},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["message"],
source: "doSend: message\x0a\x0a  \x09self writeToScreen: ('SENT: ' , message).\x0a    self s send: message",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeToScreen:", ",", "send:", "s"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "init",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._output_($recv(document)._getElementById_("output"));
self._testWebSocket();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"init",{},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "init\x0a\x0a\x09self output: ( document getElementById: 'output' ).\x0a    self testWebSocket",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["output:", "getElementById:", "testWebSocket"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "newWebSocket:",
protocol: 'not yet classified',
fn: function (aWSConnectionURL){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new WebSocket(aWSConnectionURL);;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWebSocket:",{aWSConnectionURL:aWSConnectionURL},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWSConnectionURL"],
source: "newWebSocket: aWSConnectionURL\x0a<return new WebSocket(aWSConnectionURL);>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "onClose:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeToScreen_("DISCONNECTED");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onClose:",{evt:evt},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "onClose: evt\x0a\x0a    self writeToScreen: 'DISCONNECTED'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeToScreen:"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "onError:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeToScreen_("<span style=\x22color: red;\x22>ERROR:</span> ".__comma(evt));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onError:",{evt:evt},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "onError: evt\x0a\x0a    self writeToScreen: ( '<span style=\x22color: red;\x22>ERROR:</span> ' , evt).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeToScreen:", ","]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "onMessage:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("<span style=\x22color: blue;\x22>RESPONSE: ".__comma($recv(evt)._data())).__comma("</span>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._writeToScreen_($1);
$recv(self._s())._close();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMessage:",{evt:evt},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "onMessage: evt\x0a\x0a    self writeToScreen: ( '<span style=\x22color: blue;\x22>RESPONSE: ' , (evt data), '</span>').\x0a    self s close",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeToScreen:", ",", "data", "close", "s"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "onOpen:",
protocol: 'not yet classified',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._writeToScreen_("CONNECTED");
self._doSend_("Amber rocks");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onOpen:",{evt:evt},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "onOpen: evt\x0a\x0a   self writeToScreen: 'CONNECTED'.\x0a   self  doSend: 'Amber rocks'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["writeToScreen:", "doSend:"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "output",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@output"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "output\x0a\x0a\x09^output",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "output:",
protocol: 'not yet classified',
fn: function (aString){
var self=this;
self["@output"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "output: aString\x0a\x0a\x09output := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "s",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@s"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "s\x0a\x0a\x09^s",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "s:",
protocol: 'not yet classified',
fn: function (aSocket){
var self=this;
self["@s"]=aSocket;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSocket"],
source: "s: aSocket\x0a\x0a\x09s := aSocket",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "testWebSocket",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._testWebSocket_(self._wsUri());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWebSocket",{},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testWebSocket\x0a\x0a\x09self testWebSocket: self wsUri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["testWebSocket:", "wsUri"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "testWebSocket:",
protocol: 'not yet classified',
fn: function (aWSConnectionURL){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@s"]=self._newWebSocket_(aWSConnectionURL);
$recv(self["@s"])._onopen_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onOpen_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@s"])._onclose_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onClose_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@s"])._onmessage_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onMessage_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(self["@s"])._onerror_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._onError_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testWebSocket:",{aWSConnectionURL:aWSConnectionURL},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWSConnectionURL"],
source: "testWebSocket: aWSConnectionURL\x0a\x0a    s := self newWebSocket: aWSConnectionURL.\x0a\x0a    s onopen: [:evt | self onOpen: evt].\x0a    s onclose: [:evt | self onClose: evt].\x0a    s onmessage: [:evt | self onMessage: evt].\x0a    s onerror: [:evt | self onError: evt ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newWebSocket:", "onopen:", "onOpen:", "onclose:", "onClose:", "onmessage:", "onMessage:", "onerror:", "onError:"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "writeToScreen:",
protocol: 'not yet classified',
fn: function (message){
var self=this;
var pre;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
pre=$recv(document)._createElement_("p");
$recv($recv(pre)._style())._at_put_("wordWrap","break-word");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(pre)._at_put_("innerHTML",message);
$recv(self._output())._appendChild_(pre);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeToScreen:",{message:message,pre:pre},$globals.WebSocketTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["message"],
source: "writeToScreen: message\x0a \x09| pre |\x0a    pre := document createElement: 'p'.\x0a    pre style at: 'wordWrap' put: 'break-word'.\x0a    pre at: 'innerHTML' put: message.\x0a    self output appendChild: pre",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElement:", "at:put:", "style", "appendChild:", "output"]
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "wsUri",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@wsUri"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wsUri\x0a\x0a\x09^wsUri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);

$core.addMethod(
$core.method({
selector: "wsUri:",
protocol: 'not yet classified',
fn: function (aString){
var self=this;
self["@wsUri"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "wsUri: aString\x0a\x0a\x09wsUri := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTest);



$core.addClass('WebSocketTestWidget', $globals.Widget, ['websocketTest'], 'WebSocket-Test');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $WebSocketTest(){return $globals.WebSocketTest||(typeof WebSocketTest=="undefined"?nil:WebSocketTest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.WebSocketTestWidget.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._websocketTest_($recv($WebSocketTest())._new());
$recv(self._websocketTest())._wsUri_("ws://echo.websocket.org");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.WebSocketTestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x0a\x09self websocketTest: WebSocketTest new.\x0a    self websocketTest wsUri: 'ws://echo.websocket.org'. \x22 'ws://127.0.0.1:8080'. \x22",
referencedClasses: ["WebSocketTest"],
//>>excludeEnd("ide");
messageSends: ["initialize", "websocketTest:", "new", "wsUri:", "websocketTest"]
}),
$globals.WebSocketTestWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(html)._h2_("Amber WebSocket Test");
$recv($recv(html)._div())._id_("output");
$recv(self._websocketTest())._init();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.WebSocketTestWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html h2: 'Amber WebSocket Test'.\x0a\x0a    html div id: 'output'.\x0a\x0a    self websocketTest init.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["h2:", "id:", "div", "init", "websocketTest"]
}),
$globals.WebSocketTestWidget);

$core.addMethod(
$core.method({
selector: "websocketTest",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@websocketTest"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "websocketTest\x0a\x0a\x09^websocketTest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTestWidget);

$core.addMethod(
$core.method({
selector: "websocketTest:",
protocol: 'not yet classified',
fn: function (aTest){
var self=this;
self["@websocketTest"]=aTest;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTest"],
source: "websocketTest: aTest\x0a\x0a\x09websocketTest := aTest",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.WebSocketTestWidget);


$core.addMethod(
$core.method({
selector: "startTest",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("#web-socket"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startTest",{},$globals.WebSocketTestWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startTest\x0a\x0a        \x22self new appendToJQuery: 'body' asJQuery\x22\x0a\x09\x09\x22web-socket\x22\x0a\x09\x09self new appendToJQuery: '#web-socket' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.WebSocketTestWidget.klass);

});
