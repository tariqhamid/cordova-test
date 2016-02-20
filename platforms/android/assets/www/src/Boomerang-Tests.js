define("amber-ambercordova/Boomerang-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Boomerang-Tests');
$core.packages["Boomerang-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Boomerang-Tests"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('BoomerangParseWordsAndArraysTest', $globals.TestCase, [], 'Boomerang-Tests');
$core.addMethod(
$core.method({
selector: "testParseTheAsTheIdentityFunction",
protocol: 'tests',
fn: function (){
var self=this;
var iterator,item;
function $StringBoomerang(){return $globals.StringBoomerang||(typeof StringBoomerang=="undefined"?nil:StringBoomerang)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
iterator=$recv($recv($StringBoomerang())._from_("the"))._parse_(["the"]);
item=$recv(iterator)._next();
self._assert_($recv(item).__eq_eq((7)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testParseTheAsTheIdentityFunction",{iterator:iterator,item:item},$globals.BoomerangParseWordsAndArraysTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testParseTheAsTheIdentityFunction\x0a\x0a\x09| iterator item |\x0a\x09iterator := (StringBoomerang from: 'the') parse: #('the').\x0a\x09item := iterator next.\x0a\x09self assert: item == 7",
referencedClasses: ["StringBoomerang"],
//>>excludeEnd("ide");
messageSends: ["parse:", "from:", "next", "assert:", "=="]
}),
$globals.BoomerangParseWordsAndArraysTest);


});
