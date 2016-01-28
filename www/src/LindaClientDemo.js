define("amber-ambercordova/LindaClientDemo", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber-ambercordova/LindaClient", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,ko
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('LindaClientDemo');
$core.packages["LindaClientDemo"].innerEval = function (expr) { return eval(expr); };
$core.packages["LindaClientDemo"].imports = ["ko=knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["LindaClientDemo"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('CompassTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._handleNameKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName\x0a\x0a\x09^self data at: self class handleNameKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "handleNameKey", "class"]
}),
$globals.CompassTuple);

$core.addMethod(
$core.method({
selector: "handleName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._handleNameKey(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName:",{aString:aString},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "handleName: aString\x0a\x0a\x09self data at: self class handleNameKey put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "handleNameKey", "class"]
}),
$globals.CompassTuple);

$core.addMethod(
$core.method({
selector: "heading",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._headingKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heading",{},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heading\x0a\x0a\x09^self data at: self class headingKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "headingKey", "class"]
}),
$globals.CompassTuple);

$core.addMethod(
$core.method({
selector: "heading:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._headingKey(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heading:",{aString:aString},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "heading: aString\x0a\x0a\x09self data at: self class headingKey put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "headingKey", "class"]
}),
$globals.CompassTuple);

$core.addMethod(
$core.method({
selector: "headingRotate",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._headingRotateKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"headingRotate",{},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "headingRotate\x0a\x0a\x09^self data at: self class headingRotateKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "headingRotateKey", "class"]
}),
$globals.CompassTuple);

$core.addMethod(
$core.method({
selector: "headingRotate:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._headingRotateKey(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"headingRotate:",{aString:aString},$globals.CompassTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "headingRotate: aString\x0a\x0a\x09self data at: self class headingRotateKey put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "headingRotateKey", "class"]
}),
$globals.CompassTuple);


