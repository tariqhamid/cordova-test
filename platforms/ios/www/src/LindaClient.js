define("amber-ambercordova/LindaClient", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "linda-client", "socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,linda,socketIo
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('LindaClient');
$core.packages["LindaClient"].innerEval = function (expr) { return eval(expr); };
$core.packages["LindaClient"].imports = ["linda=linda-client", "socketIo=socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["LindaClient"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('NodeLindaProxy', $globals.Object, ['proxy'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "keysOfJSON:",
protocol: 'utilities',
fn: function (aJS){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
	return Object.keys(aJS);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keysOfJSON:",{aJS:aJS},$globals.NodeLindaProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJS"],
source: "keysOfJSON: aJS\x0a\x09<\x09return Object.keys(aJS);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodeLindaProxy);

$core.addMethod(
$core.method({
selector: "proxy",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@proxy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proxy\x0a\x09^ proxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodeLindaProxy);

$core.addMethod(
$core.method({
selector: "proxy:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@proxy"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "proxy: anObject\x0a\x09proxy := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NodeLindaProxy);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var newProxy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newProxy=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.NodeLindaProxy.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=newProxy;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{newProxy:newProxy},$globals.NodeLindaProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09| newProxy |\x0a\x09newProxy := super new.\x0a\x09^newProxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.NodeLindaProxy.klass);

$core.addMethod(
$core.method({
selector: "proxy:",
protocol: 'as yet unclassified',
fn: function (aJSProxy){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(aJSProxy)._isNil();
if($core.assert($1)){
return nil;
};
$3=self._new();
$recv($3)._proxy_(aJSProxy);
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proxy:",{aJSProxy:aJSProxy},$globals.NodeLindaProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSProxy"],
source: "proxy: aJSProxy\x0a\x09aJSProxy isNil ifTrue: [^nil].\x0a\x09^self new proxy: aJSProxy ; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isNil", "proxy:", "new", "yourself"]
}),
$globals.NodeLindaProxy.klass);


$core.addClass('LindaClient', $globals.NodeLindaProxy, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "connect:",
protocol: 'services',
fn: function (aSocketIo){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
$recv($1)._connect_($recv(aSocketIo)._proxy());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect:",{aSocketIo:aSocketIo},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSocketIo"],
source: "connect: aSocketIo\x0a\x0a\x09self proxy connect: aSocketIo proxy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect:", "proxy"]
}),
$globals.LindaClient);

$core.addMethod(
$core.method({
selector: "io",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._io();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"io",{},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "io\x0a\x0a\x09^self proxy io",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["io", "proxy"]
}),
$globals.LindaClient);

$core.addMethod(
$core.method({
selector: "serverUrl",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(self._io())._io();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["io"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._uri();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl",{},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrl\x0a\x09^self io io uri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["uri", "io"]
}),
$globals.LindaClient);

$core.addMethod(
$core.method({
selector: "tupleSpace:",
protocol: 'services',
fn: function (aName){
var self=this;
function $TupleSpace(){return $globals.TupleSpace||(typeof TupleSpace=="undefined"?nil:TupleSpace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TupleSpace())._proxy_($recv(self._proxy())._tuplespace_(aName));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace:",{aName:aName},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName"],
source: "tupleSpace: aName\x0a\x09^TupleSpace proxy: (self proxy tuplespace: aName).",
referencedClasses: ["TupleSpace"],
//>>excludeEnd("ide");
messageSends: ["proxy:", "tuplespace:", "proxy"]
}),
$globals.LindaClient);


$globals.LindaClient.klass.iVarNames = ['defaultServerUrl'];
$core.addMethod(
$core.method({
selector: "changeDeefaultServerUrlForHeroku",
protocol: 'utilities',
fn: function (){
var self=this;
self["@defaultServerUrl"]="http://node-linda-ststudy.herokuapp.com";
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changeDeefaultServerUrlForHeroku\x0a\x09\x22LindaCLient changeDeefaultServerUrlForHeroku\x22\x0a\x09\x0a\x09defaultServerUrl := 'http://node-linda-ststudy.herokuapp.com'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "chatRoom",
protocol: 'examples',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chatRoom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "connect:",
protocol: 'instance creation',
fn: function (aSocketIo){
var self=this;
var newClient;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
newClient=self._proxy_($recv(self._linda())._new());
$2=newClient;
$recv($2)._connect_(aSocketIo);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect:",{aSocketIo:aSocketIo,newClient:newClient},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSocketIo"],
source: "connect: aSocketIo\x0a\x09| newClient |\x0a\x09newClient := self proxy: self linda new.\x0a\x09^newClient connect: aSocketIo; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "new", "linda", "connect:", "yourself"]
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "default",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._serverUrl_(self._defaultServerUrl());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^self serverUrl: self defaultServerUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "defaultServerUrl"]
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "defaultServerUrl",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@defaultServerUrl"];
if(($receiver = $1) == null || $receiver.isNil){
self["@defaultServerUrl"]=$recv(self._serverUrls())._first();
self["@defaultServerUrl"];
} else {
$1;
};
$2=self["@defaultServerUrl"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultServerUrl",{},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultServerUrl\x0a\x0a\x09\x22defaultServerUrl ifNil: [defaultServerUrl := self serverUrls second].\x22\x0a\x09defaultServerUrl ifNil: [defaultServerUrl := self serverUrls first].\x0a\x09^defaultServerUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "first", "serverUrls"]
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "flushDeefaultServerUrlForHeroku",
protocol: 'utilities',
fn: function (){
var self=this;
self["@defaultServerUrl"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushDeefaultServerUrlForHeroku\x0a\x09\x22LindaCLient flushDeefaultServerUrlForHeroku\x22\x0a\x09\x0a\x09defaultServerUrl := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "linda",
protocol: 'private',
fn: function (){
var self=this;
function $Linda(){return $globals.Linda||(typeof Linda=="undefined"?nil:Linda)}
return $Linda();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "linda\x0a\x09\x22JS function LindaClient\x22\x0a\x09^Linda",
referencedClasses: ["Linda"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "serverUrl:",
protocol: 'instance creation',
fn: function (aUrlString){
var self=this;
function $SocketIo(){return $globals.SocketIo||(typeof SocketIo=="undefined"?nil:SocketIo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._connect_($recv($SocketIo())._serverUrl_(aUrlString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl:",{aUrlString:aUrlString},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUrlString"],
source: "serverUrl: aUrlString\x0a\x0a\x09^self connect: (SocketIo serverUrl: aUrlString).",
referencedClasses: ["SocketIo"],
//>>excludeEnd("ide");
messageSends: ["connect:", "serverUrl:"]
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "serverUrls",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["http://127.0.0.1:8931/", "http://node-linda-ststudy.herokuapp.com"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrls\x0a\x0a\x09^#('http://127.0.0.1:8931/' 'http://node-linda-ststudy.herokuapp.com')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);


$core.addClass('SocketIo', $globals.NodeLindaProxy, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "close",
protocol: 'services',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._close();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.SocketIo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09^self proxy close",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["close", "proxy"]
}),
$globals.SocketIo);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'services',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._uri();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.SocketIo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri\x0a\x09^self proxy uri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["uri", "proxy"]
}),
$globals.SocketIo);


$core.addMethod(
$core.method({
selector: "serverUrl:",
protocol: 'as yet unclassified',
fn: function (aUrlString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy_($recv(self._socketIo())._value_(aUrlString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl:",{aUrlString:aUrlString},$globals.SocketIo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUrlString"],
source: "serverUrl: aUrlString\x0a\x0a\x09\x22^self proxy: (self socketIo value: aUrlString value: #{#autoConnect -> false})\x22\x0a\x09\x22^self proxy: (self socketIo value connect: aUrlString )\x22\x0a\x09^self proxy: (self socketIo value: aUrlString )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "value:", "socketIo"]
}),
$globals.SocketIo.klass);

$core.addMethod(
$core.method({
selector: "socketIo",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var $1;
$1=socketIo;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "socketIo\x0a\x09^socketIo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SocketIo.klass);


$core.addClass('Tuple', $globals.NodeLindaProxy, ['data', 'expireAt', 'fromAddress'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._proxy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self["@proxy"]=$recv(self._data())._asJSON();
self["@proxy"];
} else {
$1;
};
$recv(self._proxy())._at_put_("class",$recv(self._class())._name());
$2=self["@proxy"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09self proxy ifNil: [proxy := self data asJSON].\x0a\x09self proxy at: #class put: self class name.\x0a\x09^proxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "proxy", "asJSON", "data", "at:put:", "name", "class"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self["@data"];
if(($receiver = $1) == null || $receiver.isNil){
self["@data"]=$globals.HashedCollection._newFromPairs_([]);
self["@data"];
$2=self._proxy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv($recv(self._proxy())._data())._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@data"])._at_put_(k,v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
} else {
$1;
};
$3=self["@data"];
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09data ifNil: [data := #{}.\x0a\x09\x09self proxy ifNotNil: [self proxy data keysAndValuesDo: [:k :v | data at: k put: v]]].\x0a\x09^data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifNotNil:", "proxy", "keysAndValuesDo:", "data", "at:put:"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@data"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "data: anObject\x0a\x09data := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "expireAt",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_ifAbsent_("expire_at",(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"expireAt",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "expireAt\x0a\x09^ self proxy at: 'expire_at' ifAbsent: [nil]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "proxy"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "fromAddress",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_ifAbsent_("from",(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromAddress",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fromAddress\x0a\x09^self proxy at: 'from' ifAbsent: [nil]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "proxy"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._keysOfJSON_(self._data());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^self keysOfJSON: self data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keysOfJSON:", "data"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_("type");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^self data at: #type",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("type",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{anObject:anObject},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject\x0a\x09self data at: #type put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.Tuple);


$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (aProxy){
var self=this;
var tupleClassName;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = aProxy) == null || $receiver.isNil){
return nil;
} else {
aProxy;
};
tupleClassName=$recv($recv(aProxy)._data())._at_ifAbsent_("class",(function(){
return "Tuple";

}));
$1=$recv($recv($recv($Smalltalk())._globals())._at_(tupleClassName))._proxy_(aProxy);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{aProxy:aProxy,tupleClassName:tupleClassName},$globals.Tuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy"],
source: "fromJSON: aProxy\x0a\x09| tupleClassName |\x0a\x09aProxy ifNil: [^nil].\x0a\x09tupleClassName := aProxy data at: 'class' ifAbsent: ['Tuple'].\x0a\x09^(Smalltalk globals at: tupleClassName) proxy: aProxy",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "at:ifAbsent:", "data", "proxy:", "at:", "globals"]
}),
$globals.Tuple.klass);


$core.addClass('TupleSpace', $globals.NodeLindaProxy, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "cancel:",
protocol: 'services',
fn: function (anId){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._proxy())._cancel_(anId);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancel:",{anId:anId},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId"],
source: "cancel: anId\x0a\x0a\x09self proxy cancel: anId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cancel:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "createCallBackId",
protocol: 'callback services',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("create_callback_id"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createCallBackId",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createCallBackId\x0a\x0a\x09^(self proxy at: 'create_callback_id') value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "createWatchCallbackId:",
protocol: 'callback services',
fn: function (aTupleHashedCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("create_watch_callback_id"))._value_($recv(aTupleHashedCollection)._asJSON());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createWatchCallbackId:",{aTupleHashedCollection:aTupleHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "createWatchCallbackId: aTupleHashedCollection\x0a\x0a\x09^(self proxy at: 'create_watch_callback_id') value: aTupleHashedCollection asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "proxy", "asJSON"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "ioCallbacks",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("io_callbacks");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ioCallbacks",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ioCallbacks\x0a\x09^self proxy at: 'io_callbacks'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^self proxy name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "option:",
protocol: 'services',
fn: function (aHashedCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._option_(aHashedCollection);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"option:",{aHashedCollection:aHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHashedCollection"],
source: "option: aHashedCollection\x0a\x0a\x09^self proxy option: aHashedCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["option:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "read:",
protocol: 'services',
fn: function (aTuple){
var self=this;
var ans;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
self._read_callback_(aTuple,(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_($recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=ans;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:",{aTuple:aTuple,ans:ans},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple"],
source: "read: aTuple\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self read: aTuple callback: [:e :t| ans add: (Tuple fromJSON: t)].\x0a\x09^ans",
referencedClasses: ["OrderedCollection", "Tuple"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "add:", "fromJSON:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "read:callback:",
protocol: 'services',
fn: function (aTuple,aBlockClosure){
var self=this;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._read_with_($recv(aTuple)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:callback:",{aTuple:aTuple,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "aBlockClosure"],
source: "read: aTuple callback: aBlockClosure\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy read: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["read:with:", "proxy", "asJSON", "value:value:", "fromJSON:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "readp:wait:callback:",
protocol: 'services',
fn: function (aTuple,aMilliseconds,aBlockClosure){
var self=this;
var id;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
id=self._read_callback_($recv(aTuple)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._cancel_(id);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(aMilliseconds);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readp:wait:callback:",{aTuple:aTuple,aMilliseconds:aMilliseconds,aBlockClosure:aBlockClosure,id:id},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "aMilliseconds", "aBlockClosure"],
source: "readp: aTuple wait: aMilliseconds callback: aBlockClosure \x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09| id |\x0a\x09id := self read: aTuple asJSON callback: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)].\x0a\x09[self cancel: id] valueWithTimeout: aMilliseconds",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["read:callback:", "asJSON", "value:value:", "fromJSON:", "valueWithTimeout:", "cancel:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "removeIoCallbacks",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("remove_io_callbacks"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeIoCallbacks",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeIoCallbacks\x0a\x0a\x09^(self proxy at: 'remove_io_callbacks') value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "take:",
protocol: 'services',
fn: function (aTuple){
var self=this;
var ans;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
self._take_callback_(aTuple,(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=ans;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"take:",{aTuple:aTuple,ans:ans},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple"],
source: "take: aTuple\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self take: aTuple callback: [:e :t| ans add: t].\x0a\x09^ans",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "take:callback:", "add:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "take:callback:",
protocol: 'services',
fn: function (aTuple,aBlockClosure){
var self=this;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._take_with_($recv(aTuple)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"take:callback:",{aTuple:aTuple,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "aBlockClosure"],
source: "take: aTuple callback: aBlockClosure\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy take: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["take:with:", "proxy", "asJSON", "value:value:", "fromJSON:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "takep:wait:callback:",
protocol: 'services',
fn: function (aTuple,aMilliseconds,aBlockClosure){
var self=this;
var id;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
id=self._take_callback_($recv(aTuple)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._cancel_(id);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(aMilliseconds);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"takep:wait:callback:",{aTuple:aTuple,aMilliseconds:aMilliseconds,aBlockClosure:aBlockClosure,id:id},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "aMilliseconds", "aBlockClosure"],
source: "takep: aTuple  wait: aMilliseconds callback: aBlockClosure\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09| id |\x0a\x09id := self take: aTuple asJSON callback: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)].\x0a\x09[self cancel: id] valueWithTimeout: aMilliseconds",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["take:callback:", "asJSON", "value:value:", "fromJSON:", "valueWithTimeout:", "cancel:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "watch:callback:",
protocol: 'services',
fn: function (aTuple,aBlockClosure){
var self=this;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._watch_with_($recv(aTuple)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:callback:",{aTuple:aTuple,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "aBlockClosure"],
source: "watch: aTuple callback: aBlockClosure\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x0a\x09aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy watch: aTuple asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["watch:with:", "proxy", "asJSON", "value:value:", "fromJSON:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "watchCallbackIds",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("watch_callback_ids");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watchCallbackIds",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "watchCallbackIds\x0a\x09^self proxy at: 'watch_callback_ids'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:",
protocol: 'services',
fn: function (aTuple){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._write_options_(aTuple,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:",{aTuple:aTuple},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple"],
source: "write: aTuple \x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x22\x0a\x0a\x09self write: aTuple options: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:options:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:expireSeconds:",
protocol: 'services',
fn: function (aTuple,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._write_options_(aTuple,$globals.HashedCollection._newFromPairs_(["expire",anInteger]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:expireSeconds:",{aTuple:aTuple,anInteger:anInteger},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "anInteger"],
source: "write: aTuple expireSeconds: anInteger\x09\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x22\x0a\x09\x0a\x09self write: aTuple options: #{#expire -> anInteger}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:options:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:options:",
protocol: 'services',
fn: function (aTuple,optionsHashedCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._proxy();
$2=$recv(aTuple)._asJSON();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJSON"]=1;
//>>excludeEnd("ctx");
$recv($1)._write_with_($2,$recv(optionsHashedCollection)._asJSON());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:options:",{aTuple:aTuple,optionsHashedCollection:optionsHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "optionsHashedCollection"],
source: "write: aTuple options: optionsHashedCollection\x0a\x09\x22aTuple\x09<Tuple | HaschedCollection>\x22\x0a\x0a\x09self proxy write: aTuple asJSON with: optionsHashedCollection asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:with:", "proxy", "asJSON"]
}),
$globals.TupleSpace);


$core.addMethod(
$core.method({
selector: "lindaClient:name:",
protocol: 'as yet unclassified',
fn: function (aLindaClient,aTupleSpaceName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy_($recv(aLindaClient)._tupleSpace_(aTupleSpaceName));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lindaClient:name:",{aLindaClient:aLindaClient,aTupleSpaceName:aTupleSpaceName},$globals.TupleSpace.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLindaClient", "aTupleSpaceName"],
source: "lindaClient: aLindaClient name: aTupleSpaceName\x0a\x0a\x09^self proxy: (aLindaClient tupleSpace: aTupleSpaceName).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "tupleSpace:"]
}),
$globals.TupleSpace.klass);

});
