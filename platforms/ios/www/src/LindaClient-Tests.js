define("amber-ambercordova/LindaClient-Tests", ["amber/boot", "amber_core/SUnit", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('LindaClient-Tests');
$core.packages["LindaClient-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["LindaClient-Tests"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('LindaAbstractTest', $globals.TestCase, [], 'LindaClient-Tests');
$core.addMethod(
$core.method({
selector: "sampleClient",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaAbstractTest);

$core.addMethod(
$core.method({
selector: "sampleTupleSpace",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleTupleSpace",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaAbstractTest);

$core.addMethod(
$core.method({
selector: "serverUrl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return "http://127.0.0.1:8931";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrl\x0a\x09^'http://127.0.0.1:8931'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaAbstractTest);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return "testSample";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x09^'testSample'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaAbstractTest);



$core.addClass('LindaClientTest', $globals.LindaAbstractTest, ['client', 'tupleSpace'], 'LindaClient-Tests');
$core.addMethod(
$core.method({
selector: "estTupleSpaceReading",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$recv($Transcript())._show_("reading ...");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$1=$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$recv(self["@tupleSpace"])._read_with_($globals.HashedCollection._newFromPairs_(["type","chat"]),(function(err,tuple){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($Transcript())._show_("read");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$recv($Transcript())._show_(tuple);
$2=$recv($Transcript())._cr();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,tuple:tuple},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"estTupleSpaceReading",{},$globals.LindaClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "estTupleSpaceReading\x0a\x09Transcript show: 'reading ...'; cr.\x0a\x09tupleSpace read: #{#type -> 'chat'} with: [:err :tuple| Transcript show: 'read'; show: tuple ;cr ] .",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", "cr", "read:with:"]
}),
$globals.LindaClientTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@client"]=$recv($LindaClient())._serverUrl_(self._serverUrl());
self["@tupleSpace"]=$recv(self["@client"])._tupleSpace_(self._tupleSpaceName());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.LindaClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09client := LindaClient serverUrl: self serverUrl.\x0a\x09tupleSpace := client tupleSpace: self tupleSpaceName",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "serverUrl", "tupleSpace:", "tupleSpaceName"]
}),
$globals.LindaClientTest);

$core.addMethod(
$core.method({
selector: "testServerUrl",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv($recv($recv(self["@client"])._io())._uri()).__eq(self._serverUrl()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testServerUrl",{},$globals.LindaClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testServerUrl\x0a\x09self assert: (client io uri = self serverUrl)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "uri", "io", "serverUrl"]
}),
$globals.LindaClientTest);

$core.addMethod(
$core.method({
selector: "testTupleSpaceWriting",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($Transcript())._show_("writing");
$1=$recv($Transcript())._cr();
$recv(self["@tupleSpace"])._write_options_($globals.HashedCollection._newFromPairs_(["type","chat","message","aaa"]),$globals.HashedCollection._newFromPairs_(["from","xxx"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTupleSpaceWriting",{},$globals.LindaClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTupleSpaceWriting\x0a\x09Transcript show: 'writing'; cr.\x0a\x09tupleSpace write: #{#type -> 'chat'. #message -> 'aaa'} options: #{#from -> 'xxx'}.",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:", "cr", "write:options:"]
}),
$globals.LindaClientTest);

$core.addMethod(
$core.method({
selector: "testTuplespaceName",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv($recv(self["@tupleSpace"])._name()).__eq(self._tupleSpaceName()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTuplespaceName",{},$globals.LindaClientTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTuplespaceName\x0a\x09self assert: (tupleSpace name = self tupleSpaceName)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "name", "tupleSpaceName"]
}),
$globals.LindaClientTest);



$core.addClass('SocketIoTest', $globals.LindaAbstractTest, ['sample'], 'LindaClient-Tests');
$core.addMethod(
$core.method({
selector: "sampleLocalInstance",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
function $SocketIo(){return $globals.SocketIo||(typeof SocketIo=="undefined"?nil:SocketIo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($SocketIo())._serverUrl_(self._serverUrl());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleLocalInstance",{},$globals.SocketIoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleLocalInstance\x0a\x0a\x09^SocketIo serverUrl: self serverUrl",
referencedClasses: ["SocketIo"],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "serverUrl"]
}),
$globals.SocketIoTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@sample"];
if(($receiver = $1) == null || $receiver.isNil){
self["@sample"]=self._sampleLocalInstance();
self["@sample"];
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.SocketIoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x0a\x09sample ifNil: [sample := self sampleLocalInstance]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "sampleLocalInstance"]
}),
$globals.SocketIoTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@sample"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$recv(self["@sample"])._close();
self["@sample"]=nil;
self["@sample"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{},$globals.SocketIoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x0a\x09sample ifNotNil: [sample close.\x0a\x09\x09sample := nil]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "close"]
}),
$globals.SocketIoTest);

$core.addMethod(
$core.method({
selector: "testUri",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv($recv(self["@sample"])._uri()).__eq(self._serverUrl()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testUri",{},$globals.SocketIoTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testUri\x0a\x09self assert: (sample uri = self serverUrl)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "=", "uri", "serverUrl"]
}),
$globals.SocketIoTest);



$core.addClass('TupleSpaceTest', $globals.LindaAbstractTest, [], 'LindaClient-Tests');


$core.addClass('TupleTest', $globals.LindaAbstractTest, [], 'LindaClient-Tests');


$core.addClass('Person', $globals.Object, ['name', 'address'], 'LindaClient-Tests');
$core.addMethod(
$core.method({
selector: "address",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@address"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "address\x0a\x09^ address",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Person);

$core.addMethod(
$core.method({
selector: "address:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@address"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "address: anObject\x0a\x09address := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Person);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@name"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Person);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@name"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "name: anObject\x0a\x09name := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Person);


$core.addMethod(
$core.method({
selector: "sample1",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var newPerson;
function $Person(){return $globals.Person||(typeof Person=="undefined"?nil:Person)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newPerson=$recv($Person())._new();
$recv(newPerson)._name_("aaaa");
$recv(newPerson)._address_("adress1");
$1=newPerson;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sample1",{newPerson:newPerson},$globals.Person.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sample1\x0a\x09| newPerson |\x0a\x09newPerson := Person new.\x0a\x09newPerson name: 'aaaa'.\x0a\x09newPerson address: 'adress1'.\x0a\x09^newPerson",
referencedClasses: ["Person"],
//>>excludeEnd("ide");
messageSends: ["new", "name:", "address:"]
}),
$globals.Person.klass);

});
