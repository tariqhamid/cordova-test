define("amber-ambercordova/TodoList", ["amber/boot", "amber/web/Web", "amber_core/Kernel-Objects"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('TodoList');
$core.packages["TodoList"].innerEval = function (expr) { return eval(expr); };
$core.packages["TodoList"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('Todo', $globals.Widget, ['isDone', 'text', 'id', 'onTodoChanged', 'onDeleteClicked'], 'TodoList');
$core.addMethod(
$core.method({
selector: "=",
protocol: 'testing',
fn: function (aTodo){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq($recv(aTodo)._id());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"=",{aTodo:aTodo},$globals.Todo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTodo"],
source: "= aTodo\x0a\x09^ self id = aTodo id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "id"]
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@id"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "id:",
protocol: 'accessing',
fn: function (aString){
"use strict";

var self=this;
self["@id"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "id: aString\x0a\x09id := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Todo.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@isDone"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Todo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09isDone := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "isDone",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@isDone"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isDone\x0a\x09^ isDone",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "isDone:",
protocol: 'accessing',
fn: function (aBool){
"use strict";

var self=this;
self["@isDone"]=aBool;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "isDone: aBool\x0a\x09isDone := aBool.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "onDeleteClickedDo:",
protocol: 'accessing',
fn: function (aBlock){
"use strict";

var self=this;
self["@onDeleteClicked"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onDeleteClickedDo: aBlock\x0a\x09onDeleteClicked := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "onTodoChangedDo:",
protocol: 'accessing',
fn: function (aBlock){
"use strict";

var self=this;
self["@onTodoChanged"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onTodoChangedDo: aBlock\x0a\x09onTodoChanged := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
var input,delete_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$6,$5,$4,$7,$8,$9,$2,$10;
$1=$recv(html)._li();
$recv($1)._id_(self._id());
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
$recv($3)._type_("checkbox");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._toggleIsDone();
$recv(self["@onTodoChanged"])._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$6=$recv(input)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._next();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["next"]=1;
//>>excludeEnd("ctx");
return $recv($5)._toggleClass_("done");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
input=$4;
input;
$7=$recv(html)._span();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["span"]=1;
//>>excludeEnd("ctx");
$recv($7)._with_(self["@text"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$8=$recv(html)._span();
$recv($8)._with_("  [x]");
$9=$recv($8)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@onDeleteClicked"])._value_(self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
delete_=$9;
return delete_;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$10=self["@isDone"];
if($core.assert($10)){
$recv(input)._at_put_("checked","checked");
$recv($recv($recv(input)._asJQuery())._next())._addClass_("done");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,input:input,delete_:delete_},$globals.Todo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09| input delete |\x0a\x09html li\x0a\x09\x09id: self id;\x0a\x09\x09with: [\x0a                  input := html input\x0a                  \x09type: 'checkbox';\x0a                  \x09onClick: [\x0a                          self toggleIsDone.\x0a                          onTodoChanged value: self. \x0a                          (input asJQuery next) toggleClass: 'done' ].\x0a\x09\x09html span with: text .\x0a                delete := html span\x0a                  with: '  [x]';\x0a                  onClick: [ onDeleteClicked value: self ]].\x0a\x09isDone ifTrue: [ \x0a          input at: 'checked' put: 'checked'.\x0a          (input asJQuery next) addClass: 'done'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "li", "id", "with:", "type:", "input", "onClick:", "toggleIsDone", "value:", "toggleClass:", "next", "asJQuery", "span", "ifTrue:", "at:put:", "addClass:"]
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "text",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@text"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "text\x0a\x09^ text",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "text:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@text"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "text: anObject\x0a\x09text := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Todo);

$core.addMethod(
$core.method({
selector: "toggleIsDone",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._isDone_($recv(self["@isDone"])._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleIsDone",{},$globals.Todo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleIsDone\x0a\x09self isDone: isDone not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isDone:", "not"]
}),
$globals.Todo);


$core.addMethod(
$core.method({
selector: "fromDictionary:",
protocol: 'not yet classified',
fn: function (aDict){
"use strict";

var self=this;
var todo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
todo=self._new();
$1=todo;
$2=$recv(aDict)._at_("id");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_($2);
$3=todo;
$4=$recv(aDict)._at_("text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$recv($3)._text_($4);
$recv(todo)._isDone_($recv(aDict)._at_("isDone"));
$5=todo;
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:",{aDict:aDict,todo:todo},$globals.Todo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDict"],
source: "fromDictionary: aDict\x0a\x09| todo |\x0a\x09todo := self new.\x0a\x09todo id: (aDict at: 'id').\x0a\x09todo text: (aDict at: 'text').\x0a\x09todo isDone: (aDict at: 'isDone').\x0a\x09^ todo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "id:", "at:", "text:", "isDone:"]
}),
$globals.Todo.klass);

$core.addMethod(
$core.method({
selector: "fromDictionary:withCallback:",
protocol: 'not yet classified',
fn: function (aDict,aBlock){
"use strict";

var self=this;
var todo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
todo=self._fromDictionary_(aDict);
$recv(todo)._onTodoChangedDo_(aBlock);
$1=todo;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withCallback:",{aDict:aDict,aBlock:aBlock,todo:todo},$globals.Todo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDict", "aBlock"],
source: "fromDictionary: aDict withCallback: aBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09^ todo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromDictionary:", "onTodoChangedDo:"]
}),
$globals.Todo.klass);

$core.addMethod(
$core.method({
selector: "fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",
protocol: 'not yet classified',
fn: function (aDict,aBlock,oBlock){
"use strict";

var self=this;
var todo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
todo=self._fromDictionary_(aDict);
$recv(todo)._onTodoChangedDo_(aBlock);
$recv(todo)._onDeleteClickedDo_(oBlock);
$1=todo;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromDictionary:withTodoChangedCallback:withDeleteClickedCallback:",{aDict:aDict,aBlock:aBlock,oBlock:oBlock,todo:todo},$globals.Todo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDict", "aBlock", "oBlock"],
source: "fromDictionary: aDict withTodoChangedCallback: aBlock withDeleteClickedCallback: oBlock\x0a\x09| todo |\x0a\x09todo := self fromDictionary: aDict.\x0a\x09todo onTodoChangedDo: aBlock.\x0a\x09todo onDeleteClickedDo: oBlock.\x0a\x09^ todo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fromDictionary:", "onTodoChangedDo:", "onDeleteClickedDo:"]
}),
$globals.Todo.klass);

$core.addMethod(
$core.method({
selector: "newWithText:",
protocol: 'not yet classified',
fn: function (aString){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._text_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWithText:",{aString:aString},$globals.Todo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "newWithText: aString\x0a\x09^ self new text: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["text:", "new"]
}),
$globals.Todo.klass);


$core.addClass('TodoList', $globals.Widget, ['todos', 'container', 'count'], 'TodoList');
$core.addMethod(
$core.method({
selector: "addTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aTodo)._id_($recv(self["@count"])._asString());
$recv(aTodo)._onTodoChangedDo_((function(todo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@todos"])._at_put_($recv(self["@todos"])._indexOf_(todo),todo);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aTodo)._onDeleteClickedDo_((function(todo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._removeTodo_(todo);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({todo:todo},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@todos"])._add_(aTodo);
$recv(aTodo)._appendToJQuery_($recv(self["@container"])._asJQuery());
self["@count"]=$recv(self["@count"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTodo:",{aTodo:aTodo},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTodo"],
source: "addTodo: aTodo\x0a\x09aTodo id: count asString.\x0a\x09aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].\x0a\x09aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].\x0a       \x09todos add: aTodo.\x0a       \x09aTodo appendToJQuery: container asJQuery.\x0a\x09count := count + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "asString", "onTodoChangedDo:", "at:put:", "indexOf:", "onDeleteClickedDo:", "removeTodo:", "add:", "appendToJQuery:", "asJQuery", "+"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09self appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
"use strict";

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
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "handleInput:",
protocol: 'events',
fn: function (anEvent){
"use strict";

var self=this;
var text,todo;
function $Todo(){return $globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
text=$recv($recv(anEvent)._target())._value();
todo=$recv($Todo())._newWithText_(text);
self._addTodo_(todo);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleInput:",{anEvent:anEvent,text:text,todo:todo},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "handleInput: anEvent\x0a\x09| text todo |\x0a        text := anEvent target value.\x0a        todo := Todo newWithText: text.\x0a \x09self addTodo: todo",
referencedClasses: ["Todo"],
//>>excludeEnd("ide");
messageSends: ["value", "target", "newWithText:", "addTodo:"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
"use strict";

var self=this;
function $TodoStorage(){return $globals.TodoStorage||(typeof TodoStorage=="undefined"?nil:TodoStorage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.TodoList.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@todos"]=$recv($TodoStorage())._new();
self["@container"]="div#todos ol";
$1=$recv($recv(self["@todos"])._size()).__eq((0));
if($core.assert($1)){
self["@count"]=(1);
} else {
self["@count"]=$recv($recv($recv($recv(self["@todos"])._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._id())._asNumber();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
})))._sort())._last()).__plus((1));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09todos := TodoStorage new.\x0a\x09container := 'div#todos ol'.\x0a\x09count := todos size = 0 ifTrue: [ 1 ] ifFalse: [( todos collect: [ :each | each id asNumber ]) sort last + 1 ]",
referencedClasses: ["TodoStorage"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "ifTrue:ifFalse:", "=", "size", "+", "last", "sort", "collect:", "asNumber", "id"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "removeTodo:",
protocol: 'adding/removing',
fn: function (aTodo){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@todos"])._remove_(aTodo);
$recv($recv("li#".__comma($recv(aTodo)._id()))._asJQuery())._remove();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeTodo:",{aTodo:aTodo},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTodo"],
source: "removeTodo: aTodo\x0a\x09todos remove: aTodo.\x0a\x09('li#', aTodo id) asJQuery remove",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "remove", "asJQuery", ",", "id"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderBodyOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_("body");
$recv($1)._class_("section");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderFormOn_(html);
return self._renderTodosOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBodyOn:",{html:html},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBodyOn: html\x0a\x09html div\x0a\x09\x09id: 'body';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [\x0a                  self renderFormOn: html.\x0a                  self renderTodosOn: html ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", "with:", "renderFormOn:", "renderTodosOn:"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderFooterOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_("footer");
$recv($1)._class_("section");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_("Example Todo application for Amber Smalltalk by rbistolfi and others");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderFooterOn:",{html:html},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderFooterOn: html\x0a\x09html div\x0a\x09\x09id: 'footer';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [ html p with: 'Example Todo application for Amber Smalltalk by rbistolfi and others' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", "with:", "p"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
var input,defaultText;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$4,$2;
defaultText="What needs to be done?";
$1=$recv(html)._div();
$recv($1)._id_("form");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._input();
$recv($3)._type_("text");
$4=$recv($3)._onKeyUp_((function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv($recv(event)._keyCode()).__eq((13));
if($core.assert($5)){
self._handleInput_(event);
return $recv($recv(input)._asJQuery())._val_("");
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,2)});
//>>excludeEnd("ctx");
}));
input=$4;
return input;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(input)._element())._placeholder_(defaultText);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,input:input,defaultText:defaultText},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderFormOn: html\x0a\x09| input defaultText |\x0a\x09defaultText := 'What needs to be done?'.\x0a\x09html div\x0a\x09\x09id: 'form';\x0a\x09\x09with: [\x0a                   input := html input\x0a                  \x09type: 'text';\x0a                  \x09onKeyUp: [ :event |\x0a                                  (event keyCode = 13) ifTrue: [\x0a                                    self handleInput: event.\x0a                                    input asJQuery val: '' ] ] ].\x0a\x09input element placeholder: defaultText.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "type:", "input", "onKeyUp:", "ifTrue:", "=", "keyCode", "handleInput:", "val:", "asJQuery", "placeholder:", "element"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderHeaderOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_("header");
$recv($1)._class_("section");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._h1())._with_("Todo list");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderHeaderOn:",{html:html},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderHeaderOn: html\x0a\x09html div\x0a\x09\x09id: 'header';\x0a\x09\x09class: 'section';\x0a\x09\x09with: [ html h1 with: 'Todo list' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", "with:", "h1"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_("application");
$recv($1)._class_("flex-item");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderHeaderOn_(html);
self._renderBodyOn_(html);
return self._renderFooterOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09id: 'application';\x0a\x09\x09class: 'flex-item';\x0a\x09\x09with: [\x0a                  self renderHeaderOn: html.\x0a                  self renderBodyOn: html.\x0a                  self renderFooterOn: html. ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "class:", "with:", "renderHeaderOn:", "renderBodyOn:", "renderFooterOn:"]
}),
$globals.TodoList);

$core.addMethod(
$core.method({
selector: "renderTodosOn:",
protocol: 'rendering',
fn: function (html){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._div();
$recv($1)._id_("todos");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._ol())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@todos"])._do_((function(aTodo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(aTodo)._onTodoChangedDo_((function(todo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv(self["@todos"])._at_put_($recv(self["@todos"])._indexOf_(todo),todo);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({todo:todo},$ctx4,4)});
//>>excludeEnd("ctx");
}));
$recv(aTodo)._onDeleteClickedDo_((function(todo){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._removeTodo_(todo);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({todo:todo},$ctx4,5)});
//>>excludeEnd("ctx");
}));
return $recv(aTodo)._renderOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({aTodo:aTodo},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTodosOn:",{html:html},$globals.TodoList)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTodosOn: html\x0a\x09html div\x0a\x09\x09id: 'todos';\x0a\x09\x09with: [\x0a                  html ol\x0a                  \x09with: [ todos do: [ :aTodo | \x0a                                           aTodo onTodoChangedDo: [ :todo | todos at: (todos indexOf: todo) put: todo ].\x0a\x09                                   aTodo onDeleteClickedDo: [ :todo | self removeTodo: todo ].\x0a                                           aTodo renderOn: html ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "ol", "do:", "onTodoChangedDo:", "at:put:", "indexOf:", "onDeleteClickedDo:", "removeTodo:", "renderOn:"]
}),
$globals.TodoList);


$core.addMethod(
$core.method({
selector: "run",
protocol: 'not yet classified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.TodoList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09self new appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.TodoList.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.TodoList.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.TodoList.klass);


$core.addClass('TodoStorage', $globals.Object, ['storage', 'array'], 'TodoList');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'adding/removing',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@array"])._add_(anObject);
self._save();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{anObject:anObject},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "add: anObject\x0a\x09array add: anObject.\x0a\x09self save.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "save"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "at:",
protocol: 'accessing',
fn: function (anIndex){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._at_(anIndex);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:",{anIndex:anIndex},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "at: anIndex\x0a\x09^ array at: anIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "at:put:",
protocol: 'accessing',
fn: function (anIndex,anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@array"])._at_put_(anIndex,anObject);
self._save();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:put:",{anIndex:anIndex,anObject:anObject},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "anObject"],
source: "at: anIndex put: anObject\x0a\x09array at: anIndex put: anObject.\x0a\x09self save",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "save"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "collect:",
protocol: 'iterating',
fn: function (aBlock){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._collect_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collect:",{aBlock:aBlock},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "collect: aBlock\x0a\x09^ array collect: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "detect:",
protocol: 'iterating',
fn: function (aBlock){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._detect_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detect:",{aBlock:aBlock},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "detect: aBlock\x0a\x09^ array detect: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'iterating',
fn: function (aBlock){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@array"])._do_(aBlock);
self._save();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09array do: aBlock.\x0a\x09self save.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "save"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "getArray",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var anArray,aJSONArray;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $Todo(){return $globals.Todo||(typeof Todo=="undefined"?nil:Todo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
aJSONArray=$recv(self["@storage"])._getItem_("TodoList");
$1=$recv($recv(aJSONArray)._isNil())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aJSONArray).__eq("");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
anArray=self._initializeStorage();
} else {
anArray=$recv($Smalltalk())._readJSObject_($recv($recv(window)._JSON())._parse_(aJSONArray));
};
$2=$recv(anArray)._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Todo())._fromDictionary_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getArray",{anArray:anArray,aJSONArray:aJSONArray},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getArray\x0a\x09| anArray aJSONArray |\x0a\x09aJSONArray := storage getItem: 'TodoList'.\x0a\x09anArray := (aJSONArray isNil or: [aJSONArray = '']) ifTrue: [ self initializeStorage ] \x0a\x09                      ifFalse: [ Smalltalk  \x0a\x09\x09\x09\x09\x09\x09                readJSObject: (window JSON parse: aJSONArray)\x0a                                    ].\x0a\x09^ anArray collect: [ :each | Todo fromDictionary: each ]",
referencedClasses: ["Smalltalk", "Todo"],
//>>excludeEnd("ide");
messageSends: ["getItem:", "ifTrue:ifFalse:", "or:", "isNil", "=", "initializeStorage", "readJSObject:", "parse:", "JSON", "collect:", "fromDictionary:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "indexOf:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._indexOf_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"indexOf:",{anObject:anObject},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "indexOf: anObject\x0a\x09^ array indexOf: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@storage"]=$recv(window)._localStorage();
self["@array"]=self._getArray();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09storage := window localStorage.\x0a\x09array := self getArray.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localStorage", "getArray"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "initializeStorage",
protocol: 'initializing',
fn: function (){
"use strict";

var self=this;
var anArray;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
anArray=$recv($Array())._new();
$recv(self["@storage"])._setItem_value_("TodoList",$recv(anArray)._asJSON());
$1=anArray;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeStorage",{anArray:anArray},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeStorage\x0a\x09| anArray |\x0a\x09anArray := Array new.\x0a\x09storage setItem: 'TodoList' value: anArray asJSON.\x0a\x09^ anArray",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new", "setItem:value:", "asJSON"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "lenght",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lenght",{},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lenght\x0a\x09^ self size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "remove:",
protocol: 'adding/removing',
fn: function (anObject){
"use strict";

var self=this;
var d;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
d=$recv(self["@array"])._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._asJSON();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJSON"]=1;
//>>excludeEnd("ctx");
return $recv($1).__eq($recv(anObject)._asJSON());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@array"])._remove_(d);
self._save();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remove:",{anObject:anObject,d:d},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "remove: anObject\x0a\x09| d |\x0a\x09d := array detect: [ :each | each asJSON = anObject asJSON ]. \x0a\x09array remove: d.\x0a\x09self save",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "=", "asJSON", "remove:", "save"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "save",
protocol: 'persistence',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@storage"])._setItem_value_("TodoList",$recv(self["@array"])._asJSONString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"save",{},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "save\x0a\x09storage setItem: 'TodoList' value: array asJSONString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setItem:value:", "asJSONString"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "select:",
protocol: 'iterating',
fn: function (aBlock){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._select_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:",{aBlock:aBlock},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "select: aBlock\x0a\x09^ array select: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "setArray",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._save();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setArray",{},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setArray\x0a\x09^ self save",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save"]
}),
$globals.TodoStorage);

$core.addMethod(
$core.method({
selector: "size",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@array"])._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size",{},$globals.TodoStorage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "size\x0a\x09^ array size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.TodoStorage);


});
