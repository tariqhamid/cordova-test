define("amber-ambercordova/AmberSnapsvg", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "snap.svg"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,snapSvg
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberSnapsvg');
$core.packages["AmberSnapsvg"].innerEval = function (expr) { return eval(expr); };
$core.packages["AmberSnapsvg"].imports = ["snapSvg=snap.svg"];
$core.packages["AmberSnapsvg"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('AmberSnapsvg', $globals.Object, [], 'AmberSnapsvg');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#snapsvg-button"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSnapSvg();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv("#snapsvg-button"._asJQuery())._css_($globals.HashedCollection._newFromPairs_(["background-color","hotpink"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.AmberSnapsvg)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09'#snapsvg-button' asJQuery click: [self doSnapSvg].\x0a\x0a\x09'#snapsvg-button' asJQuery css: #{ 'background-color' ->'hotpink'}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doSnapSvg", "css:"]
}),
$globals.AmberSnapsvg);

$core.addMethod(
$core.method({
selector: "doSnapSvg",
protocol: 'action',
fn: function (){
var self=this;
var s,bigCircle,smallCircle;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
s=$recv(snapSvg)._value_("#svg");
bigCircle=$recv(s)._circle_value_value_((150),(150),(100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["circle:value:value:"]=1;
//>>excludeEnd("ctx");
$recv(bigCircle)._attr_($globals.HashedCollection._newFromPairs_(["fill","#bada55","stroke","#000","strokeWidth",(5)]));
smallCircle=$recv(s)._circle_value_value_((100),(150),(70));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSnapSvg",{s:s,bigCircle:bigCircle,smallCircle:smallCircle},$globals.AmberSnapsvg)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSnapSvg\x0a\x22translation to Smalltalk points 1 to 4 of\x0ahttp://snapsvg.io/start/ \x22\x0a\x0a| s bigCircle smallCircle |\x0a\x0a\x22s := snapSvg value: 300 value: 600.\x22\x0as := snapSvg value: '#svg'.\x0a\x0abigCircle := s circle: 150 value: 150 value: 100.\x0abigCircle attr: #{'fill' -> '#bada55'. 'stroke' -> '#000'. 'strokeWidth' -> 5}.\x0asmallCircle := s circle: 100 value: 150 value: 70.\x0a\x0a\x22Transcript show: s outerSVG.\x22\x0a\x22s inspect\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "circle:value:value:", "attr:"]
}),
$globals.AmberSnapsvg);


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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberSnapsvg.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.AmberSnapsvg.klass);

});
