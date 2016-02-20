define("domite/DOMite-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('DOMite-Tests');
$core.packages["DOMite-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["DOMite-Tests"].transport = {"type":"amd","amdNamespace":"domite"};

$core.addClass('DOMiteTest', $globals.TestCase, ['fixtureDiv'], 'DOMite-Tests');
$core.addMethod(
$core.method({
selector: "assertBodyEndsWith:",
protocol: 'testing',
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
}, function($ctx1) {$ctx1.fill(self,"assertBodyEndsWith:",{aString:aString,sanitizedBody:sanitizedBody,sanitizedAssertion:sanitizedAssertion},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertBodyEndsWith: aString\x0a\x09| sanitizedBody sanitizedAssertion |\x0a\x09sanitizedBody := document body innerHTML replace: '\x5cs*' with: ''.\x0a\x09sanitizedAssertion := aString replace: '\x5cs*' with: ''.\x0a\x09self assert: sanitizedBody size >= sanitizedAssertion size.\x0a\x09self\x0a\x09\x09assert: (sanitizedBody last: sanitizedAssertion size)\x0a\x09\x09equals: sanitizedAssertion",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "innerHTML", "body", "assert:", ">=", "size", "assert:equals:", "last:"]
}),
$globals.DOMiteTest);

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
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09fixtureDiv := document createElement: 'div'.\x0a\x09document body appendChild: fixtureDiv.\x0a\x09fixtureDiv setAttribute: 'id' to: 'fixture'.\x0a\x09fixtureDiv innerHTML: 'sentinel'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElement:", "appendChild:", "body", "setAttribute:to:", "innerHTML:"]
}),
$globals.DOMiteTest);

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
}, function($ctx1) {$ctx1.fill(self,"tearDown",{lastChild:lastChild},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tearDown\x0a\x09| lastChild |\x0a\x09lastChild := document body lastChild.\x0a\x09self assert: lastChild equals: fixtureDiv.\x0a\x09document body removeChild: lastChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lastChild", "body", "assert:equals:", "removeChild:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testDefaultInsertElement",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
$recv($1).__lt_lt($recv(self._testedClass())._newElement_("p"));
self._assertBodyEndsWith_("<p></p>");
$3=$recv(document)._body();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["body"]=1;
//>>excludeEnd("ctx");
$recv($3)._removeChild_($recv($recv(document)._body())._lastChild());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDefaultInsertElement",{},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDefaultInsertElement\x0a\x0a\x09self testedClass new << (self testedClass newElement: 'p').\x0a\x09self assertBodyEndsWith: '<p></p>'.\x0a\x09document body removeChild: document body lastChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<", "new", "testedClass", "newElement:", "assertBodyEndsWith:", "removeChild:", "body", "lastChild"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testDefaultInsertString",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(self._testedClass())._new()).__lt_lt("a-foo--in-a-bar");
self._assertBodyEndsWith_("a-foo--in-a-bar");
$1=$recv(document)._body();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["body"]=1;
//>>excludeEnd("ctx");
$recv($1)._removeChild_($recv($recv(document)._body())._lastChild());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDefaultInsertString",{},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDefaultInsertString\x0a\x09self testedClass new << 'a-foo--in-a-bar'.\x0a\x09self assertBodyEndsWith: 'a-foo--in-a-bar'.\x0a\x09document body removeChild: document body lastChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<", "new", "testedClass", "assertBodyEndsWith:", "removeChild:", "body", "lastChild"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testDefaultInsertStringInFragment",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._new();
$recv($1).__lt_lt($recv($recv(self._testedClass())._newStream()).__lt_lt("a-foo--in-a-bar"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
self._assertBodyEndsWith_("a-foo--in-a-bar");
$3=$recv(document)._body();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["body"]=1;
//>>excludeEnd("ctx");
$recv($3)._removeChild_($recv($recv(document)._body())._lastChild());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testDefaultInsertStringInFragment",{},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testDefaultInsertStringInFragment\x0a\x09self testedClass new << (self testedClass newStream << 'a-foo--in-a-bar').\x0a\x09self assertBodyEndsWith: 'a-foo--in-a-bar'.\x0a\x09document body removeChild: document body lastChild",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["<<", "new", "testedClass", "newStream", "assertBodyEndsWith:", "removeChild:", "body", "lastChild"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testFromBadSelectorIsInvalid",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("#goo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv(d)._isInvalid();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isInvalid"]=1;
//>>excludeEnd("ctx");
self._assert_($2);
$3=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
d=$recv($3)._at_("body");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$4=$recv(d)._isInvalid();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["isInvalid"]=2;
//>>excludeEnd("ctx");
self._deny_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["deny:"]=1;
//>>excludeEnd("ctx");
d=$recv(self._testedClass())._at_("html body div#fixture");
self._deny_($recv(d)._isInvalid());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testFromBadSelectorIsInvalid",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testFromBadSelectorIsInvalid\x0a\x09| d |\x0a\x09d := self testedClass at: '#goo'.\x0a\x09self assert: d isInvalid.\x0a\x09d := self testedClass at: 'body'.\x0a\x09self deny: d isInvalid.\x0a\x09d := self testedClass at: 'html body div#fixture'.\x0a\x09self deny: d isInvalid",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "assert:", "isInvalid", "deny:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertDomNode",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
d=$recv(self._testedClass())._fromElement_(self["@fixtureDiv"]);
$recv(d).__lt_lt($recv(document)._createElement_("pre"));
self._assertBodyEndsWith_(">sentinel<pre></pre></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertDomNode",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertDomNode\x0a\x09| d |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09d << (document createElement: 'pre').\x0a\x09self assertBodyEndsWith: '>sentinel<pre></pre></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "<<", "createElement:", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertDomNodeInFragment",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("#fixture");
$recv(d).__lt_lt($recv($recv(self._testedClass())._newStream()).__lt_lt($recv(document)._createElement_("script")));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
self._assertBodyEndsWith_(">sentinel<script></script></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertDomNodeInFragment",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertDomNodeInFragment\x0a\x09| d |\x0a\x09d := self testedClass at: '#fixture'.\x0a\x09d << (self testedClass newStream << (document createElement: 'script')).\x0a\x09self assertBodyEndsWith: '>sentinel<script></script></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "<<", "newStream", "createElement:", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertElement",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("html body div#fixture");
$recv(d).__lt_lt($recv(self._testedClass())._newElement_("p"));
self._assertBodyEndsWith_(">sentinel<p></p></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertElement",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertElement\x0a\x09| d |\x0a\x09d := self testedClass at: 'html body div#fixture'.\x0a\x09d << (self testedClass newElement: 'p').\x0a\x09self assertBodyEndsWith: '>sentinel<p></p></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "<<", "newElement:", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertElementTwoLevel",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._fromElement_(self["@fixtureDiv"]);
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$recv(d).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
s=$recv(self._testedClass())._newElement_("span");
$recv(p).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(s).__lt_lt("dom-mite");
self._assertBodyEndsWith_(">sentinel<p><span>dom-mite</span></p></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertElementTwoLevel",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertElementTwoLevel\x0a\x09| d p s |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << p.\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09p << s.\x0a\x09s << 'dom-mite'.\x0a\x09self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "newElement:", "<<", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertElementTwoLevelViaFragments",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$4,$7,$8,$11,$10,$9;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("#fixture");
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$3=d;
$6=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($3).__lt_lt($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$7=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=4;
//>>excludeEnd("ctx");
s=$recv($7)._newElement_("span");
$8=p;
$11=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=5;
//>>excludeEnd("ctx");
$10=$recv($11)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$recv($8).__lt_lt($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$recv(s).__lt_lt($recv($recv(self._testedClass())._newStream()).__lt_lt("dom-mite"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
self._assertBodyEndsWith_(">sentinel<p><span>dom-mite</span></p></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertElementTwoLevelViaFragments",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertElementTwoLevelViaFragments\x0a\x09| d p s |\x0a\x09d := self testedClass at: '#fixture'.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << (self testedClass newStream << p).\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09p << (self testedClass newStream << s).\x0a\x09s << (self testedClass newStream << 'dom-mite').\x0a\x09self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "newElement:", "<<", "newStream", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertElementTwoLevelViaTwoLevelFragments",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$9,$8,$7,$4,$10,$11,$14,$13,$17,$16,$15,$12,$18,$21,$20,$19;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._fromElement_(self["@fixtureDiv"]);
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$3=d;
$6=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=1;
//>>excludeEnd("ctx");
$9=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=4;
//>>excludeEnd("ctx");
$8=$recv($9)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$4=$recv($5).__lt_lt($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($3).__lt_lt($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$10=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=5;
//>>excludeEnd("ctx");
s=$recv($10)._newElement_("span");
$11=p;
$14=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=6;
//>>excludeEnd("ctx");
$13=$recv($14)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=3;
//>>excludeEnd("ctx");
$17=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=7;
//>>excludeEnd("ctx");
$16=$recv($17)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=4;
//>>excludeEnd("ctx");
$15=$recv($16).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=6;
//>>excludeEnd("ctx");
$12=$recv($13).__lt_lt($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$recv($11).__lt_lt($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$18=s;
$21=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=8;
//>>excludeEnd("ctx");
$20=$recv($21)._newStream();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newStream"]=5;
//>>excludeEnd("ctx");
$19=$recv($20).__lt_lt($recv($recv(self._testedClass())._newStream()).__lt_lt("dom-mite"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=8;
//>>excludeEnd("ctx");
$recv($18).__lt_lt($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=7;
//>>excludeEnd("ctx");
self._assertBodyEndsWith_(">sentinel<p><span>dom-mite</span></p></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertElementTwoLevelViaTwoLevelFragments",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertElementTwoLevelViaTwoLevelFragments\x0a\x09| d p s |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << (self testedClass newStream << (self testedClass newStream << p)).\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09p << (self testedClass newStream << (self testedClass newStream << s)).\x0a\x09s << (self testedClass newStream << (self testedClass newStream << 'dom-mite')).\x0a\x09self assertBodyEndsWith: '>sentinel<p><span>dom-mite</span></p></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "newElement:", "<<", "newStream", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertString",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
d=$recv(self._testedClass())._fromElement_(self["@fixtureDiv"]);
$recv(d).__lt_lt("a-foo--in-a-bar");
self._assertBodyEndsWith_(">sentinela-foo--in-a-bar</div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertString",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertString\x0a\x09| d |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09d << 'a-foo--in-a-bar'.\x0a\x09self assertBodyEndsWith: '>sentinela-foo--in-a-bar</div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "<<", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertStringInFragment",
protocol: 'testing',
fn: function (){
var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("#fixture");
$recv(d).__lt_lt($recv($recv(self._testedClass())._newStream()).__lt_lt("a-foo--in-a-bar"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
self._assertBodyEndsWith_(">sentinela-foo--in-a-bar</div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertStringInFragment",{d:d},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertStringInFragment\x0a\x09| d |\x0a\x09d := self testedClass at: '#fixture'.\x0a\x09d << (self testedClass newStream << 'a-foo--in-a-bar').\x0a\x09self assertBodyEndsWith: '>sentinela-foo--in-a-bar</div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "<<", "newStream", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testInsertTable",
protocol: 'testing',
fn: function (){
var self=this;
var d,tbl,tr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$7,$6,$5,$8,$11,$10,$9,$12,$15,$14,$13,$16,$17,$20,$19,$18,$21,$24,$23,$22,$25,$26;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("html body div#fixture");
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
tbl=$recv($2)._newElement_("table");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$3=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=3;
//>>excludeEnd("ctx");
tr=$recv($3)._newElement_("tr");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=2;
//>>excludeEnd("ctx");
$4=tr;
$7=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=4;
//>>excludeEnd("ctx");
$6=$recv($7)._newElement_("td");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=3;
//>>excludeEnd("ctx");
$5=$recv($6).__lt_lt("A");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv($4).__lt_lt($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
$8=tr;
$11=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=5;
//>>excludeEnd("ctx");
$10=$recv($11)._newElement_("td");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=4;
//>>excludeEnd("ctx");
$9=$recv($10).__lt_lt("B");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=4;
//>>excludeEnd("ctx");
$recv($8).__lt_lt($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=3;
//>>excludeEnd("ctx");
$12=tr;
$15=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=6;
//>>excludeEnd("ctx");
$14=$recv($15)._newElement_("td");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=5;
//>>excludeEnd("ctx");
$13=$recv($14).__lt_lt("C");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=6;
//>>excludeEnd("ctx");
$recv($12).__lt_lt($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=5;
//>>excludeEnd("ctx");
$recv(tbl).__lt_lt(tr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=7;
//>>excludeEnd("ctx");
$16=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=7;
//>>excludeEnd("ctx");
tr=$recv($16)._newElement_("tr");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=6;
//>>excludeEnd("ctx");
$17=tr;
$20=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=8;
//>>excludeEnd("ctx");
$19=$recv($20)._newElement_("td");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=7;
//>>excludeEnd("ctx");
$18=$recv($19).__lt_lt("D");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=9;
//>>excludeEnd("ctx");
$recv($17).__lt_lt($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=8;
//>>excludeEnd("ctx");
$21=tr;
$24=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=9;
//>>excludeEnd("ctx");
$23=$recv($24)._newElement_("td");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=8;
//>>excludeEnd("ctx");
$22=$recv($23).__lt_lt("E");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=11;
//>>excludeEnd("ctx");
$recv($21).__lt_lt($22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=10;
//>>excludeEnd("ctx");
$25=tr;
$26=$recv($recv(self._testedClass())._newElement_("td")).__lt_lt("F");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=13;
//>>excludeEnd("ctx");
$recv($25).__lt_lt($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=12;
//>>excludeEnd("ctx");
$recv(tbl).__lt_lt(tr);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=14;
//>>excludeEnd("ctx");
$recv(d).__lt_lt(tbl);
self._assertBodyEndsWith_(">sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testInsertTable",{d:d,tbl:tbl,tr:tr},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testInsertTable\x0a\x09| d tbl tr |\x0a\x09d := self testedClass at: 'html body div#fixture'.\x0a\x09tbl := self testedClass newElement: 'table'.\x0a\x09\x0a\x09tr := self testedClass newElement: 'tr'.\x0a\x09tr << ((self testedClass newElement: 'td') << 'A').\x0a\x09tr << ((self testedClass newElement: 'td') << 'B').\x0a\x09tr << ((self testedClass newElement: 'td') << 'C').\x0a\x09\x0a\x09tbl << tr.\x0a\x09\x0a\x09tr := self testedClass newElement: 'tr'.\x0a\x09tr << ((self testedClass newElement: 'td') << 'D').\x0a\x09tr << ((self testedClass newElement: 'td') << 'E').\x0a\x09tr << ((self testedClass newElement: 'td') << 'F').\x0a\x09\x0a\x09tbl << tr.\x0a\x09d << tbl.\x0a\x09 \x0a\x09self assertBodyEndsWith: '>sentinel<table><tr><td>A</td><td>B</td><td>C</td></tr><tr><td>D</td><td>E</td><td>F</td></tr></table></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "newElement:", "<<", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testMultipleInserts",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._fromElement_(self["@fixtureDiv"]);
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$recv(d).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
s=$recv(self._testedClass())._newElement_("span");
$recv(d).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(d).__lt_lt("dom-mite");
self._assertBodyEndsWith_(">sentinel<p></p><span></span>dom-mite</div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultipleInserts",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultipleInserts\x0a\x09| d p s |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << p.\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09d << s.\x0a\x09d << 'dom-mite'.\x0a\x09self assertBodyEndsWith: '>sentinel<p></p><span></span>dom-mite</div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "newElement:", "<<", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testMultipleInsertsWithClear",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._at_("#fixture");
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$recv(d).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
s=$recv(self._testedClass())._newElement_("span");
$recv(d).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(d)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resetContents"]=1;
//>>excludeEnd("ctx");
$recv(d).__lt_lt("dom-mite");
$recv(d)._resetContents();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["resetContents"]=2;
//>>excludeEnd("ctx");
$recv(d)._resetContents();
self._assertBodyEndsWith_("></div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultipleInsertsWithClear",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultipleInsertsWithClear\x0a\x09| d p s |\x0a\x09d := self testedClass at: '#fixture'.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << p.\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09d << s.\x0a\x09d resetContents.\x0a\x09d << 'dom-mite'.\x0a\x09d resetContents.\x0a\x09d resetContents.\x0a\x09self assertBodyEndsWith: '></div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "testedClass", "newElement:", "<<", "resetContents", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testMultipleInsertsWithClearInBetween",
protocol: 'testing',
fn: function (){
var self=this;
var d,p,s;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=1;
//>>excludeEnd("ctx");
d=$recv($1)._fromElement_(self["@fixtureDiv"]);
$2=self._testedClass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["testedClass"]=2;
//>>excludeEnd("ctx");
p=$recv($2)._newElement_("p");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newElement:"]=1;
//>>excludeEnd("ctx");
$recv(d).__lt_lt(p);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=1;
//>>excludeEnd("ctx");
s=$recv(self._testedClass())._newElement_("span");
$recv(d).__lt_lt(s);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["<<"]=2;
//>>excludeEnd("ctx");
$recv(d)._resetContents();
$recv(d).__lt_lt("dom-mite");
self._assertBodyEndsWith_(">dom-mite</div>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testMultipleInsertsWithClearInBetween",{d:d,p:p,s:s},$globals.DOMiteTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testMultipleInsertsWithClearInBetween\x0a\x09| d p s |\x0a\x09d := self testedClass fromElement: fixtureDiv.\x0a\x09p := self testedClass newElement: 'p'.\x0a\x09d << p.\x0a\x09s := self testedClass newElement: 'span'.\x0a\x09d << s.\x0a\x09d resetContents.\x0a\x09d << 'dom-mite'.\x0a\x09self assertBodyEndsWith: '>dom-mite</div>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromElement:", "testedClass", "newElement:", "<<", "resetContents", "assertBodyEndsWith:"]
}),
$globals.DOMiteTest);

$core.addMethod(
$core.method({
selector: "testedClass",
protocol: 'fixture',
fn: function (){
var self=this;
function $Domite(){return $globals.Domite||(typeof Domite=="undefined"?nil:Domite)}
return $Domite();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testedClass\x0a\x0a\x09^ Domite",
referencedClasses: ["Domite"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DOMiteTest);


});
