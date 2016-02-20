define("silk/Silk-Tests", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery"
//>>excludeEnd("imports");
, "amber/domite/DOMite-Tests", "amber_core/SUnit"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Silk-Tests');
$core.packages["Silk-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Silk-Tests"].imports = ["amber/jquery/Wrappers-JQuery"];
$core.packages["Silk-Tests"].transport = {"type":"amd","amdNamespace":"silk"};

$core.addClass('SilkInheritedTest', $globals.DOMiteTest, [], 'Silk-Tests');
$core.addMethod(
$core.method({
selector: "testedClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Silk(){return $globals.Silk||(typeof Silk=="undefined"?nil:Silk)}
return $Silk();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testedClass\x0a\x09^ Silk",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SilkInheritedTest);



$core.addClass('SilkTest', $globals.TestCase, ['fixtureDiv'], 'Silk-Tests');
$core.addMethod(
$core.method({
selector: "assertBodyEndsWith:",
protocol: 'fixture',
fn: function (aString){
var self=this;
var sanitizedBody,sanitizedAssertion;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
sanitizedBody=$recv($recv($recv(document)._body())._innerHTML())._replace_with_("\x5cs*","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
sanitizedAssertion=$recv(aString)._replace_with_("\x5cs*","");
$2=$recv(sanitizedBody)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(sanitizedAssertion)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__gt_eq($3);
self._assert_($1);
self._assert_equals_($recv(sanitizedBody)._last_($recv(sanitizedAssertion)._size()),sanitizedAssertion);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertBodyEndsWith:",{aString:aString,sanitizedBody:sanitizedBody,sanitizedAssertion:sanitizedAssertion},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertBodyEndsWith: aString\x0a\x09| sanitizedBody sanitizedAssertion |\x0a\x09sanitizedBody := document body innerHTML replace: '\x5cs*' with: ''.\x0a\x09sanitizedAssertion := aString replace: '\x5cs*' with: ''.\x0a\x09self assert: sanitizedBody size >= sanitizedAssertion size.\x0a\x09self\x0a\x09\x09assert: (sanitizedBody last: sanitizedAssertion size)\x0a\x09\x09equals: sanitizedAssertion",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "innerHTML", "body", "assert:", ">=", "size", "assert:equals:", "last:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "assertBodyEndsWithOneOf:",
protocol: 'fixture',
fn: function (aStringArray){
var self=this;
var sanitizedBody,err;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5,$receiver;
var $early={};
try {
sanitizedBody=$recv($recv($recv(document)._body())._innerHTML())._replace_with_("\x5cs*","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
$recv(aStringArray)._do_((function(aString){
var sanitizedAssertion;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
sanitizedAssertion=$recv(aString)._replace_with_("\x5cs*","");
sanitizedAssertion;
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(sanitizedBody)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$3=$recv(sanitizedAssertion)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__gt_eq($3);
self._assert_($1);
$4=self._assert_equals_($recv(sanitizedBody)._last_($recv(sanitizedAssertion)._size()),sanitizedAssertion);
$4;
throw $early=[self];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(e){
err=e;
return err;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({aString:aString,sanitizedAssertion:sanitizedAssertion},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$5=err;
if(($receiver = $5) == null || $receiver.isNil){
$5;
} else {
$recv(err)._signal();
};
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertBodyEndsWithOneOf:",{aStringArray:aStringArray,sanitizedBody:sanitizedBody,err:err},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringArray"],
source: "assertBodyEndsWithOneOf: aStringArray\x0a\x09| sanitizedBody err |\x0a\x09sanitizedBody := document body innerHTML replace: '\x5cs*' with: ''.\x0a\x09aStringArray do: [ :aString |\x0a\x09\x09| sanitizedAssertion |\x0a\x09\x09sanitizedAssertion := aString replace: '\x5cs*' with: ''.\x0a\x09\x09[ self\x0a\x09\x09\x09assert: sanitizedBody size >= sanitizedAssertion size;\x0a\x09\x09\x09assert: (sanitizedBody last: sanitizedAssertion size)\x0a\x09\x09\x09equals: sanitizedAssertion. ^ self ] on: Error do: [ :e | err := e ]].\x0a\x09err ifNotNil: [ err signal ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "innerHTML", "body", "do:", "on:do:", "assert:", ">=", "size", "assert:equals:", "last:", "ifNotNil:", "signal"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'fixture',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@fixtureDiv"]=$recv(document)._createElement_("div");
$recv($recv(document)._body())._appendChild_(self["@fixtureDiv"]);
$recv(self["@fixtureDiv"])._setAttribute_to_("id","fixture");
$recv(self["@fixtureDiv"])._innerHTML_("sentinel");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09fixtureDiv := document createElement: 'div'.\x0a\x09document body appendChild: fixtureDiv.\x0a\x09fixtureDiv setAttribute: 'id' to: 'fixture'.\x0a\x09fixtureDiv innerHTML: 'sentinel'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElement:", "appendChild:", "body", "setAttribute:to:", "innerHTML:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "tearDown",
protocol: 'fixture',
fn: function (){
var self=this;
var lastChild;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(document)._body();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["body"]=1;
//>>excludeEnd("ctx");
lastChild=$recv($1)._lastChild();
self._assert_equals_(lastChild,self["@fixtureDiv"]);
$recv($recv(document)._body())._removeChild_(lastChild);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tearDown",{lastChild:lastChild},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09| lastChild |\x0a\x09lastChild := document body lastChild.\x0a\x09self assert: lastChild equals: fixtureDiv.\x0a\x09document body removeChild: lastChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lastChild", "body", "assert:equals:", "removeChild:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "testInsertTable",
protocol: 'testing',
fn: function (){
var self=this;
var d,tbl;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
d="html body div#fixture"._asSilk();
tbl=$recv(d)._TABLE();
$1=$recv(tbl)._TR();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TR"]=1;
//>>excludeEnd("ctx");
$recv($1)._TD_("A");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$recv($1)._TD_("B");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=2;
//>>excludeEnd("ctx");
$2=$recv($1)._TD_("C");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=3;
//>>excludeEnd("ctx");
$3=$recv(tbl)._TR();
$recv($3)._TD_("D");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=4;
//>>excludeEnd("ctx");
$recv($3)._TD_("E");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=5;
//>>excludeEnd("ctx");
$4=$recv($3)._TD_("F");
self._assertBodyEndsWith_(">sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertTable",{d:d,tbl:tbl},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertTable\x0a\x0a\x09| d tbl  |\x0a\x0a\x09d := 'html body div#fixture' asSilk.\x0a\x0a\x09tbl := d TABLE.\x0a\x0a\x09tbl TR\x0a\x09\x09TD: 'A';\x0a\x09\x09TD: 'B';\x0a\x09\x09TD: 'C'.\x0a\x09\x0a\x09tbl TR\x0a\x09\x09TD: 'D';\x0a\x09\x09TD: 'E';\x0a\x09\x09TD: 'F'.\x0a\x09\x0a\x09self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSilk", "TABLE", "TD:", "TR", "assertBodyEndsWith:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "testInsertTable2",
protocol: 'testing',
fn: function (){
var self=this;
var d,tbl;
function $Silk(){return $globals.Silk||(typeof Silk=="undefined"?nil:Silk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$6,$3,$8,$10,$11,$9,$7;
d="html body div#fixture"._asSilk();
tbl=$recv(d)._TABLE();
$1=tbl;
$2=$1;
$4=$recv($Silk())._TD_("A");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=1;
//>>excludeEnd("ctx");
$5=$recv($Silk())._TD_("B");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=2;
//>>excludeEnd("ctx");
$6=$recv($Silk())._TD_("C");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=3;
//>>excludeEnd("ctx");
$3=[$4,$5,$6];
$recv($2)._TR_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TR:"]=1;
//>>excludeEnd("ctx");
$8=$1;
$10=$recv($Silk())._TD_("D");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=4;
//>>excludeEnd("ctx");
$11=$recv($Silk())._TD_("E");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["TD:"]=5;
//>>excludeEnd("ctx");
$9=[$10,$11,$recv($Silk())._TD_("F")];
$7=$recv($8)._TR_($9);
self._assertBodyEndsWith_(">sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertTable2",{d:d,tbl:tbl},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertTable2\x0a\x0a\x09| d tbl  |\x0a\x0a\x09d := 'html body div#fixture' asSilk.\x0a\x0a\x09tbl := d TABLE.\x0a\x0a\x09tbl TR: {\x0a\x09\x09Silk TD: 'A'.\x0a\x09\x09Silk TD: 'B'.\x0a\x09\x09Silk TD: 'C'};\x0a\x09\x09TR: {\x0a\x09\x09Silk TD: 'D'.\x0a\x09\x09Silk TD: 'E'.\x0a\x09\x09Silk TD: 'F'}.\x0a\x09\x0a\x09self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'",
referencedClasses: ["Silk"],
//>>excludeEnd("ide");
messageSends: ["asSilk", "TABLE", "TR:", "TD:", "assertBodyEndsWith:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "testNestedDIVsWithAttributes",
protocol: 'testing',
fn: function (){
var self=this;
var s;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$6,$7,$5,$9,$10,$8;
s="#fixture"._asSilk();
$2=$recv(s)._DIV();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV"]=1;
//>>excludeEnd("ctx");
$3="id".__minus_gt("container");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt_lt($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$4="class".__minus_gt("mySilkContainerClass");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=2;
//>>excludeEnd("ctx");
s=$recv($1).__lt_lt($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$6=$recv(s)._DIV();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["DIV"]=2;
//>>excludeEnd("ctx");
$7="id".__minus_gt("contentarea");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__lt_lt($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$recv($5).__lt_lt("here comes the content");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$9=$recv(s)._DIV();
$10="id".__minus_gt("toolbar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["->"]=4;
//>>excludeEnd("ctx");
$8=$recv($9).__lt_lt($10);
s=$recv($8).__lt_lt("class".__minus_gt("myToolbarClass"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$recv($recv(s)._BUTTON_("do something"))._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Transcript())._show_("button pressed");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._assertBodyEndsWithOneOf_([">sentinel<div class=\x22mySilkContainerClass\x22 id=\x22container\x22><div id=\x22contentarea\x22>here comes the content</div><div class=\x22myToolbarClass\x22 id=\x22toolbar\x22><button>do something</button></div></div></div>", ">sentinel<div id=\x22container\x22 class=\x22mySilkContainerClass\x22><div id=\x22contentarea\x22>here comes the content</div><div id=\x22toolbar\x22 class=\x22myToolbarClass\x22><button>do something</button></div></div></div>"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNestedDIVsWithAttributes",{s:s},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNestedDIVsWithAttributes\x0a \x22demonstrates how DIVs are nested and given attributes\x22\x0a\x09| s |\x0a\x0a\x09s := '#fixture' asSilk.\x0a\x09\x0a\x09s := s DIV << ('id' -> 'container') << ('class' -> 'mySilkContainerClass').\x0a\x09s DIV << ('id' -> 'contentarea') << 'here comes the content'.\x0a\x09s := s DIV << ('id' -> 'toolbar') << ('class' -> 'myToolbarClass').\x0a\x09(s BUTTON: 'do something') on: 'click' bind: [Transcript show: 'button pressed'].\x0a\x09\x0a\x09self assertBodyEndsWithOneOf: #(\x0a\x09\x09'>sentinel<div class=\x22mySilkContainerClass\x22 id=\x22container\x22><div id=\x22contentarea\x22>here comes the content</div><div class=\x22myToolbarClass\x22 id=\x22toolbar\x22><button>do something</button></div></div></div>'\x0a\x09\x09'>sentinel<div id=\x22container\x22 class=\x22mySilkContainerClass\x22><div id=\x22contentarea\x22>here comes the content</div><div id=\x22toolbar\x22 class=\x22myToolbarClass\x22><button>do something</button></div></div></div>'\x0a\x09)",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["asSilk", "<<", "DIV", "->", "on:bind:", "BUTTON:", "show:", "assertBodyEndsWithOneOf:"]
}),
$globals.SilkTest);

$core.addMethod(
$core.method({
selector: "testOnClickEvent",
protocol: 'testing',
fn: function (){
var self=this;
var s,para;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
s="#fixture"._asSilk();
para=$recv(s)._P_("DOM");
self._timeout_((100));
$recv(self._async_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(para)._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv("#fixture p"._asJQuery())._trigger_("click");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._fork();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testOnClickEvent",{s:s,para:para},$globals.SilkTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testOnClickEvent\x0a\x09\x22#on:bind\x22\x0a\x09\x0a\x09| s para |\x0a\x0a\x09s := '#fixture' asSilk.\x0a\x09para := s P: 'DOM'. \x0a\x0a\x09self timeout: 100.\x0a\x0a\x09(self async: [para on: 'click' bind:\x0a\x09\x09\x09[\x22Test successful\x22 self finished].\x0a\x0a\x09\x09'#fixture p' asJQuery trigger: 'click'.\x0a\x09\x09]) fork",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asSilk", "P:", "timeout:", "fork", "async:", "on:bind:", "finished", "trigger:", "asJQuery"]
}),
$globals.SilkTest);


});