$core.addMethod(
$core.method({
selector: "handleNameKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "handleName";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleNameKey\x0a\x09^'handleName'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompassTuple.klass);

$core.addMethod(
$core.method({
selector: "headingKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "heading";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "headingKey\x0a\x09^'heading'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompassTuple.klass);

$core.addMethod(
$core.method({
selector: "headingRotateKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "headingRotate";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "headingRotateKey\x0a\x09^'headingRotate'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompassTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
var self=this;
return "compass";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'compass'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CompassTuple.klass);


$core.addClass('FibTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "answer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._answerKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answer",{},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answer\x0a\x0a\x09^self data at: self class answerKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "answerKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "answer:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._answerKey(),anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answer:",{anInteger:anInteger},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "answer: anInteger\x0a\x0a\x09self data at: self class answerKey put: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "answerKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "n",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._nKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n",{},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "n\x0a\x0a\x09^self data at: self class nKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "nKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "n:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_put_($recv(self._class())._nKey(),anIndex);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n:",{anIndex:anIndex},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "n: anIndex\x0a\x0a\x09^self data at: self class nKey put: anIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "nKey", "class"]
}),
$globals.FibTuple);


$core.addMethod(
$core.method({
selector: "answerKey",
protocol: 'accessor ',
fn: function (){
var self=this;
return "answer";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answerKey\x0a\x09^'answer'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "fib",
protocol: 'instance creation',
fn: function (){
var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
$recv(tuple)._type_(self._fibTypeKey());
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fib",{tuple:tuple},$globals.FibTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fib\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09tuple type: self fibTypeKey.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "type:", "fibTypeKey"]
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "fibTypeKey",
protocol: 'accessor ',
fn: function (){
var self=this;
return "fib";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fibTypeKey\x0a\x09^'fib'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "nKey",
protocol: 'accessor ',
fn: function (){
var self=this;
return "n";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nKey\x0a\x09^'n'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'instance creation',
fn: function (){
var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
$recv(tuple)._type_(self._resultTypeKey());
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{tuple:tuple},$globals.FibTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09tuple type: self resultTypeKey.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "type:", "resultTypeKey"]
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "resultTypeKey",
protocol: 'accessor ',
fn: function (){
var self=this;
return "fib-result";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultTypeKey\x0a\x09^'fib-result'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
var self=this;
return "fibSpace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'fibSpace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);


$core.addClass('GyroTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "gX",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gXKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gX\x0a\x0a\x09^self data at: self class gXKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gXKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gX:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gXKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gX: aValue\x0a\x0a\x09self data at: self class gXKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gXKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gY",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gYKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gY\x0a\x0a\x09^self data at: self class gYKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gYKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gY:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gYKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gY: aValue\x0a\x0a\x09self data at: self class gYKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gYKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gZ",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gZKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gZ\x0a\x0a\x09^self data at: self class gZKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gZKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gZ:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gZKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gZ: aValue\x0a\x0a\x09self data at: self class gZKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gZKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._handleNameKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName\x0a\x0a\x09^self data at: self class handleNameKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "handleNameKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "handleName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._handleNameKey(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName:",{aString:aString},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "handleName: aString\x0a\x0a\x09self data at: self class handleNameKey put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "handleNameKey", "class"]
}),
$globals.GyroTuple);


$core.addMethod(
$core.method({
selector: "gXKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "gX";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gXKey\x0a\x09^'gX'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "gYKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "gY";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gYKey\x0a\x09^'gY'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "gZKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "gZ";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gZKey\x0a\x09^'gZ'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "handleNameKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "handleName";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleNameKey\x0a\x09^'handleName'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
var self=this;
return "gyroSpace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'gyroSpace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);


$core.addClass('LindaBasicDemo', $globals.Object, [], 'LindaClientDemo');

$core.addMethod(
$core.method({
selector: "defaultTupleSpace",
protocol: 'defaults',
fn: function (){
var self=this;
var lindaClient;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
lindaClient=$recv($LindaClient())._default();
$1=$recv(lindaClient)._tupleSpace_("default");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultTupleSpace",{lindaClient:lindaClient},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultTupleSpace\x0a\x09| lindaClient |\x0a\x09lindaClient := LindaClient default.\x0a\x09^lindaClient tupleSpace: 'default'",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["default", "tupleSpace:"]
}),
$globals.LindaBasicDemo.klass);

$core.addMethod(
$core.method({
selector: "factorialMaster",
protocol: 'factorial',
fn: function (){
var self=this;
var tickets,n,lot,ts,ans;
function $LindaBasicDemo(){return $globals.LindaBasicDemo||(typeof LindaBasicDemo=="undefined"?nil:LindaBasicDemo)}
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tickets=(5);
n=(100);
lot=$recv(n).__slash(tickets);
ts=$recv($LindaBasicDemo())._defaultTupleSpace();
$recv((1)._to_by_(n,lot))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","fact","i",i,"lot",lot]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
ans=$recv($OrderedCollection())._new();
$recv((1)._to_(tickets))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._take_callback_($globals.HashedCollection._newFromPairs_(["type","ans"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(ans)._add_($recv($recv(t)._data())._at_("ans"));
$1=$recv(i).__eq(tickets);
if($core.assert($1)){
return $recv($recv(ans)._inject_into_((1),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(sum).__star(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({sum:sum,e:e},$ctx3,5)});
//>>excludeEnd("ctx");
})))._inspect();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({err:err,t:t},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"factorialMaster",{tickets:tickets,n:n,lot:lot,ts:ts,ans:ans},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "factorialMaster\x0a\x0a\x09| tickets n lot ts ans|\x0a\x09tickets := 5.\x0a\x09n := 100.\x0a\x09lot := n /  tickets.\x0a\x09ts := LindaBasicDemo defaultTupleSpace.\x0a\x09(1 to: n by: lot) do:[:i |\x0a\x09\x09ts write: #{#type -> #fact . #i -> i. #lot -> lot}.].\x0a\x09ans := OrderedCollection new.\x0a\x09(1 to: tickets) do:[:i |\x0a\x09\x09ts take: #{#type -> #ans} callback: [:err :t |\x0a\x09\x09\x09ans add: (t data at: #ans).\x0a\x09\x09\x09(i = tickets)\x0a\x09\x09\x09\x09ifTrue: [(ans inject: 1 into: [:sum :e | sum * e]) inspect].\x0a\x09\x09]].",
referencedClasses: ["LindaBasicDemo", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["/", "defaultTupleSpace", "do:", "to:by:", "write:", "new", "to:", "take:callback:", "add:", "at:", "data", "ifTrue:", "=", "inspect", "inject:into:", "*"]
}),
$globals.LindaBasicDemo.klass);

$core.addMethod(
$core.method({
selector: "factorialWorker",
protocol: 'factorial',
fn: function (){
var self=this;
var base,lot,ts,ans;
function $LindaBasicDemo(){return $globals.LindaBasicDemo||(typeof LindaBasicDemo=="undefined"?nil:LindaBasicDemo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ts=$recv($LindaBasicDemo())._defaultTupleSpace();
$recv(ts)._take_callback_($globals.HashedCollection._newFromPairs_(["type","fact"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(t)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["data"]=1;
//>>excludeEnd("ctx");
base=$recv($1)._at_("i");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
base;
lot=$recv($recv(t)._data())._at_("lot");
lot;
ans=$recv($recv(base)._to_($recv($recv(base).__plus(lot)).__minus((1))))._inject_into_((1),(function(sum,elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(sum).__star(elm);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sum:sum,elm:elm},$ctx2,2)});
//>>excludeEnd("ctx");
}));
ans;
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","ans","i",base,"ans",ans]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"factorialWorker",{base:base,lot:lot,ts:ts,ans:ans},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "factorialWorker\x0a\x0a\x09| base lot ts ans|\x0a\x09ts := LindaBasicDemo defaultTupleSpace.\x0a\x09ts take: #{#type -> #fact} callback: [:err :t |\x0a\x09\x09base := t data at: 'i'.\x0a\x09\x09lot := t data at: 'lot'.\x0a\x09\x09ans := (base to: (base + lot - 1)) inject: 1 into: [:sum :elm | sum * elm].\x0a\x09\x09ts write: #{#type -> #ans . #i -> base . #ans -> ans} .\x0a\x09].",
referencedClasses: ["LindaBasicDemo"],
//>>excludeEnd("ide");
messageSends: ["defaultTupleSpace", "take:callback:", "at:", "data", "inject:into:", "to:", "-", "+", "*", "write:"]
}),
$globals.LindaBasicDemo.klass);

$core.addMethod(
$core.method({
selector: "phil:total:",
protocol: 'pholosoper table',
fn: function (anIndex,num){
var self=this;
var ts;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$8,$7,$6,$11,$10,$9,$12,$13,$14;
ts=self._philosopherTupleSpace();
$3=$recv(anIndex)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$2="Phil ".__comma($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(" is thinking");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["show:"]=1;
//>>excludeEnd("ctx");
$4=$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$recv(ts)._read_callback_($globals.HashedCollection._newFromPairs_(["type","ticket"]),(function(err1,ti){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._read_callback_($globals.HashedCollection._newFromPairs_(["type","chopstick","i",anIndex]),(function(err2,c1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=ts;
$8=$recv(anIndex).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__backslash_backslash(num);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["\x5c\x5c"]=1;
//>>excludeEnd("ctx");
$6=$globals.HashedCollection._newFromPairs_(["type","chopstick","i",$7]);
return $recv($5)._read_callback_($6,(function(err3,c2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$11=$recv(anIndex)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["printString"]=2;
//>>excludeEnd("ctx");
$10="Phil ".__comma($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx[","]=4;
//>>excludeEnd("ctx");
$9=$recv($10).__comma(" starts eating");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["show:"]=2;
//>>excludeEnd("ctx");
$12=$recv($Transcript())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["cr"]=2;
//>>excludeEnd("ctx");
$12;
$13=$recv("Phil ".__comma($recv(anIndex)._printString())).__comma(" ends eating");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv($Transcript())._show_($13);
$14=$recv($Transcript())._cr();
$14;
$recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","chopstick","i",anIndex]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
$recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","chopstick","i",$recv($recv(anIndex).__plus((1))).__backslash_backslash(num)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["write:"]=2;
//>>excludeEnd("ctx");
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","ticket"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({err3:err3,c2:c2},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({err2:err2,c1:c1},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["read:callback:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err1:err1,ti:ti},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["read:callback:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"phil:total:",{anIndex:anIndex,num:num,ts:ts},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "num"],
source: "phil: anIndex total: num\x0a\x09\x22[LindaBasicDemo phil: 4 total: 5] valueWithInterval: 2000\x22\x0a\x0a\x09| ts |\x0a\x09ts := self philosopherTupleSpace.\x0a\x0a\x09Transcript show: 'Phil ', anIndex printString, ' is thinking'; cr.\x0a\x09ts read: #{'type' -> 'ticket'} callback: [:err1 :ti |\x0a\x09\x09ts read: #{'type' -> 'chopstick' . 'i' -> anIndex} callback: [:err2 :c1 |\x0a\x09\x09\x09ts read: #{'type' -> 'chopstick' . 'i' -> ((anIndex + 1) \x5c\x5c num)} callback: [:err3 :c2 |\x0a\x09\x09\x09\x09Transcript show: 'Phil ', anIndex printString, ' starts eating'; cr.\x0a\x09\x09\x09\x09Transcript show: 'Phil ', anIndex printString, ' ends eating'; cr.\x0a\x09\x09\x09\x09ts write: #{'type' -> 'chopstick' . 'i' -> anIndex}.\x0a\x09\x09\x09\x09ts write: #{'type' -> 'chopstick' . 'i' -> ((anIndex + 1) \x5c\x5c num)}.\x0a\x09\x09\x09\x09ts write: #{'type' -> 'ticket'} .\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["philosopherTupleSpace", "show:", ",", "printString", "cr", "read:callback:", "\x5c\x5c", "+", "write:"]
}),
$globals.LindaBasicDemo.klass);

$core.addMethod(
$core.method({
selector: "philMasterTotal:",
protocol: 'pholosoper table',
fn: function (num){
var self=this;
var ts;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
ts=self._philosopherTupleSpace();
(1)._to_do_(num,(function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","chopstick","i",i]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(num).__minus((1)))._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","ticket"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"philMasterTotal:",{num:num,ts:ts},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["num"],
source: "philMasterTotal: num\x0a\x09\x22LindaBasicDemo philosopherTupleSpace take: #{} callback: [:e :t| Transcript show: t; cr].\x0a\x0a\x09LindaBasicDemo philMasterTotal: 5.\x0a\x0a\x091 to: 5 do: [:i |\x0a\x09\x09[LindaBasicDemo phil: i total: 5] valueWithInterval: (10 atRandom * 1000)\x0a\x09]\x22\x0a\x0a\x09| ts |\x0a\x09ts := self philosopherTupleSpace.\x0a\x091 to: num do: [:i |\x0a\x09\x09ts write: #{'type' -> 'chopstick' . 'i' -> i}.\x0a\x09].\x0a\x0a\x09(num - 1) timesRepeat: [\x0a\x09\x09ts write: #{'type' -> 'ticket'} .\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["philosopherTupleSpace", "to:do:", "write:", "timesRepeat:", "-"]
}),
$globals.LindaBasicDemo.klass);

$core.addMethod(
$core.method({
selector: "philosopherTupleSpace",
protocol: 'pholosoper table',
fn: function (){
var self=this;
var lindaClient;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
lindaClient=$recv($LindaClient())._default();
$1=$recv(lindaClient)._tupleSpace_("philTable");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"philosopherTupleSpace",{lindaClient:lindaClient},$globals.LindaBasicDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "philosopherTupleSpace\x0a\x09| lindaClient |\x0a\x09lindaClient := LindaClient default.\x0a\x09^lindaClient tupleSpace: 'philTable'",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["default", "tupleSpace:"]
}),
$globals.LindaBasicDemo.klass);


$core.addClass('LindaClientApp', $globals.Object, ['lindaClient', 'viewModel', 'watchId', 'interval'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#start"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startDemo();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._setupViewModel();
$recv(ko)._applyBindings_(self["@viewModel"]);
self._setupLindaClient();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09'#start' asJQuery click: [ self startDemo ].\x0a\x09self setupViewModel.\x0a\x09ko applyBindings: viewModel.\x0a\x09self setupLindaClient.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "startDemo", "setupViewModel", "applyBindings:", "setupLindaClient"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "doJQueryPrepend:",
protocol: 'action',
fn: function (aMsg){
var self=this;
var elem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
elem="<li>"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv(elem)._html_(aMsg);
$recv("#output-list"._asJQuery())._prepend_(elem);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryPrepend:",{aMsg:aMsg,elem:elem},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMsg"],
source: "doJQueryPrepend: aMsg\x0a\x09| elem|\x0a\x09elem := '<li>' asJQuery.\x0a\x09elem html: aMsg.\x0a\x09'#output-list' asJQuery prepend: elem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "html:", "prepend:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "incInterval",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._interval();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interval"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt(self._intervalLimit());
if($core.assert($1)){
self._interval_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interval:"]=1;
//>>excludeEnd("ctx");
};
self._interval_($recv(self._interval()).__plus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"incInterval",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "incInterval\x0a\x09self interval > self intervalLimit ifTrue: [self interval: 0].\x0a\x09self interval: self interval + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", ">", "interval", "intervalLimit", "interval:", "+"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "interval",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@interval"];
if(($receiver = $1) == null || $receiver.isNil){
self["@interval"]=(0);
self["@interval"];
} else {
$1;
};
$2=self["@interval"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interval",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interval\x0a\x09interval ifNil: [interval := 0].\x0a\x09^ interval",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "interval:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@interval"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "interval: anObject\x0a\x09interval := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "intervalLimit",
protocol: 'action',
fn: function (){
var self=this;
return (100);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "intervalLimit\x0a\x09^100",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "lindaClient",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@lindaClient"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lindaClient\x0a\x09^ lindaClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "lindaClient:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@lindaClient"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "lindaClient: anObject\x0a\x09lindaClient := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "resetStartButton",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#start"._asJQuery())._text_("START");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetStartButton",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetStartButton\x0a\x0a\x09'#start' asJQuery text: 'START'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:", "asJQuery"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "serverUrl",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("serverUrl"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrl\x0a\x09^ (self viewModel at: #serverUrl) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "setupLindaClient",
protocol: 'starting',
fn: function (){
var self=this;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@lindaClient"]=$recv($LindaClient())._serverUrl_(self._serverUrl());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupLindaClient",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupLindaClient\x0a\x0a\x09lindaClient := LindaClient serverUrl: self serverUrl",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "serverUrl"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._viewModel())._addAll_($globals.HashedCollection._newFromPairs_(["availableServers",$recv(ko)._observableArray_($recv($LindaClient())._serverUrls()),"serverUrl",$recv(ko)._observable_($recv($LindaClient())._defaultServerUrl())]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x0a\x09self viewModel addAll: #{\x0a\x09\x09#availableServers -> (ko observableArray: LindaClient serverUrls) .\x0a\x09\x09#serverUrl -> (ko observable: LindaClient defaultServerUrl)\x0a\x09}.",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["addAll:", "viewModel", "observableArray:", "serverUrls", "observable:", "defaultServerUrl"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._setupLindaClient();
$recv("#start"._asJQuery())._text_("デモ中");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x0a\x09self setupLindaClient.\x0a\x09'#start' asJQuery text: 'デモ中'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupLindaClient", "text:", "asJQuery"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "viewModel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@viewModel"];
if(($receiver = $2) == null || $receiver.isNil){
self["@viewModel"]=$globals.HashedCollection._newFromPairs_([]);
$1=self["@viewModel"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"viewModel",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "viewModel\x0a\x09^viewModel ifNil: [viewModel := #{}]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "viewModel:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@viewModel"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "viewModel: anObject\x0a\x09viewModel := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "watchId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@watchId"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "watchId\x0a\x09^ watchId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "watchId:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@watchId"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "watchId: anObject\x0a\x09watchId := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);


$core.addMethod(
$core.method({
selector: "ko",
protocol: 'starting',
fn: function (){
var self=this;
var $1;
$1=ko;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ko\x0a\x09^ko",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaClientApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaClientApp.klass);


$core.addClass('LindaCompass', $globals.LindaClientApp, ['workersTable'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaCompass.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09super augmentPage.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "dataOfWorkersTable",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._workersTable())._values())._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataOfWorkersTable",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataOfWorkersTable\x0a\x09^self workersTable values collect: [:e | e data]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "values", "workersTable", "data"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "deviceorientationHandler",
protocol: 'starting',
fn: function (){
var self=this;
function $CompassTuple(){return $globals.CompassTuple||(typeof CompassTuple=="undefined"?nil:CompassTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$receiver;
$1=(function(event){
var tmp,tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
tmp=$recv(event)._webkitCompassHeading();
tmp;
$2=tmp;
if(($receiver = $2) == null || $receiver.isNil){
tmp=$recv(event)._alpha();
tmp;
} else {
$2;
};
self._updateHeading_(tmp);
tuple=$recv($CompassTuple())._new();
tuple;
$recv(tuple)._handleName_(self._handleName());
$recv(tuple)._heading_(self._heading());
$recv(tuple)._headingRotate_(self._headingRotate());
$3=$recv(self._interval()).__gt(self._intervalLimit());
if($core.assert($3)){
return $recv(self._tupleSpace())._write_(tuple);
} else {
return self._incInterval();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event,tmp:tmp,tuple:tuple},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deviceorientationHandler",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deviceorientationHandler\x0a\x09^[:event |\x0a\x09\x09| tmp tuple |\x0a\x09\x09tmp := event webkitCompassHeading.\x0a\x09\x09tmp ifNil: [tmp := event alpha].\x0a\x09\x09self updateHeading: tmp.\x0a\x09\x09tuple := CompassTuple new.\x0a\x09\x09tuple handleName: self handleName.\x0a\x09\x09tuple heading: self heading.\x0a\x09\x09tuple headingRotate: self headingRotate.\x0a\x09\x09self interval > self intervalLimit\x0a\x09\x09\x09ifTrue: [self tupleSpace write: tuple]\x0a\x09\x09\x09ifFalse: [self incInterval].\x0a\x09].",
referencedClasses: ["CompassTuple"],
//>>excludeEnd("ide");
messageSends: ["webkitCompassHeading", "ifNil:", "alpha", "updateHeading:", "new", "handleName:", "handleName", "heading:", "heading", "headingRotate:", "headingRotate", "ifTrue:ifFalse:", ">", "interval", "intervalLimit", "write:", "tupleSpace", "incInterval"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("handleName"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName\x0a\x09^(viewModel at: #handleName ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "heading",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("heading"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heading",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "heading\x0a\x09^(viewModel at: #heading) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "heading:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("heading"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"heading:",{aValue:aValue},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "heading: aValue\x0a\x09(viewModel at: #heading) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "headingRotate",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("headingRotate"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"headingRotate",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "headingRotate\x0a\x09^(viewModel at: #headingRotate) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "headingRotate:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("headingRotate"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"headingRotate:",{aValue:aValue},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "headingRotate: aValue\x0a\x09(viewModel at: #headingRotate) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "rotateStr:",
protocol: 'updating',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("rotate(".__comma($recv($recv(anInteger)._negated())._printString())).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateStr:",{anInteger:anInteger},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "rotateStr: anInteger\x0a\x0a\x09^('rotate(', anInteger negated printString, 'deg)')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "printString", "negated"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "setupHandle",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._addEventListener_with_with_("deviceorientation",self._deviceorientationHandler(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupHandle",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupHandle\x0a\x0a\x09window addEventListener: #deviceorientation\x0a\x09\x09with: self deviceorientationHandler\x0a\x09\x09with: false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:with:with:", "deviceorientationHandler"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaCompass.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@viewModel"];
$3=$recv(ko)._observable_("handle name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
$4=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=2;
//>>excludeEnd("ctx");
$5=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=3;
//>>excludeEnd("ctx");
$2=$globals.HashedCollection._newFromPairs_(["handleName",$3,"accuracy",$4,"heading",$5,"headingRotate",$recv(ko)._observable_(self._rotateStr_((0))),"workers",$recv(ko)._observableArray_([])]);
$recv($1)._addAll_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x0a\x09super setupViewModel.\x0a\x0a\x09viewModel addAll: #{\x0a\x09\x09#handleName -> (ko observable: 'handle name') .\x0a\x09\x09#accuracy -> (ko observable: 0) .\x0a\x09\x09#heading -> (ko observable: 0) .\x0a\x09\x09#headingRotate -> (ko observable: (self rotateStr: 0)) .\x0a\x09\x09#workers -> (ko observableArray: #())\x0a\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observable:", "rotateStr:", "observableArray:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
var tuple;
function $CompassTuple(){return $globals.CompassTuple||(typeof CompassTuple=="undefined"?nil:CompassTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaCompass.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupHandle();
tuple=$recv($CompassTuple())._new();
$1=self["@watchId"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$recv($2)._cancel_(self["@watchId"]);
};
self["@watchId"]=$recv(self._tupleSpace())._watch_callback_(tuple,(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._workerAt_put_($recv(t)._fromAddress(),t);
return $recv($recv(self._viewModel())._at_("workers"))._value_(self._dataOfWorkersTable());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{tuple:tuple},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x0a\x09| tuple |\x0a\x09super startDemo.\x0a\x09self setupHandle.\x0a\x09tuple := CompassTuple new.\x0a\x09watchId ifNotNil: [self tupleSpace cancel: watchId].\x0a\x09watchId := self tupleSpace watch: tuple callback: [:err :t |\x0a\x09\x09self workerAt: t fromAddress put: t.\x0a\x09\x09(self viewModel at: #workers) value: self dataOfWorkersTable.\x0a\x09].",
referencedClasses: ["CompassTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "setupHandle", "new", "ifNotNil:", "cancel:", "tupleSpace", "watch:callback:", "workerAt:put:", "fromAddress", "value:", "at:", "viewModel", "dataOfWorkersTable"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $CompassTuple(){return $globals.CompassTuple||(typeof CompassTuple=="undefined"?nil:CompassTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($CompassTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x09^self lindaClient tupleSpace: CompassTuple tupleSpaceName",
referencedClasses: ["CompassTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "updateHeading:",
protocol: 'updating',
fn: function (anInteger){
var self=this;
var aValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
aValue=anInteger;
$1=$recv(aValue).__lt((0));
if($core.assert($1)){
aValue=$recv(aValue).__plus((360));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
aValue;
};
aValue=$recv(aValue).__plus($recv(window)._orientation());
self._heading_(aValue);
self._headingRotate_(self._rotateStr_(aValue));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateHeading:",{anInteger:anInteger,aValue:aValue},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "updateHeading: anInteger\x0a\x0a\x09| aValue |\x0a\x09aValue := anInteger.\x0a\x09aValue < 0\x0a\x09\x09ifTrue: [aValue := aValue + 360].\x0a\x09aValue := aValue + window orientation.\x0a\x09self heading: aValue.\x0a\x09self headingRotate: (self rotateStr: aValue)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "+", "orientation", "heading:", "headingRotate:", "rotateStr:"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "workerAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._workersTable())._at_(aKey);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workerAt:",{aKey:aKey},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "workerAt: aKey\x0a\x09^self workersTable at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "workersTable"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "workerAt:put:",
protocol: 'accessing',
fn: function (aKey,aWorker){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._workersTable())._at_put_(aKey,aWorker);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workerAt:put:",{aKey:aKey,aWorker:aWorker},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aWorker"],
source: "workerAt: aKey put: aWorker\x0a\x09self workersTable at: aKey put: aWorker",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "workersTable"]
}),
$globals.LindaCompass);

$core.addMethod(
$core.method({
selector: "workersTable",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@workersTable"];
if(($receiver = $1) == null || $receiver.isNil){
self["@workersTable"]=$globals.HashedCollection._newFromPairs_([]);
self["@workersTable"];
} else {
$1;
};
$2=self["@workersTable"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workersTable",{},$globals.LindaCompass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "workersTable\x0a\x09workersTable ifNil: [workersTable := #{}].\x0a\x09^workersTable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LindaCompass);



$core.addClass('LindaFibMaster', $globals.LindaClientApp, ['n', 'result', 'startDate'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
var ts,entryTuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaFibMaster.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv("#clear"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._clearResults();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._resetNumberOfEntry();
ts=self._tupleSpace();
entryTuple=$globals.HashedCollection._newFromPairs_(["type","entry"]);
$recv(ts)._watch_callback_(entryTuple,(function(e1,t1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._take_callback_(entryTuple,(function(e2,t2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._incNumberOfEntry();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e2:e2,t2:t2},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e1:e1,t1:t1},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{ts:ts,entryTuple:entryTuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09| ts entryTuple |\x0a\x09super augmentPage.\x0a\x09'#clear' asJQuery click: [ self clearResults ].\x0a\x0a\x09self resetNumberOfEntry.\x0a\x09ts := self tupleSpace.\x0a\x09entryTuple := #{'type' -> 'entry'}.\x0a\x09ts watch: entryTuple callback: [:e1 :t1 |\x0a\x09\x09ts take: entryTuple callback: [:e2 :t2 |\x0a\x09\x09\x09self incNumberOfEntry.\x0a\x09\x09].\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "click:", "asJQuery", "clearResults", "resetNumberOfEntry", "tupleSpace", "watch:callback:", "take:callback:", "incNumberOfEntry"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "clearResults",
protocol: 'action',
fn: function (){
var self=this;
var resultTuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
resultTuple=$recv($FibTuple())._result();
$recv($recv(self._n())._to_by_((1),(-1)))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(resultTuple)._n_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["n:"]=1;
//>>excludeEnd("ctx");
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
return $recv($1)._takep_wait_callback_(resultTuple,(10),(function(e,t){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["takep:wait:callback:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=resultTuple;
$recv($2)._n_((0));
$3=$recv($2)._answer_((0));
$recv(self._tupleSpace())._takep_wait_callback_(resultTuple,(10),(function(e,t){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearResults",{resultTuple:resultTuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearResults\x0a\x0a\x09|  resultTuple |\x0a\x09resultTuple := FibTuple result.\x0a\x09(self n to: 1 by: -1) do: [:i |\x0a\x09\x09resultTuple n: i.\x0a\x09\x09self tupleSpace takep: resultTuple wait: 10 callback: [:e :t | ]].\x0a\x0a\x09resultTuple n: 0; answer: 0.\x0a\x09self tupleSpace takep: resultTuple wait: 10 callback: [:e :t | ].",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "do:", "to:by:", "n", "n:", "takep:wait:callback:", "tupleSpace", "answer:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "decNumberOfEntry",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._numberOfEntry_($recv(self._numberOfEntry()).__minus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decNumberOfEntry",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decNumberOfEntry\x0a\x0a\x09self numberOfEntry: (self numberOfEntry - 1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["numberOfEntry:", "-", "numberOfEntry"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "incNumberOfEntry",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._numberOfEntry_($recv(self._numberOfEntry()).__plus((1)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"incNumberOfEntry",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "incNumberOfEntry\x0a\x0a\x09self numberOfEntry: (self numberOfEntry + 1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["numberOfEntry:", "+", "numberOfEntry"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "map",
protocol: 'accessing',
fn: function (){
var self=this;
var requestTuple,resultTuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
resultTuple=$recv($FibTuple())._result();
$recv($recv(self._n())._to_by_((1),(-1)))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
requestTuple=$recv($FibTuple())._fib();
requestTuple;
$recv(requestTuple)._n_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["n:"]=1;
//>>excludeEnd("ctx");
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
return $recv($1)._write_(requestTuple);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=resultTuple;
$recv($2)._n_((0));
$3=$recv($2)._answer_((0));
$recv(self._tupleSpace())._write_(resultTuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"map",{requestTuple:requestTuple,resultTuple:resultTuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "map\x0a\x09| requestTuple resultTuple |\x0a\x09resultTuple := FibTuple result.\x0a\x0a\x09(self n to: 1 by: -1) do: [:i |\x0a\x09\x09requestTuple := FibTuple fib.\x0a\x09\x09requestTuple n: i.\x0a\x09\x09self tupleSpace write: requestTuple].\x0a\x0a\x09resultTuple n: 0; answer: 0.\x0a\x09self tupleSpace write: resultTuple.",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "do:", "to:by:", "n", "fib", "n:", "write:", "tupleSpace", "answer:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "n",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self._viewModel())._at_("n"))._value())._asNumber();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "n\x0a\x09^(self viewModel at:#n) value asNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asNumber", "value", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "n:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._viewModel())._at_("n"))._value_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n:",{anObject:anObject},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "n: anObject\x0a\x09(self viewModel at:#n) value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "numberOfEntry",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("numberOfEntry"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfEntry",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numberOfEntry\x0a\x09^(self viewModel at:#numberOfEntry) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "numberOfEntry:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._viewModel())._at_("numberOfEntry"))._value_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfEntry:",{anObject:anObject},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "numberOfEntry: anObject\x0a\x09(self viewModel at:#numberOfEntry) value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "readResultTuple",
protocol: 'accessing',
fn: function (){
var self=this;
var tuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(self._n());
$recv(self._tupleSpace())._read_callback_(tuple,(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._timeToRun_($recv($recv($Date())._now()).__minus(self["@startDate"]));
return self._result_($recv(t)._answer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readResultTuple",{tuple:tuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readResultTuple\x0a\x09| tuple |\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: self n.\x0a\x09self tupleSpace read: tuple callback: [:err :t |\x0a\x09\x09self timeToRun: Date now - startDate.\x0a\x09\x09self result: t answer]",
referencedClasses: ["FibTuple", "Date"],
//>>excludeEnd("ide");
messageSends: ["result", "n:", "n", "read:callback:", "tupleSpace", "timeToRun:", "-", "now", "result:", "answer"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "resetNumberOfEntry",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._numberOfEntry_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetNumberOfEntry",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetNumberOfEntry\x0a\x0a\x09self numberOfEntry: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["numberOfEntry:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._viewModel())._at_("result"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ (self viewModel at: #result) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "result:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._viewModel())._at_("result"))._value_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result:",{anObject:anObject},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "result: anObject\x0a\x09(self viewModel at: #result) value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaFibMaster.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@viewModel"];
$3=$recv(ko)._observable_((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
$4=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=2;
//>>excludeEnd("ctx");
$5=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=3;
//>>excludeEnd("ctx");
$2=$globals.HashedCollection._newFromPairs_(["n",$3,"result",$4,"timeToRun",$5,"numberOfEntry",$recv(ko)._observable_((0))]);
$recv($1)._addAll_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x09super setupViewModel.\x0a\x09viewModel addAll: #{\x0a\x09\x09#n -> (ko observable: 5) .\x0a\x09\x09#result -> (ko observable: 0) .\x0a\x09\x09#timeToRun -> (ko observable: 0) .\x0a\x09\x09#numberOfEntry -> (ko observable: 0)\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observable:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
var msec;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaFibMaster.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._result_((0));
self._timeToRun_((0));
self["@startDate"]=$recv($Date())._now();
self._startMap();
self._readResultTuple();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{msec:msec},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x09| msec |\x0a\x09super startDemo.\x0a\x09self result: 0.\x0a\x09self timeToRun: 0.\x0a\x09startDate := Date now.\x0a\x09self startMap.\x0a\x09self readResultTuple.",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "result:", "timeToRun:", "now", "startMap", "readResultTuple"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "startMap",
protocol: 'accessing',
fn: function (){
var self=this;
var requestTuple,resultTuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
resultTuple=$recv($FibTuple())._result();
$recv($recv(self._n())._to_by_((1),(-1)))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
requestTuple=$recv($FibTuple())._fib();
requestTuple;
$recv(requestTuple)._n_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["n:"]=1;
//>>excludeEnd("ctx");
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$recv($1)._write_(requestTuple);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
return self._decNumberOfEntry();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=resultTuple;
$recv($2)._n_((0));
$3=$recv($2)._answer_((0));
$recv(self._tupleSpace())._write_(resultTuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startMap",{requestTuple:requestTuple,resultTuple:resultTuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startMap\x0a\x09| requestTuple resultTuple |\x0a\x09resultTuple := FibTuple result.\x0a\x0a\x09(self n to: 1 by: -1) do: [:i |\x0a\x09\x09requestTuple := FibTuple fib.\x0a\x09\x09requestTuple n: i.\x0a\x09\x09self tupleSpace write: requestTuple.\x0a\x09\x09self decNumberOfEntry].\x0a\x0a\x09resultTuple n: 0; answer: 0.\x0a\x09self tupleSpace write: resultTuple.",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "do:", "to:by:", "n", "fib", "n:", "write:", "tupleSpace", "decNumberOfEntry", "answer:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "timeToRun:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._viewModel())._at_("timeToRun"))._value_(anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"timeToRun:",{anObject:anObject},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "timeToRun: anObject\x0a\x09(self viewModel at: #timeToRun) value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "viewModel"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($FibTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: FibTuple tupleSpaceName",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaFibMaster);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
var self=this;
var app,lot,ts,ans;
function $LindaFibMaster(){return $globals.LindaFibMaster||(typeof LindaFibMaster=="undefined"?nil:LindaFibMaster)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
app=$recv($LindaFibMaster())._new();
$recv(app)._lindaClient_($recv($LindaClient())._default());
$recv(app)._n_((10));
$recv(app)._startMap();
$recv(app)._readResultTuple();
$recv(app)._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{app:app,lot:lot,ts:ts,ans:ans},$globals.LindaFibMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| app  lot ts ans|\x0a\x09app := LindaFibMaster new.\x0a\x09app lindaClient: (LindaClient default).\x0a\x09app n: 10.\x0a\x09app startMap.\x0a\x09app readResultTuple.\x0a\x09app inspect",
referencedClasses: ["LindaFibMaster", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "default", "n:", "startMap", "readResultTuple", "inspect"]
}),
$globals.LindaFibMaster.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFibMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFibMaster.klass);


$core.addClass('LindaFibWorker', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "orgfib:",
protocol: 'starting',
fn: function (n){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1;
$2=$recv(n).__lt((2));
if($core.assert($2)){
$1=(1);
} else {
$5=$recv(n).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=self._fib_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fib:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(self._fib_($recv(n).__minus((2))));
$1=$recv($3).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orgfib:",{n:n},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "orgfib: n\x0a\x09\x09^ n < 2\x0a\x09\x09ifTrue: [1]\x0a\x09\x09ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<", "+", "fib:", "-"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "readResultNoWait:",
protocol: 'starting',
fn: function (anIndex){
var self=this;
var ans,id,tuple;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
ans=$recv($OrderedCollection())._new();
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
id=$recv($1)._read_callback_(tuple,(function(err,tu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(tu);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,tu:tu},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._cancel_(id);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1));
$2=$recv(ans)._reject_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readResultNoWait:",{anIndex:anIndex,ans:ans,id:id,tuple:tuple},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "readResultNoWait: anIndex\x0a\x09| ans id tuple |\x0a\x09ans := OrderedCollection new.\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09id := self tupleSpace read: tuple callback: [:err :tu | ans add: tu ].\x0a\x09[self tupleSpace cancel: id] valueWithTimeout:1.\x0a\x09^ans reject: [:e | e isNil]",
referencedClasses: ["OrderedCollection", "FibTuple"],
//>>excludeEnd("ide");
messageSends: ["new", "result", "n:", "read:callback:", "tupleSpace", "add:", "valueWithTimeout:", "cancel:", "reject:", "isNil"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "reduce:",
protocol: 'starting',
fn: function (n){
var self=this;
var ans,id,value,v1,v2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6;
ans=self._readResultNoWait_(n);
$1=$recv(ans)._isEmpty();
if($core.assert($1)){
$2=$recv(n).__lt((3));
if($core.assert($2)){
self._writeResult_value_(n,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writeResult:value:"]=1;
//>>excludeEnd("ctx");
} else {
$3=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$5=$recv(n).__minus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$globals.HashedCollection._newFromPairs_(["type","fib-result","n",$5]);
$recv($3)._read_callback_($4,(function(e1,t1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",$recv(n).__minus((1))]),(function(e2,t2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(t1)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["data"]=1;
//>>excludeEnd("ctx");
v1=$recv($6)._at_("answer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
v1;
v2=$recv($recv(t2)._data())._at_("answer");
v2;
return self._writeResult_value_(n,$recv(v1).__plus(v2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e2:e2,t2:t2},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e1:e1,t1:t1},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["read:callback:"]=1;
//>>excludeEnd("ctx");
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reduce:",{n:n,ans:ans,id:id,value:value,v1:v1,v2:v2},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "reduce: n\x0a\x09| ans id value v1 v2 |\x0a\x09ans := self readResultNoWait: n.\x0a\x09ans isEmpty\x0a\x09\x09ifTrue: [n < 3\x0a\x09\x09\x09\x09\x09ifTrue: [self writeResult: n value: 1]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' . #n -> (n - 2)} callback: [:e1 :t1 |\x0a\x09\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' .  #n -> (n - 1)} callback: [:e2 :t2 |\x0a\x09\x09\x09\x09\x09\x09\x09\x09v1 := (t1 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09v2 := (t2 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09self writeResult: n value: (v1 + v2).\x0a\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readResultNoWait:", "ifTrue:", "isEmpty", "ifTrue:ifFalse:", "<", "writeResult:value:", "read:callback:", "tupleSpace", "-", "at:", "data", "+"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "resultNumber",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultNumber\x0a\x09\x22^ end\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaFibWorker.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@viewModel"];
$3=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
$2=$globals.HashedCollection._newFromPairs_(["targetNumber",$3,"resultNumber",$recv(ko)._observable_((0))]);
$recv($1)._addAll_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x09super setupViewModel.\x0a\x09viewModel addAll: #{\x0a\x09\x09#targetNumber -> (ko observable: 0) .\x0a\x09\x09#resultNumber -> (ko observable: 0)\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observable:"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaFibWorker.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._tupleSpace())._write_($globals.HashedCollection._newFromPairs_(["type","entry"]));
self._startReduce();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x0a\x09super startDemo.\x0a\x09self tupleSpace write: #{#type -> 'entry'}.\x0a\x09self startReduce",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startDemo", "write:", "tupleSpace", "startReduce"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "startReduce",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._tupleSpace())._take_callback_($globals.HashedCollection._newFromPairs_(["type","fib"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._reduce_($recv($recv(t)._data())._at_("n"));
return self._resetStartButton();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startReduce",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startReduce\x0a\x0a\x09self tupleSpace take: #{#type -> 'fib'} callback: [:err :t |\x0a\x09\x09self reduce: (t data at: 'n').\x0a\x09\x09self resetStartButton]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["take:callback:", "tupleSpace", "reduce:", "at:", "data", "resetStartButton"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "targetNumber",
protocol: 'accessing',
fn: function (){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetNumber\x0a\x09\x22^ start\x22\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'starting',
fn: function (){
var self=this;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($FibTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: FibTuple tupleSpaceName",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "writeResult:value:",
protocol: 'starting',
fn: function (anIndex,aValue){
var self=this;
var tuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$1;
$4=$recv(anIndex)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$3="第".__comma($4);
$2=$recv($3).__comma("番目のフィボナッチ数: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__comma($recv(aValue)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._doJQueryPrepend_($1);
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$recv(tuple)._answer_(aValue);
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeResult:value:",{anIndex:anIndex,aValue:aValue,tuple:tuple},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aValue"],
source: "writeResult: anIndex value: aValue\x0a\x09| tuple |\x0a\x09self doJQueryPrepend:'第', anIndex printString, '番目のフィボナッチ数: ', aValue printString.\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09tuple answer: aValue.\x0a\x09self tupleSpace write: tuple",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["doJQueryPrepend:", ",", "printString", "result", "n:", "answer:", "write:", "tupleSpace"]
}),
$globals.LindaFibWorker);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
var self=this;
var solver;
function $LindaFibWorker(){return $globals.LindaFibWorker||(typeof LindaFibWorker=="undefined"?nil:LindaFibWorker)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
solver=$recv($LindaFibWorker())._new();
$recv(solver)._lindaClient_($recv($LindaClient())._default());
$recv($recv(solver)._tupleSpace())._take_callback_($globals.HashedCollection._newFromPairs_(["type","fib"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(solver)._reduce_($recv($recv(t)._data())._at_("n"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{solver:solver},$globals.LindaFibWorker.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| solver |\x0a\x09solver := LindaFibWorker new.\x0a\x09solver lindaClient: (LindaClient default).\x0a\x09solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t |\x0a\x09\x09solver reduce: (t data at: 'n')]",
referencedClasses: ["LindaFibWorker", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "default", "take:callback:", "tupleSpace", "reduce:", "at:", "data"]
}),
$globals.LindaFibWorker.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFibWorker.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFibWorker.klass);


$core.addClass('LindaGyroMaster', $globals.LindaClientApp, ['workersTable', 'debugList'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroMaster.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09super augmentPage.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "dataOfWorkersTable",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._workersTable())._values())._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataOfWorkersTable",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataOfWorkersTable\x0a\x09^self workersTable values collect: [:e | e data]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "values", "workersTable", "data"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroMaster.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@viewModel"])._addAll_($globals.HashedCollection._newFromPairs_(["workers",$recv(ko)._observableArray_([])]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x09super setupViewModel.\x0a\x09viewModel addAll: #{\x0a\x09\x09#workers -> (ko observableArray: #())\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observableArray:"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
var tuple;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroMaster.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._inspect();
tuple=$recv($GyroTuple())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@debugList"]=$recv($OrderedCollection())._new();
$1=self["@watchId"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$recv($2)._cancel_(self["@watchId"]);
};
self["@watchId"]=$recv(self._tupleSpace())._watch_callback_(tuple,(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@debugList"])._add_(t);
self._workerAt_put_($recv(t)._fromAddress(),t);
return $recv($recv(self._viewModel())._at_("workers"))._value_(self._dataOfWorkersTable());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{tuple:tuple},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x09| tuple |\x0a\x09super startDemo.\x0a\x09self inspect.\x0a\x09tuple := GyroTuple new.\x0a\x09debugList := OrderedCollection new.\x0a\x09watchId ifNotNil: [self tupleSpace cancel: watchId].\x0a\x09watchId := self tupleSpace watch: tuple callback: [:err :t |\x0a\x09\x09debugList add: t.\x0a\x09\x09self workerAt: t fromAddress put: t.\x0a\x09\x09(self viewModel at: #workers) value: self dataOfWorkersTable.\x0a\x0a\x09\x09\x22self doJQueryPrepend: t asJSON printString.\x22\x0a\x09].",
referencedClasses: ["GyroTuple", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "inspect", "new", "ifNotNil:", "cancel:", "tupleSpace", "watch:callback:", "add:", "workerAt:put:", "fromAddress", "value:", "at:", "viewModel", "dataOfWorkersTable"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($GyroTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x09^self lindaClient tupleSpace: GyroTuple tupleSpaceName",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "workerAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._workersTable())._at_(aKey);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workerAt:",{aKey:aKey},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "workerAt: aKey\x0a\x09^self workersTable at: aKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "workersTable"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "workerAt:put:",
protocol: 'accessing',
fn: function (aKey,aWorker){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._workersTable())._at_put_(aKey,aWorker);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workerAt:put:",{aKey:aKey,aWorker:aWorker},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey", "aWorker"],
source: "workerAt: aKey put: aWorker\x0a\x09self workersTable at: aKey put: aWorker",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "workersTable"]
}),
$globals.LindaGyroMaster);

$core.addMethod(
$core.method({
selector: "workersTable",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@workersTable"];
if(($receiver = $1) == null || $receiver.isNil){
self["@workersTable"]=$globals.HashedCollection._newFromPairs_([]);
self["@workersTable"];
} else {
$1;
};
$2=self["@workersTable"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workersTable",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "workersTable\x0a\x09workersTable ifNil: [workersTable := #{}].\x0a\x09^workersTable",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LindaGyroMaster);



$core.addClass('LindaGyroWorker', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroWorker.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09super augmentPage.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "devicemotionHandler",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$9,$8,$7,$6,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(event)._acceleration();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["acceleration"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$3=$recv($4).__star((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$9=$recv(event)._acceleration();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["acceleration"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._y();
$7=$recv($8).__star((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
return self._gX_gY_gZ_($2,$6,$recv($recv($recv($recv(event)._acceleration())._z()).__star((100)))._rounded());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"devicemotionHandler",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "devicemotionHandler\x0a\x09^[:event |\x0a\x09\x09self\x0a\x0a\x09\x09\x09gX: (event acceleration x * 100) rounded\x0a\x09\x09\x09gY: (event acceleration y * 100) rounded\x0a\x09\x09\x09gZ: (event acceleration z * 100) rounded\x0a\x22\x0a\x09\x09\x09gX: (event accelerationIncludingGravity x * 10) rounded\x0a\x09\x09\x09gY: (event accelerationIncludingGravity y * 10) rounded\x0a\x09\x09\x09gZ: (event accelerationIncludingGravity z * 10) rounded\x0a\x22\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gX:gY:gZ:", "rounded", "*", "x", "acceleration", "y", "z"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gX"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gX\x0a\x09^(viewModel at: #gX) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gX"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gX: aValue\x0a\x09(viewModel at: #gX) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX:gY:gZ:",
protocol: 'updating',
fn: function (xValue,yValue,zValue){
var self=this;
var tuple;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$8,$7,$1,$9,$16,$15,$14,$13,$12,$11,$10;
$4=self._gX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gX"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__tild_eq(xValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["~="]=1;
//>>excludeEnd("ctx");
$6=self._gY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gY"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__tild_eq(yValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["~="]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__or($5);
$8=self._gZ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gZ"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__tild_eq(zValue);
$1=$recv($2).__or($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._gX_(xValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gX:"]=1;
//>>excludeEnd("ctx");
self._gY_(yValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gY:"]=1;
//>>excludeEnd("ctx");
self._gZ_(zValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gZ:"]=1;
//>>excludeEnd("ctx");
$9=$recv(self["@viewModel"])._at_("rotateYX");
$16=$recv(yValue)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$15=$recv($16)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$14="rotateX(".__comma($15);
$13=$recv($14).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$12=$recv($13).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$11=$recv($12).__comma($recv($recv(xValue)._negated())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$10=$recv($11).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($9)._value_($10);
tuple=$recv($GyroTuple())._new();
tuple;
$recv(tuple)._handleName_(self._handleName());
$recv(tuple)._gX_(self._gX());
$recv(tuple)._gY_(self._gY());
$recv(tuple)._gZ_(self._gZ());
$recv(self._tupleSpace())._write_(tuple);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:gY:gZ:",{xValue:xValue,yValue:yValue,zValue:zValue,tuple:tuple},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["xValue", "yValue", "zValue"],
source: "gX: xValue gY: yValue gZ: zValue\x0a\x09| tuple |\x0a\x09(self gX ~= xValue) | (self gY ~= yValue) | (self gZ ~= zValue)\x0a\x09\x09ifTrue: [\x0a\x0a\x09\x09\x09self gX: (xValue ).\x0a\x09\x09\x09self gY: (yValue ).\x0a\x09\x09\x09self gZ: (zValue ).\x0a\x0a\x09\x09\x09(viewModel at: #rotateYX) value: 'rotateX(', (yValue) negated printString, 'deg)',\x0a\x09\x09\x09\x09' rotateY(', (xValue) negated printString, 'deg)'.\x0a\x09\x09\x09tuple := GyroTuple new.\x0a\x09\x09\x09tuple handleName: self handleName.\x0a\x09\x09\x09tuple gX: self gX.\x0a\x09\x09\x09tuple gY: self gY.\x0a\x09\x09\x09tuple gZ: self gZ.\x0a\x09\x09\x09self tupleSpace write: tuple.\x0a\x09\x09]",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "|", "~=", "gX", "gY", "gZ", "gX:", "gY:", "gZ:", "value:", "at:", ",", "printString", "negated", "new", "handleName:", "handleName", "write:", "tupleSpace"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gY",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gY"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gY\x0a\x09^(viewModel at: #gY) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gY:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gY"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gY: aValue\x0a\x09(viewModel at: #gY) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gZ",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gZ"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gZ\x0a\x09^(viewModel at: #gZ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gZ:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gZ"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gZ: aValue\x0a\x09(viewModel at: #gZ) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("handleName"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName\x0a\x09^(viewModel at: #handleName ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "olddevicemotionHandler",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$6,$5,$4,$3,$7,$11,$10,$9,$8,$12,$13,$19,$18,$17,$16,$15,$14,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self["@viewModel"])._at_("gX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$6=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
$4=$recv($5)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$recv($2)._value_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$7=$recv(self["@viewModel"])._at_("gY");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$11=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._y();
$9=$recv($10)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$recv($7)._value_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$12=$recv(self["@viewModel"])._at_("gZ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$recv($12)._value_($recv($recv($recv($recv(event)._accelerationIncludingGravity())._z())._rounded()).__star((10)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
$13=$recv(self["@viewModel"])._at_("rotateYX");
$19=$recv(self._gY())._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$18="rotateX(".__comma($19);
$17=$recv($18).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$16=$recv($17).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$15=$recv($16).__comma($recv(self._gX())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($13)._value_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"olddevicemotionHandler",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "olddevicemotionHandler\x0a\x09^[:event |\x0a\x09\x09\x22(viewModel at: #accX) value: event acceleration x.\x0a\x09\x09(viewModel at: #accY) value: event acceleration y.\x0a\x09\x09(viewModel at: #accZ) value: event acceleration z.\x22\x0a\x0a\x09\x09(viewModel at: #gX) value: (event accelerationIncludingGravity x rounded) * 10.\x0a\x09\x09(viewModel at: #gY) value: (event accelerationIncludingGravity y rounded) * 10.\x0a\x09\x09(viewModel at: #gZ) value: (event accelerationIncludingGravity z rounded) * 10.\x0a\x0a\x09\x09\x22\x0a\x09\x09(viewModel at: #tiltLR) value: event rotationRate gamma rounded.\x0a\x09\x09(viewModel at: #tiltFB) value: event rotationRate beta rounded.\x0a\x09\x09(viewModel at: #webRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg) rotate3d(1,0,0, ', ((viewModel at: #tiltFB) value * -1) printString, 'deg)' .\x0a\x09\x09(viewModel at: #mozRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg)' .\x0a\x09\x09\x22\x0a\x09\x09(viewModel at: #rotateYX) value: 'rotateX(', (self gY) printString, 'deg)',\x0a\x09\x09' rotateY(', (self gX) printString, 'deg)'.\x0a\x0a\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "*", "rounded", "x", "accelerationIncludingGravity", "y", "z", ",", "printString", "gY", "gX"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "setupHandle",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._addEventListener_with_("devicemotion",self._devicemotionHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupHandle",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupHandle\x0a\x0a\x09window addEventListener: #devicemotion with: self devicemotionHandler.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addEventListener:with:", "devicemotionHandler"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$8,$14,$13,$12,$11,$10,$9,$7,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroWorker.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@viewModel"];
$3=$recv(ko)._observable_("handle name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
$4=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=2;
//>>excludeEnd("ctx");
$5=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=3;
//>>excludeEnd("ctx");
$6=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=4;
//>>excludeEnd("ctx");
$8=ko;
$14=(30)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$13="rotateX(".__comma($14);
$12=$recv($13).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__comma((30)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._observable_($9);
$2=$globals.HashedCollection._newFromPairs_(["handleName",$3,"gX",$4,"gY",$5,"gZ",$6,"rotateYX",$7]);
$recv($1)._addAll_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x0a\x09super setupViewModel.\x0a\x0a\x09viewModel addAll: #{\x0a\x09\x09#handleName -> (ko observable: 'handle name') .\x0a\x09\x09#gX -> (ko observable: 0) .\x0a\x09\x09#gY -> (ko observable: 0) .\x0a\x09\x09#gZ -> (ko observable: 0) .\x0a\x0a\x09\x09\x22\x0a\x09\x09#tiltLR -> (ko observable: 0).\x0a\x09\x09#tiltFB -> (ko observable: 0).\x0a\x09\x09#webRotate -> (ko observable: 'rotate(', (30) printString, 'deg) rotate3d(1,0,0, ', ((30) * -1) printString, 'deg)').\x0a\x09\x09#mozRotate -> (ko observable: 'rotate(', (30) printString, 'deg)').\x0a\x09\x09\x22\x0a\x0a\x09\x09#rotateYX -> (ko observable:\x0a\x09\x09'rotateX(', 30 printString, 'deg)',\x0a\x09\x09' rotateY(', 30 printString, 'deg)')\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observable:", ",", "printString"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroWorker.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._setupHandle();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x09super startDemo.\x0a\x09self setupHandle.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["startDemo", "setupHandle"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "tupeSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($GyroTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupeSpace",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupeSpace\x0a\x09^self lindaClient tupleSpace: GyroTuple tupleSpaceName",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($GyroTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x09^self lindaClient tupleSpace: GyroTuple tupleSpaceName",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaGyroWorker);



$core.addClass('LindaThermoController', $globals.LindaClientApp, ['workerList'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "airconOff",
protocol: 'action',
fn: function (){
var self=this;
var tuple,list;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._startDemo();
tuple=$recv($ThermoTuple())._airconCommand();
$recv(tuple)._airconOff();
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconOff",{tuple:tuple,list:list},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconOff\x0a\x09| tuple list |\x0a\x09self startDemo.\x0a\x09tuple := ThermoTuple airconCommand.\x0a\x09tuple airconOff.\x0a\x09self tupleSpace write: tuple.",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "airconCommand", "airconOff", "write:", "tupleSpace"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "airconOn",
protocol: 'action',
fn: function (){
var self=this;
var tuple,list;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._startDemo();
tuple=$recv($ThermoTuple())._airconCommand();
$recv(tuple)._airconOn();
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconOn",{tuple:tuple,list:list},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconOn\x0a\x09| tuple list |\x0a\x09self startDemo.\x0a\x09tuple := ThermoTuple airconCommand.\x0a\x09tuple airconOn.\x0a\x09self tupleSpace write: tuple.",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "airconCommand", "airconOn", "write:", "tupleSpace"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "airconTimer",
protocol: 'action',
fn: function (){
var self=this;
var tuple,list;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._startDemo();
tuple=$recv($ThermoTuple())._airconCommand();
$recv(tuple)._airconTimer();
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconTimer",{tuple:tuple,list:list},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconTimer\x0a\x09| tuple list |\x0a\x09self startDemo.\x0a\x09tuple := ThermoTuple airconCommand.\x0a\x09tuple airconTimer.\x0a\x09self tupleSpace write: tuple.",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "airconCommand", "airconTimer", "write:", "tupleSpace"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaThermoController.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1="#airconOn"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._airconOn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$2="#airconOff"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._airconOff();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=2;
//>>excludeEnd("ctx");
$recv("#thermoQuery"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._thermoQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09super augmentPage.\x0a\x09'#airconOn' asJQuery click: [ self airconOn ].\x0a\x09'#airconOff' asJQuery click: [ self airconOff ].\x0a\x09'#thermoQuery' asJQuery click: [ self thermoQuery ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "click:", "asJQuery", "airconOn", "airconOff", "thermoQuery"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "dataOfWorkerList",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._workerList())._collect_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataOfWorkerList",{},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataOfWorkerList\x0a\x09^self workerList collect: [:e | e data]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "workerList", "data"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaThermoController.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self["@viewModel"])._addAll_($globals.HashedCollection._newFromPairs_(["workers",$recv(ko)._observableArray_([])]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x09super setupViewModel.\x0a\x09viewModel addAll: #{\x0a\x09\x09#workers -> (ko observableArray: #())\x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observableArray:"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "startDemo",
protocol: 'action',
fn: function (){
var self=this;
var tuple,log;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaThermoController.superclass.fn.prototype._startDemo.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
tuple=$recv($ThermoTuple())._new();
$1=self["@watchId"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$recv($2)._cancel_(self["@watchId"]);
};
self["@watchId"]=$recv(self._tupleSpace())._watch_callback_(tuple,(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = t) == null || $receiver.isNil){
return t;
} else {
$recv(self._workerList())._addFirst_(t);
return $recv($recv(self._viewModel())._at_("workers"))._value_(self._dataOfWorkerList());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startDemo",{tuple:tuple,log:log},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startDemo\x0a\x09| tuple log |\x0a\x09super startDemo.\x0a\x09tuple := ThermoTuple new.\x0a\x0a\x09watchId ifNotNil: [self tupleSpace cancel: watchId].\x0a\x09watchId := self tupleSpace watch: tuple callback: [:err :t |\x0a\x09\x09t ifNotNil: [\x0a\x09\x09\x09self workerList addFirst: t.\x0a\x09\x09\x09(self viewModel at: #workers) value: self dataOfWorkerList. ]\x0a\x09].",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "new", "ifNotNil:", "cancel:", "tupleSpace", "watch:callback:", "addFirst:", "workerList", "value:", "at:", "viewModel", "dataOfWorkerList"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "thermoQuery",
protocol: 'action',
fn: function (){
var self=this;
var tuple,list;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._startDemo();
tuple=$recv($ThermoTuple())._airconCommand();
$recv(tuple)._airconQuery();
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"thermoQuery",{tuple:tuple,list:list},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thermoQuery\x0a\x09| tuple list |\x0a\x09self startDemo.\x0a\x09tuple := ThermoTuple airconCommand.\x0a\x09tuple airconQuery.\x0a\x09self tupleSpace write: tuple.",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["startDemo", "airconCommand", "airconQuery", "write:", "tupleSpace"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $ThermoTuple(){return $globals.ThermoTuple||(typeof ThermoTuple=="undefined"?nil:ThermoTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($ThermoTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x09^self lindaClient tupleSpace: ThermoTuple tupleSpaceName",
referencedClasses: ["ThermoTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaThermoController);

$core.addMethod(
$core.method({
selector: "workerList",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@workerList"];
if(($receiver = $1) == null || $receiver.isNil){
self["@workerList"]=[];
self["@workerList"];
} else {
$1;
};
$2=self["@workerList"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"workerList",{},$globals.LindaThermoController)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "workerList\x0a\x09workerList ifNil: [workerList := #()].\x0a\x09^workerList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LindaThermoController);



$core.addClass('PrimeTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "beFixed",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._isFixed_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beFixed",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beFixed\x0a\x0a\x09self isFixed: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isFixed:"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "beNotFixed",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._isFixed_(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beNotFixed",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beNotFixed\x0a\x0a\x09self isFixed: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isFixed:"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "beNotPrime",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._isPrime_(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beNotPrime",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beNotPrime\x0a\x0a\x09self isPrime: false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isPrime:"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "i",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._iKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"i",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "i\x0a\x0a\x09^self data at: self class iKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "iKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "i:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._iKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"i:",{aValue:aValue},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "i: aValue\x0a\x0a\x09self data at: self class iKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "iKey", "class"]
}),
$globals.PrimeTuple);

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
$globals.PrimeTuple.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._isFixed_(false);
self._isPrime_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self isFixed: false.\x0a\x09self isPrime: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "isFixed:", "isPrime:"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "isFixed",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._isFixedKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFixed",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFixed\x0a\x0a\x09^self data at: self class isFixedKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "isFixedKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "isFixed:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._isFixedKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFixed:",{aValue:aValue},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "isFixed: aValue\x0a\x0a\x09self data at: self class isFixedKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "isFixedKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "isPrime",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._isPrimeKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPrime",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPrime\x0a\x0a\x09^self data at: self class isPrimeKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "isPrimeKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "isPrime:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._isPrimeKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isPrime:",{aValue:aValue},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "isPrime: aValue\x0a\x0a\x09self data at: self class isPrimeKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "isPrimeKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "max",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._maxKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max",{},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "max\x0a\x0a\x09^self data at: self class maxKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "maxKey", "class"]
}),
$globals.PrimeTuple);

$core.addMethod(
$core.method({
selector: "max:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._maxKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"max:",{aValue:aValue},$globals.PrimeTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "max: aValue\x0a\x0a\x09self data at: self class maxKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "maxKey", "class"]
}),
$globals.PrimeTuple);


$core.addMethod(
$core.method({
selector: "beMax",
protocol: 'instance create',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beMax",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "beMax:",
protocol: 'instance create',
fn: function (anInteger){
var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
self._max_(anInteger);
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beMax:",{anInteger:anInteger,tuple:tuple},$globals.PrimeTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "beMax: anInteger\x0a\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09self max: anInteger.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "max:"]
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "i:",
protocol: 'instance create',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._i_(anInteger);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"i:",{anInteger:anInteger},$globals.PrimeTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "i: anInteger\x0a\x09\x22PrimeTuple i: 3\x22\x0a\x09^self new i: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["i:", "new"]
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "iKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "i";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iKey\x0a\x09^'i'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "isFixedKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "isFiexed";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFixedKey\x0a\x09^'isFiexed'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "isPrimeKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "isPrime";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPrimeKey\x0a\x09^'isPrime'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "maxKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "max";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxKey\x0a\x09^'max'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "notFixed",
protocol: 'instance create',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"notFixed",{},$globals.PrimeTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "notFixed\x0a\x09^self new",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.PrimeTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
var self=this;
return "sieve";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'sieve'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PrimeTuple.klass);


$core.addClass('ThermoTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "aircon",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_($recv(self._class())._airconKey(),(function(){
return "N/A";

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aircon",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "aircon\x0a\x0a\x09^self data at: self class airconKey ifAbsent: ['N/A']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "airconKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "aircon:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._airconKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"aircon:",{aValue:aValue},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "aircon: aValue\x0a\x0a\x09self data at: self class airconKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "airconKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "airconOff",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._aircon_("off");
self._time_("エアコン消せ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconOff",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconOff\x0a\x0a\x09self aircon: 'off'.\x0a\x09self time: 'エアコン消せ'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["aircon:", "time:"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "airconOn",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._aircon_("on");
self._time_("エアコン点けれ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconOn",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconOn\x0a\x0a\x09self aircon: 'on'.\x0a\x09self time: 'エアコン点けれ'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["aircon:", "time:"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "airconQuery",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._aircon_("query");
self._time_("何℃か教えれ");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconQuery",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconQuery\x0a\x0a\x09self aircon: 'query'.\x0a\x09self time: '何℃か教えれ'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["aircon:", "time:"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "airconTimer",
protocol: 'status changing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._aircon_("timer");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconTimer",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconTimer\x0a\x0a\x09self aircon: 'timer'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["aircon:"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "celsius",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_($recv(self._class())._celsiusKey(),(function(){
return "N/A";

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"celsius",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "celsius\x0a\x0a\x09^self data at: self class celsiusKey ifAbsent: ['N/A']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "celsiusKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "celsius:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._celsiusKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"celsius:",{aValue:aValue},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "celsius: aValue\x0a\x0a\x09self data at: self class celsiusKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "celsiusKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "initForAircon",
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
$globals.ThermoTuple.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._sensor_("");
self._celsius_((1000));
self._time_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initForAircon",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initForAircon\x0a\x09super initialize.\x0a\x0a\x09self sensor: ''.\x0a\x09self celsius: 1000.\x0a\x09self time: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "sensor:", "celsius:", "time:"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "sensor",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_($recv(self._class())._sensorKey(),(function(){
return "N/A";

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sensor",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sensor\x0a\x0a\x09^self data at: self class sensorKey ifAbsent: ['N/A']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "sensorKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "sensor:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._sensorKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sensor:",{aValue:aValue},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "sensor: aValue\x0a\x0a\x09self data at: self class sensorKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "sensorKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "time",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_ifAbsent_($recv(self._class())._timeKey(),(function(){
return "N/A";

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time",{},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x0a\x09^self data at: self class timeKey ifAbsent: ['N/A']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "data", "timeKey", "class"]
}),
$globals.ThermoTuple);

$core.addMethod(
$core.method({
selector: "time:",
protocol: 'accessing',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._timeKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"time:",{aValue:aValue},$globals.ThermoTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "time: aValue\x0a\x0a\x09self data at: self class timeKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "timeKey", "class"]
}),
$globals.ThermoTuple);


$core.addMethod(
$core.method({
selector: "airconCommand",
protocol: 'accessor key',
fn: function (){
var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
$recv(tuple)._initForAircon();
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"airconCommand",{tuple:tuple},$globals.ThermoTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconCommand\x0a\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09tuple initForAircon.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initForAircon"]
}),
$globals.ThermoTuple.klass);

$core.addMethod(
$core.method({
selector: "airconKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "aircon";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "airconKey\x0a\x09^'aircon'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThermoTuple.klass);

$core.addMethod(
$core.method({
selector: "celsiusKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "celsius";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "celsiusKey\x0a\x09^'celsius'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThermoTuple.klass);

$core.addMethod(
$core.method({
selector: "sensorKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "sensor";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sensorKey\x0a\x09^'sensor'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThermoTuple.klass);

$core.addMethod(
$core.method({
selector: "timeKey",
protocol: 'accessor key',
fn: function (){
var self=this;
return "time";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "timeKey\x0a\x09^'time'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThermoTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
var self=this;
return "sensors";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'sensors'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ThermoTuple.klass);

});
