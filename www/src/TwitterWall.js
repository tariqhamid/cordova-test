define("amber-ambercordova/TwitterWall", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery"
//>>excludeEnd("imports");
, "amber/web/Web", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,jQuery
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('TwitterWall');
$core.packages["TwitterWall"].innerEval = function (expr) { return eval(expr); };
$core.packages["TwitterWall"].imports = ["jQuery=amber/jquery/Wrappers-JQuery"];
$core.packages["TwitterWall"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('Tweet', $globals.Widget, ['json'], 'TwitterWall');
$core.addMethod(
$core.method({
selector: "json",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@json"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "json\x0a^json",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Tweet);

$core.addMethod(
$core.method({
selector: "json:",
protocol: 'not yet classified',
fn: function (aJson){
"use strict";

var self=this;
self["@json"]=aJson;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJson"],
source: "json: aJson\x0ajson := aJson.\x0a\x0a\x22window alert: (JSON stringify: aJson)\x22\x0a\x22Transcript show: (JSON stringify: aJson); cr;cr.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Tweet);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (tr){
"use strict";

var self=this;
var tdUser,tdMessage,img,a,pMessage,pDate,user;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5,$7,$8,$9,$10,$12,$11,$14,$13,$16,$15,$17,$18,$19,$20;
$1=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
tdUser=$recv($1)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$2=$recv(tdUser)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$recv($2)._id_("user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$3=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=2;
//>>excludeEnd("ctx");
tdMessage=$recv($3)._td();
$4=$recv(tdMessage)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=2;
//>>excludeEnd("ctx");
$recv($4)._id_("messageBox");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=2;
//>>excludeEnd("ctx");
$recv(tr)._append_(tdUser);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=1;
//>>excludeEnd("ctx");
$recv(tr)._append_(tdMessage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=2;
//>>excludeEnd("ctx");
user=$recv(self["@json"])._at_("user");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$6=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._img();
$7=$recv(user)._at_("profile_image_url");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
img=$recv($5)._src_($7);
$8=$recv(img)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=3;
//>>excludeEnd("ctx");
$9=$recv(user)._at_("name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$recv($8)._title_($9);
$10=$recv(img)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=4;
//>>excludeEnd("ctx");
$12=$recv(user)._at_("screen_name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$11="http://twitter.com/".__comma($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($10)._longDesc_($11);
$14=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=4;
//>>excludeEnd("ctx");
$13=$recv($14)._a();
$16=$recv(user)._at_("screen_name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=5;
//>>excludeEnd("ctx");
$15="http://twitter.com/".__comma($16);
a=$recv($13)._href_($15);
$recv(a)._append_(img);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=3;
//>>excludeEnd("ctx");
$recv(tdUser)._append_(a);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=4;
//>>excludeEnd("ctx");
$17=$recv($HTMLCanvas())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=5;
//>>excludeEnd("ctx");
pMessage=$recv($17)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$18=$recv(pMessage)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=5;
//>>excludeEnd("ctx");
$recv($18)._id_("message");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=3;
//>>excludeEnd("ctx");
$19=pMessage;
$20=$recv(self["@json"])._at_("text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=6;
//>>excludeEnd("ctx");
$recv($19)._append_($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=5;
//>>excludeEnd("ctx");
$recv(tdMessage)._append_(pMessage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=6;
//>>excludeEnd("ctx");
pDate=$recv($recv($HTMLCanvas())._new())._p();
$recv($recv(pDate)._element())._id_("date");
$recv(pDate)._append_($recv(self["@json"])._at_("created_at"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=7;
//>>excludeEnd("ctx");
$recv(tdMessage)._append_(pDate);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{tr:tr,tdUser:tdUser,tdMessage:tdMessage,img:img,a:a,pMessage:pMessage,pDate:pDate,user:user},$globals.Tweet)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tr"],
source: "renderOn: tr\x0a\x0a| tdUser tdMessage img a pMessage pDate user |\x0atdUser := HTMLCanvas new td.\x0atdUser element id: 'user'.\x0atdMessage := HTMLCanvas new td.\x0atdMessage element id: 'messageBox'.\x0a\x0atr append: tdUser.\x0atr append: tdMessage.\x0a\x0auser := json at: 'user'.\x0a\x0aimg := HTMLCanvas new img src: (user at: 'profile_image_url') .\x0aimg element title: (user at: 'name').\x0aimg element longDesc: ('http://twitter.com/', (user at: 'screen_name')).\x0a\x0aa := HTMLCanvas new a href: ('http://twitter.com/', (user at: 'screen_name')).\x0aa append: img.\x0a\x0atdUser append: a.\x0a\x0apMessage := HTMLCanvas new p.\x0apMessage element id: 'message'.\x0apMessage append: (json at: 'text').\x0atdMessage append: pMessage.\x0a\x0apDate := HTMLCanvas new p.\x0apDate element id: 'date'.\x0apDate append: (json at: 'created_at').\x0atdMessage append: pDate.",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["td", "new", "id:", "element", "append:", "at:", "src:", "img", "title:", "longDesc:", ",", "href:", "a", "p"]
}),
$globals.Tweet);


$core.addMethod(
$core.method({
selector: "openAt:with:",
protocol: 'not yet classified',
fn: function (tr,aJson){
"use strict";

var self=this;
var tweet;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tweet=self._new();
$recv(tweet)._json_(aJson);
$recv(tweet)._renderOn_(tr);
return tr;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"openAt:with:",{tr:tr,aJson:aJson,tweet:tweet},$globals.Tweet.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tr", "aJson"],
source: "openAt: tr with: aJson\x0a| tweet |\x0atweet := self new.\x0atweet json: aJson.\x0atweet renderOn: tr.\x0a^tr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "json:", "renderOn:"]
}),
$globals.Tweet.klass);


$core.addClass('TwitterSearch', $globals.Object, [], 'TwitterWall');
$core.addMethod(
$core.method({
selector: "query",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
var queryString;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
queryString=$recv($recv("#searchQuery"._asJQuery())._val())._replace_with_("#","%23");
self._query_("http://www.clapistan.com/api/Twitter?count=5&q=".__comma(queryString));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"query",{queryString:queryString},$globals.TwitterSearch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "query\x0a    | queryString |\x0a\x0a    queryString := ('#searchQuery'  asJQuery val) replace: '#' with: '%23'.\x0a\x0a    \x22self query: ('http://localhost:8080/api/Twitter?count=5&q=', queryString).\x22\x0a\x0a\x09self query:  ('http://www.clapistan.com/api/Twitter?count=5&q=', queryString).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "val", "asJQuery", "query:", ","]
}),
$globals.TwitterSearch);

$core.addMethod(
$core.method({
selector: "query:",
protocol: 'not yet classified',
fn: function (queryURL){
"use strict";

var self=this;
var result;
function $JQuery(){return $globals.JQuery||(typeof JQuery=="undefined"?nil:JQuery)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2;
result=$recv($recv($JQuery())._current())._ajax_($globals.HashedCollection._newFromPairs_(["type","GET","url",queryURL,"dataType","json","success",(function(jsonData){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._success_($recv(jsonData)._at_("statuses"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({jsonData:jsonData},$ctx1,1)});
//>>excludeEnd("ctx");
}),"error",(function(xhr,status){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=window;
$3=$recv($recv(status).__comma(" ")).__comma("TwitterSearch>>query: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(queryURL);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($1)._alert_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({xhr:xhr,status:status},$ctx1,2)});
//>>excludeEnd("ctx");
})]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"query:",{queryURL:queryURL,result:result},$globals.TwitterSearch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["queryURL"],
source: "query: queryURL\x0a  | result |\x0a\x0a  result :=  JQuery current ajax: #{\x0a        'type' -> 'GET'.\x0a        'url' -> queryURL.\x0a        'dataType' -> 'json'.\x0a\x09\x09'success' -> [ :jsonData | \x0a\x09\x09\x09self success: (jsonData at: 'statuses')].\x0a        'error' -> [ :xhr :status | window alert: (status , ' ' , 'TwitterSearch>>query: ', queryURL )]\x0a        }",
referencedClasses: ["JQuery"],
//>>excludeEnd("ide");
messageSends: ["ajax:", "current", "success:", "at:", "alert:", ","]
}),
$globals.TwitterSearch);

$core.addMethod(
$core.method({
selector: "success2:",
protocol: 'not yet classified',
fn: function (tweets){
"use strict";

var self=this;
var wall,table,tr;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Tweet(){return $globals.Tweet||(typeof Tweet=="undefined"?nil:Tweet)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
wall="#playground";
table=$recv($recv($HTMLCanvas())._onJQuery_($recv(wall)._asJQuery()))._table();
$recv($recv(table)._element())._id_("twitterwall");
$recv(tweets)._do_((function(tweet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
tr=$recv($recv($HTMLCanvas())._new())._tr();
tr;
$recv(table)._append_(tr);
return $recv($Tweet())._openAt_with_(tr,tweet);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({tweet:tweet},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success2:",{tweets:tweets,wall:wall,table:table,tr:tr},$globals.TwitterSearch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tweets"],
source: "success2: tweets\x0a\x09| wall table tr |\x0a\x09wall := '#playground'.\x0a\x09table := (HTMLCanvas onJQuery: (wall asJQuery))  table.\x0a\x09table element id: 'twitterwall'.\x0a\x0a\x09tweets do: [ :tweet | \x0a\x09\x09\x09   tr := HTMLCanvas new tr.\x0a\x09\x09\x09   table append: tr.\x0a\x09\x09\x09   Tweet openAt: tr with: tweet\x0a\x09\x09\x09   ].",
referencedClasses: ["HTMLCanvas", "Tweet"],
//>>excludeEnd("ide");
messageSends: ["table", "onJQuery:", "asJQuery", "id:", "element", "do:", "tr", "new", "append:", "openAt:with:"]
}),
$globals.TwitterSearch);

$core.addMethod(
$core.method({
selector: "success:",
protocol: 'not yet classified',
fn: function (tweets){
"use strict";

var self=this;
var playground,table,tr;
function $Tweet(){return $globals.Tweet||(typeof Tweet=="undefined"?nil:Tweet)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
playground="#playground"._asJQuery();
$recv(playground)._empty();
$recv((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
table=$recv(html)._table();
table;
$recv($recv(table)._element())._id_("twitterwall");
return $recv(tweets)._do_((function(tweet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
tr=$recv(html)._tr();
tr;
$recv(table)._append_(tr);
return $recv($Tweet())._openAt_with_(tr,tweet);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({tweet:tweet},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}))._appendToJQuery_(playground);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"success:",{tweets:tweets,playground:playground,table:table,tr:tr},$globals.TwitterSearch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["tweets"],
source: "success: tweets\x0a\x09| playground table tr |\x0a\x09\x0a\x09playground := '#playground' asJQuery.\x0a\x09playground empty.\x0a\x09 [:html |\x0a\x09\x09table := html table.\x0a\x09\x09table element id: 'twitterwall'.\x0a\x0a\x09\x09tweets do: [ :tweet |\x0a\x09\x09\x09\x09   tr := html tr.\x0a\x09\x09\x09\x09   table append: tr.\x0a\x09\x09\x09\x09   Tweet openAt: tr with: tweet\x0a\x09\x09\x09]\x0a\x09] appendToJQuery: playground.",
referencedClasses: ["Tweet"],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "empty", "appendToJQuery:", "table", "id:", "element", "do:", "tr", "append:", "openAt:with:"]
}),
$globals.TwitterSearch);


});
