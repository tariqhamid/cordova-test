define("amber-ambercordova/AmberCordova", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber-ambercordova/WebSocket-Test", "amber-ambercordova/AmberVideo", "amber-ambercordova/AmberVideo-Tests", "amber-ambercordova/AmberSnapsvg", "amber-ambercordova/Boomerang", "amber-ambercordova/Boomerang-Tests", "amber-ambercordova/CornucopiaScorecards-Platform", "amber-ambercordova/CornucopiaScorecards", "amber-ambercordova/CornucopiaScorecards-Tests", "amber-ambercordova/CornucopiaScorecardsApp", "amber-ambercordova/LindaClient", "amber-ambercordova/LindaClient-Tests", "amber-ambercordova/LindaClientDemo", "amber-ambercordova/Timer", "amber-ambercordova/Timer-Tests", "amber-ambercordova/TodoList", "amber-ambercordova/TwitterWall", "amber-ambercordova/Zendo", "amber-ambercordova/Zendo-Tests", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('AmberCordova');
$core.packages["AmberCordova"].innerEval = function (expr) { return eval(expr); };
$core.packages["AmberCordova"].imports = ["amber-ambercordova/AmberSnapsvg", "amber-ambercordova/AmberVideo", "amber-ambercordova/AmberVideo-Tests", "amber-ambercordova/Boomerang", "amber-ambercordova/Boomerang-Tests", "amber-ambercordova/CornucopiaScorecards", "amber-ambercordova/CornucopiaScorecards-Platform", "amber-ambercordova/CornucopiaScorecards-Tests", "amber-ambercordova/CornucopiaScorecardsApp", "amber-ambercordova/LindaClient", "amber-ambercordova/LindaClient-Tests", "amber-ambercordova/LindaClientDemo", "amber-ambercordova/Timer", "amber-ambercordova/Timer-Tests", "amber-ambercordova/TodoList", "amber-ambercordova/TwitterWall", "amber-ambercordova/WebSocket-Test", "amber-ambercordova/Zendo", "amber-ambercordova/Zendo-Tests", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["AmberCordova"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('AmberCordova', $globals.Object, ['images', 'cursor', 'mySound', 'aTrack', 'paused'], 'AmberCordova');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8;
self["@images"]=$recv($OrderedCollection())._new();
self["@cursor"]=(1);
$recv(self["@images"])._add_("lotus_flower.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(self["@images"])._add_("http://wallpaperhdwide.com/wp-content/gallery/pictures-of-drawings-of-flowers/flower_drawings_by_maddyfield-d65jiy1.jpg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(self["@images"])._add_("http://www.pics4world.com/vb/imgcache/2/24542showing.jpg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(self["@images"])._add_("http://images.fineartamerica.com/images-medium-large/colourful-flowers-xafira-mendonsa.jpg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv(self["@images"])._add_("http://g03.a.alicdn.com/kf/HTB1rHldHVXXXXbbXFXXq6xXFXXX6/3D-wall-art-peacock-and-font-b-flowers-b-font-diy-diamond-painting-mosaic-square-diamonds.jpg");
self._doPictureListener();
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._css_($globals.HashedCollection._newFromPairs_(["background-color","SpringGreen "]));
$2="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3="#jquery-append"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$recv($3)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=2;
//>>excludeEnd("ctx");
$4="#play-track"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$recv($4)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doPlayNewTrack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=3;
//>>excludeEnd("ctx");
$5="#pause-track"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=5;
//>>excludeEnd("ctx");
$recv($5)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6="#play-track"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=6;
//>>excludeEnd("ctx");
$recv($6)._off_("click");
$7="#play-track"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=7;
//>>excludeEnd("ctx");
$recv($7)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(window)._onResume();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["click:"]=5;
//>>excludeEnd("ctx");
return $recv(window)._onPause();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=4;
//>>excludeEnd("ctx");
$8="#show-image"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=8;
//>>excludeEnd("ctx");
$recv($8)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._showImage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=6;
//>>excludeEnd("ctx");
$recv("#geo-location"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._geoLocation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,8)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09images := OrderedCollection new.\x0a\x09cursor := 1.\x0a\x09images add: 'lotus_flower.png'.\x0a\x09images add: 'http://wallpaperhdwide.com/wp-content/gallery/pictures-of-drawings-of-flowers/flower_drawings_by_maddyfield-d65jiy1.jpg'.\x0a\x09images add: 'http://www.pics4world.com/vb/imgcache/2/24542showing.jpg'.\x0a\x09images add: 'http://images.fineartamerica.com/images-medium-large/colourful-flowers-xafira-mendonsa.jpg'.\x0a\x09images add: 'http://g03.a.alicdn.com/kf/HTB1rHldHVXXXXbbXFXXq6xXFXXX6/3D-wall-art-peacock-and-font-b-flowers-b-font-diy-diamond-painting-mosaic-square-diamonds.jpg'.\x0a\x0a\x09self doPictureListener.\x0a\x0a\x09\x22indicate this code has run on the web page\x22\x0a\x09'#amber-with' asJQuery css: #{ 'background-color' ->'SpringGreen '}.\x0a\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09'#play-track' asJQuery click: [self doPlayNewTrack ].\x0a\x09'#pause-track' asJQuery click: [\x0a\x09\x09'#play-track' asJQuery off: 'click'.\x0a\x09\x09'#play-track' asJQuery click: [ window onResume ].\x0a\x09\x09window onPause \x22window fireEvent: 'pause'\x22 ].\x0a\x09'#show-image' asJQuery click: [ self showImage ].\x0a\x0a\x09'#geo-location' asJQuery click: [ self geoLocation ].",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "add:", "doPictureListener", "css:", "asJQuery", "click:", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "doPlayNewTrack", "off:", "onResume", "onPause", "showImage", "geoLocation"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "begin",
protocol: 'old-example',
fn: function (){
var self=this;
var msg,button;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
msg="Hello world.";
button="#sayHello"._asJQuery();
$recv(button)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=button;
$2=$recv("<p>".__comma(msg)).__comma("</p>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._after_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"begin",{msg:msg,button:button},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "begin\x0a\x0a    | msg button |\x0a\x0a    msg := 'Hello world.'.\x0a    button := '#sayHello' asJQuery.\x0a    button click: [button after: '<p>' , msg , '</p>'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "click:", "after:", ","]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
var self=this;
var tag;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($HTMLCanvas())._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doNextImg",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(window)._alert_("doNextImg");
$1=$recv(self["@cursor"]).__lt($recv(self["@images"])._size());
if($core.assert($1)){
self["@cursor"]=$recv(self["@cursor"]).__plus((1));
self["@cursor"];
} else {
self["@cursor"]=(1);
self["@cursor"];
};
self._showImage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doNextImg",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doNextImg\x0a\x09window alert: 'doNextImg'.\x0a\x09(cursor < images size)\x0a\x09\x09ifTrue: [ cursor := cursor + 1]\x0a\x09\x09ifFalse: [ cursor := 1].\x0a\x0a\x09self showImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:", "ifTrue:ifFalse:", "<", "size", "+", "showImage"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doNextTrack",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(window)._alert_("doNextTrack");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doNextTrack",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doNextTrack\x0a\x09window alert: 'doNextTrack'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doPictureListener",
protocol: 'action',
fn: function (){
var self=this;
var myElement;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
myElement=$recv("#picture-frame"._asJQuery())._at_((0));
$recv(myElement)._addEventListener_func_("touchend",(function(ev){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._touchEnd_myProcessing_(ev,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._processSwipe();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doPictureListener",{myElement:myElement},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doPictureListener\x0a\x09| myElement |\x0a\x0a\x09myElement := '#picture-frame' asJQuery at: 0.\x0a\x09myElement addEventListener: 'touchend' func: [:ev |\x0a\x09\x09window touchEnd: ev myProcessing: [self processSwipe]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "asJQuery", "addEventListener:func:", "touchEnd:myProcessing:", "processSwipe"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doPlayNewTrack",
protocol: 'action',
fn: function (){
var self=this;
function $Audio(){return $globals.Audio||(typeof Audio=="undefined"?nil:Audio)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
self["@mySound"]=$recv($Audio())._new();
self["@aTrack"]="assets/audio/Ben_Dowling.mp3";
$1=$recv(window)._media();
if(($receiver = $1) == null || $receiver.isNil){
$recv(self["@mySound"])._loop_(true);
$recv(self["@mySound"])._src_(self["@aTrack"]);
$recv(self["@mySound"])._play();
} else {
$recv(window)._playNewTrack_($recv($recv(window)._prefix()).__comma(self["@aTrack"]));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doPlayNewTrack",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doPlayNewTrack\x0a\x09mySound := Audio new. \x22only create one instance, ever!\x22\x0a\x0a\x09aTrack := 'assets/audio/Ben_Dowling.mp3'.\x0a\x0a\x09\x22If the media object is nil, then we aren't in the device, so\x0a\x09 we fall back on the browser's Audio.\x22\x0a\x09window media ifNil: [\x0a\x09\x09mySound loop: true.\x0a\x09\x09mySound src: aTrack.\x0a\x09\x09mySound play]\x0a\x09ifNotNil: [window playNewTrack: (window prefix),aTrack]",
referencedClasses: ["Audio"],
//>>excludeEnd("ide");
messageSends: ["new", "ifNil:ifNotNil:", "media", "loop:", "src:", "play", "playNewTrack:", ",", "prefix"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doPrevImg",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(window)._alert_("doPrevImg");
$1=$recv(self["@cursor"]).__gt((1));
if($core.assert($1)){
self["@cursor"]=$recv(self["@cursor"]).__minus((1));
self["@cursor"];
} else {
self["@cursor"]=$recv(self["@images"])._size();
self["@cursor"];
};
self._showImage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doPrevImg",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doPrevImg\x0a\x09window alert: 'doPrevImg'.\x0a\x0a\x09(cursor > 1)\x0a\x09\x09ifTrue: [ cursor := cursor - 1]\x0a\x09\x09ifFalse: [ cursor := images size].\x0a\x0a\x09self showImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alert:", "ifTrue:ifFalse:", ">", "-", "size", "showImage"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "geoLocation",
protocol: 'action',
fn: function (){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$19,$18,$17,$20,$16,$15,$22,$21,$14,$23,$13,$12,$25,$24,$11,$26,$10,$9,$28,$27,$8,$29,$7,$6,$5,$30,$4,$3,$2,$31,$34,$33,$32;
$recv($recv($recv(window)._navigator())._geolocation())._getCurrentPosition_onError_((function(position){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=window;
$19=$recv(position)._coords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["coords"]=1;
//>>excludeEnd("ctx");
$18=$recv($19)._latitude();
$17="Lat: ".__comma($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=16;
//>>excludeEnd("ctx");
$20=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=1;
//>>excludeEnd("ctx");
$16=$recv($17).__comma($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=15;
//>>excludeEnd("ctx");
$15=$recv($16).__comma("Long: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=14;
//>>excludeEnd("ctx");
$22=$recv(position)._coords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["coords"]=2;
//>>excludeEnd("ctx");
$21=$recv($22)._longitude();
$14=$recv($15).__comma($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=13;
//>>excludeEnd("ctx");
$23=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=2;
//>>excludeEnd("ctx");
$13=$recv($14).__comma($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=12;
//>>excludeEnd("ctx");
$12=$recv($13).__comma("Altitude: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=11;
//>>excludeEnd("ctx");
$25=$recv(position)._coords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["coords"]=3;
//>>excludeEnd("ctx");
$24=$recv($25)._altitude();
$11=$recv($12).__comma($24);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=10;
//>>excludeEnd("ctx");
$26=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__comma($26);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=9;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("Heading: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=8;
//>>excludeEnd("ctx");
$28=$recv(position)._coords();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["coords"]=4;
//>>excludeEnd("ctx");
$27=$recv($28)._heading();
$8=$recv($9).__comma($27);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=7;
//>>excludeEnd("ctx");
$29=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__comma($29);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=6;
//>>excludeEnd("ctx");
$6=$recv($7).__comma("Speed: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=5;
//>>excludeEnd("ctx");
$5=$recv($6).__comma($recv($recv(position)._coords())._speed());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$30=$recv($String())._cr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["cr"]=5;
//>>excludeEnd("ctx");
$4=$recv($5).__comma($30);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$3=$recv($4).__comma("Time: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv($Date())._fromMilliseconds_($recv(position)._timestamp()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._alert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({position:position},$ctx1,1)});
//>>excludeEnd("ctx");
}),(function(error){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$31=window;
$34=$recv("code: ".__comma($recv(error)._code())).__comma($recv($String())._cr());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=19;
//>>excludeEnd("ctx");
$33=$recv($34).__comma("message: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=18;
//>>excludeEnd("ctx");
$32=$recv($33).__comma($recv(error)._message());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=17;
//>>excludeEnd("ctx");
return $recv($31)._alert_($32);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({error:error},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"geoLocation",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "geoLocation\x0a\x0a  window navigator geolocation getCurrentPosition: [:position |\x0a\x09\x09window alert: 'Lat: ',(position coords latitude),\x0a\x09\x09\x09  (String cr),'Long: ',(position coords longitude),\x0a\x09\x09\x09  (String cr),'Altitude: ',(position coords altitude),\x0a\x09\x09\x09  (String cr),'Heading: ',(position coords heading),\x0a\x09\x09\x09  (String cr),'Speed: ',(position coords speed),\x0a\x09\x09\x09  (String cr),'Time: ',(Date fromMilliseconds: (position timestamp))]\x0a\x09\x09onError: [:error |\x0a\x09\x09\x09window alert: 'code: ',(error code),(String cr),\x0a\x09\x09\x09\x09  'message: ',(error message)]",
referencedClasses: ["String", "Date"],
//>>excludeEnd("ide");
messageSends: ["getCurrentPosition:onError:", "geolocation", "navigator", "alert:", ",", "latitude", "coords", "cr", "longitude", "altitude", "heading", "speed", "fromMilliseconds:", "timestamp", "code", "message"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "helloFromSmalltalk",
protocol: 'old-example',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._withEmbeddedJavascript();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"helloFromSmalltalk",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "helloFromSmalltalk\x0a\x09^ self withEmbeddedJavascript",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withEmbeddedJavascript"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "processSwipe",
protocol: 'action',
fn: function (){
var self=this;
var direction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$4,$5;
direction=$recv(window)._swipeDirection();
$2=$recv(direction).__eq("up");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
$3=$recv(direction).__eq("down");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._or_($3);
if($core.assert($1)){
self._doNextTrack();
};
$4=$recv(direction).__eq("left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
if($core.assert($4)){
self._doPrevImg();
};
$5=$recv(direction).__eq("right");
if($core.assert($5)){
self._doNextImg();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processSwipe",{direction:direction},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processSwipe\x0a    | direction |\x0a\x0a    direction := window swipeDirection.\x0a    (direction = 'up' or: direction = 'down') ifTrue: [\x0a        self doNextTrack].\x0a    direction = 'left' ifTrue: [\x0a        self doPrevImg].\x0a    direction = 'right' ifTrue: [\x0a        self doNextImg].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["swipeDirection", "ifTrue:", "or:", "=", "doNextTrack", "doPrevImg", "doNextImg"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "showImage",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="#picture-frame"._asJQuery();
$2=$recv("<style>#picture-frame {background-image:\x0a        url(".__comma($recv(self["@images"])._at_(self["@cursor"]))).__comma(");\x0a        background-size: cover;\x0a        background-position: center;\x0a        }</style>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._append_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showImage",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "showImage\x0a\x22\x0a    '#picture-frame' asJQuery append:\x0a        '<style>#picture-frame {background-image:\x0a        url(',(images at: cursor),');\x0a        position: fixed;\x0a        top: 0; left: 0; bottom: 0; right: 0;\x0a        background-size: cover;\x0a        background-position: center;\x0a        }</style>'\x0a\x22\x0a    '#picture-frame' asJQuery append:\x0a        '<style>#picture-frame {background-image:\x0a        url(',(images at: cursor),');\x0a        background-size: cover;\x0a        background-position: center;\x0a        }</style>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery", ",", "at:"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "testLocalStorage",
protocol: 'old-example',
fn: function (){
var self=this;
var coll,hcoll;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $SmalltalkImage(){return $globals.SmalltalkImage||(typeof SmalltalkImage=="undefined"?nil:SmalltalkImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$8,$7,$6;
coll=$recv($OrderedCollection())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(coll)._add_("abc");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(coll)._add_("xon");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
hcoll=$recv($HashedCollection())._new();
$recv(hcoll)._at_put_("en","English");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(hcoll)._at_put_("fr","French");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(hcoll)._at_put_("ge","German");
$recv(coll)._add_(hcoll);
$1=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=1;
//>>excludeEnd("ctx");
$recv($1)._setItem_value_("coll",$recv(coll)._asJSONString());
coll=nil;
$2=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=2;
//>>excludeEnd("ctx");
$recv($2)._getItem_("coll");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=1;
//>>excludeEnd("ctx");
$4=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=3;
//>>excludeEnd("ctx");
$3=$recv($4)._getItem_("coll");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=2;
//>>excludeEnd("ctx");
$recv($JSON())._parse_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:"]=1;
//>>excludeEnd("ctx");
$5=$recv($SmalltalkImage())._current();
$8=$recv(window)._localStorage();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["localStorage"]=4;
//>>excludeEnd("ctx");
$7=$recv($8)._getItem_("coll");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getItem:"]=3;
//>>excludeEnd("ctx");
$6=$recv($JSON())._parse_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["parse:"]=2;
//>>excludeEnd("ctx");
$recv($5)._readJSObject_($6);
$recv($recv($recv($JSON())._parse_($recv($recv(window)._localStorage())._getItem_("coll")))._at_((3)))._at_("fr");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLocalStorage",{coll:coll,hcoll:hcoll},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLocalStorage\x0a\x09\x22http://stackoverflow.com/questions/22604341/amber-and-localstorage-asjson/23234804#23234804\x22\x0a\x09| coll hcoll |\x0a\x0a\x09coll := OrderedCollection new.\x0a\x09coll add: 'abc'.\x0a\x09coll add: 'xon'.\x0a\x0a\x09hcoll := HashedCollection new.\x0a\x09hcoll at: 'en' put: 'English'.\x0a\x09hcoll at: 'fr' put: 'French'.\x0a\x09hcoll at: 'ge' put: 'German'.\x0a\x0a\x09coll add: hcoll.\x0a\x0a\x09window localStorage setItem: 'coll' value: coll asJSONString.\x0a\x0a\x09\x22We set coll to nil to indicate that we\x0a\x09are going to retrieve it back from the localStorage\x22\x0a\x0a\x09coll := nil.\x0a\x0a\x09window localStorage getItem: 'coll'.\x0a\x0a\x09JSON parse: (window localStorage getItem: 'coll').\x0a\x0a\x09SmalltalkImage current readJSObject:\x0a\x09\x09\x09\x09(JSON parse: (window localStorage getItem: 'coll')) .\x0a\x0a\x0a\x09((JSON parse: (window localStorage getItem: 'coll')) at: 3) at: 'fr'",
referencedClasses: ["OrderedCollection", "HashedCollection", "JSON", "SmalltalkImage"],
//>>excludeEnd("ide");
messageSends: ["new", "add:", "at:put:", "setItem:value:", "localStorage", "asJSONString", "getItem:", "parse:", "readJSObject:", "current", "at:"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "testXMLHttpRequest",
protocol: 'old-example',
fn: function (){
var self=this;
var req;
function $XMLHttpRequest(){return $globals.XMLHttpRequest||(typeof XMLHttpRequest=="undefined"?nil:XMLHttpRequest)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
req=$recv($XMLHttpRequest())._new();
$recv(req)._open_url_asynchronous_("GET","http://amber-lang.net/",false);
$recv(req)._send_("");
$1=$recv(req)._responseText();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testXMLHttpRequest",{req:req},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testXMLHttpRequest\x0a\x09\x22http://stackoverflow.com/questions/18472447/amber-smalltalk-and-xmlhttprequest-get\x22\x0a\x09| req |\x0a\x09req := XMLHttpRequest new.\x0a\x09req open: 'GET' url: 'http://amber-lang.net/' asynchronous: false.\x0a\x09req send: ''.\x0a\x09^ req responseText",
referencedClasses: ["XMLHttpRequest"],
//>>excludeEnd("ide");
messageSends: ["new", "open:url:asynchronous:", "send:", "responseText"]
}),
$globals.AmberCordova);

$core.addMethod(
$core.method({
selector: "withEmbeddedJavascript",
protocol: 'old-example',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
 return 'with ' + 'embedded ' +  'javascript ' + 'text ' ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"withEmbeddedJavascript",{},$globals.AmberCordova)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "withEmbeddedJavascript\x0a\x09< return 'with ' + 'embedded ' +  'javascript ' + 'text ' >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AmberCordova);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._augmentPage();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AmberCordova.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09\x22AmberCordova start\x22\x0a\x09^ self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.AmberCordova.klass);

});
