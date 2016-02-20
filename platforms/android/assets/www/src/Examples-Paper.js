define("amber-ambercordova/Examples-Paper", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "bower_components/PhysicsJS/dist/physicsjs-full", "snap.svg", "bower_components/fabric.js/dist/fabric", "bower_components/paper/dist/paper-full"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,Physics,snapSvg
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Examples-Paper');
$core.packages["Examples-Paper"].innerEval = function (expr) { return eval(expr); };
$core.packages["Examples-Paper"].imports = ["Physics=bower_components/PhysicsJS/dist/physicsjs-full", "snapSvg=snap.svg", "bower_components/fabric.js/dist/fabric", "bower_components/paper/dist/paper-full"];
$core.packages["Examples-Paper"].transport = {"type":"amd","amdNamespace":"amber-ambercordova"};

$core.addClass('Fabric1', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "canvas",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new fabric.Canvas('myCanvas'); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canvas",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvas\x0a<return new fabric.Canvas('myCanvas'); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "circle",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");


var circle = new fabric.Circle({
  left: 100,
  top: 50,
  radius: 50
});

circle.setGradient('fill', {
  x1: 0,
  y1: circle.height / 2,
  x2: circle.width,
  y2: circle.height / 2,
  colorStops: {
    0: "red",
	0.2: "orange",
    1: "yellow"
  }
});

return circle;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"circle",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "circle\x0a<\x0a\x0avar circle = new fabric.Circle({\x0a  left: 100,\x0a  top: 50,\x0a  radius: 50\x0a});\x0a\x0acircle.setGradient('fill', {\x0a  x1: 0,\x0a  y1: circle.height / 2,\x0a  x2: circle.width,\x0a  y2: circle.height / 2,\x0a  colorStops: {\x0a    0: \x22red\x22,\x0a\x090.2: \x22orange\x22,\x0a    1: \x22yellow\x22\x0a  }\x0a});\x0a\x0areturn circle;\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._canvas())._add_(self._circle());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^self canvas add: self circle.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "canvas", "circle"]
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "main1",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

(function () {
        var canvas = new fabric.Canvas('myCanvas');
        canvas.add(new fabric.Circle({ radius: 30, fill: '#2f2', top: 50, left: 50 }));

        canvas.selectionColor = 'rgba(0,255,0,0.3)';
        canvas.selectionBorderColor = 'green';
        canvas.selectionLineWidth = 5;

        canvas.add(new fabric.Circle({ radius: 30, fill: 'yellow', top: 50, left: 125}));

        canvas.selectionColor = 'rgba(0,255,0,0.3)';
        canvas.selectionBorderColor = 'red';
        canvas.selectionLineWidth = 5;


        canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 50, left: 200 }));

        canvas.selectionColor = 'rgba(0,255,0,0.3)';
        canvas.selectionBorderColor = 'red';
        canvas.selectionLineWidth = 5;

    })();
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main1",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main1\x0a<\x0a(function () {\x0a        var canvas = new fabric.Canvas('myCanvas');\x0a        canvas.add(new fabric.Circle({ radius: 30, fill: '#2f2', top: 50, left: 50 }));\x0a\x0a        canvas.selectionColor = 'rgba(0,255,0,0.3)';\x0a        canvas.selectionBorderColor = 'green';\x0a        canvas.selectionLineWidth = 5;\x0a\x0a        canvas.add(new fabric.Circle({ radius: 30, fill: 'yellow', top: 50, left: 125}));\x0a\x0a        canvas.selectionColor = 'rgba(0,255,0,0.3)';\x0a        canvas.selectionBorderColor = 'red';\x0a        canvas.selectionLineWidth = 5;\x0a\x0a\x0a        canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 50, left: 200 }));\x0a\x0a        canvas.selectionColor = 'rgba(0,255,0,0.3)';\x0a        canvas.selectionBorderColor = 'red';\x0a        canvas.selectionLineWidth = 5;\x0a\x0a    })();\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "mainAsJSON",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $JSON(){return $globals.JSON||(typeof JSON=="undefined"?nil:JSON)}
function $Fabric1(){return $globals.Fabric1||(typeof Fabric1=="undefined"?nil:Fabric1)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($JSON())._stringify_($recv($Fabric1())._main());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mainAsJSON",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mainAsJSON\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^JSON stringify: Fabric1 main",
referencedClasses: ["JSON", "Fabric1"],
//>>excludeEnd("ide");
messageSends: ["stringify:", "main"]
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "mainAsSVG",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Fabric1(){return $globals.Fabric1||(typeof Fabric1=="undefined"?nil:Fabric1)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($Fabric1())._main())._toSVG();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mainAsSVG",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mainAsSVG\x0a\x22http://fabricjs.com/fabric-intro-part-1/\x22\x0a\x0a^Fabric1 main toSVG",
referencedClasses: ["Fabric1"],
//>>excludeEnd("ide");
messageSends: ["toSVG", "main"]
}),
$globals.Fabric1.klass);

$core.addMethod(
$core.method({
selector: "rectangle",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20
});
 ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectangle",{},$globals.Fabric1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rectangle\x0a\x22// create a rectangle object\x22\x0a<return new fabric.Rect({\x0a  left: 100,\x0a  top: 100,\x0a  fill: 'red',\x0a  width: 20,\x0a  height: 20\x0a});\x0a >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Fabric1.klass);


$core.addClass('Fabric2', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

// Fabric heart

canvas = new fabric.Canvas('myCanvas', { selection: false });
var path = new fabric.Path("M248.078,5.883c-36.691-14.739-77.771-0.839-98.517,31.125C128.817,5.044,87.735-8.856,51.043,5.883 C9.354,22.632-10.863,70.009,5.887,111.696c16.06,39.98,143.314,139.607,143.314,139.607l0.359,0.28l0.36-0.28 c0,0,127.251-99.627,143.314-139.607C309.986,70.009,289.768,22.632,248.078,5.883z");
var scale = 100 / path.width;
 path.set({ left: 20, top: 0, scaleX: scale, scaleY: scale,  fill: 'red', });

var path2 = new fabric.Path("M 0 0 a 25 25 0 1 0 0.00001 0 Z");

path2.set({ left: 200, top: 80, fill: 'yellow', stroke: 'blue', strokeWidth: 8, selectable: false, hasControls: false, hasBorders: false, lockScalingX: true, lockScalingY: true, lockRotation: true });


canvas.add(path, path2);
canvas.renderAll();

return(canvas.toSVG());;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Fabric2.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x22In the workspace do a prinIt of\x0a    Fabric2 main\x0a\x22\x0a\x0a<\x0a// Fabric heart\x0a\x0acanvas = new fabric.Canvas('myCanvas', { selection: false });\x0avar path = new fabric.Path(\x22M248.078,5.883c-36.691-14.739-77.771-0.839-98.517,31.125C128.817,5.044,87.735-8.856,51.043,5.883 C9.354,22.632-10.863,70.009,5.887,111.696c16.06,39.98,143.314,139.607,143.314,139.607l0.359,0.28l0.36-0.28 c0,0,127.251-99.627,143.314-139.607C309.986,70.009,289.768,22.632,248.078,5.883z\x22);\x0avar scale = 100 / path.width;\x0a path.set({ left: 20, top: 0, scaleX: scale, scaleY: scale,  fill: 'red', });\x0a\x0avar path2 = new fabric.Path(\x22M 0 0 a 25 25 0 1 0 0.00001 0 Z\x22);\x0a\x0apath2.set({ left: 200, top: 80, fill: 'yellow', stroke: 'blue', strokeWidth: 8, selectable: false, hasControls: false, hasBorders: false, lockScalingX: true, lockScalingY: true, lockRotation: true });\x0a\x0a\x0acanvas.add(path, path2);\x0acanvas.renderAll();\x0a\x0areturn(canvas.toSVG());\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Fabric2.klass);


$core.addClass('Paper1', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
		;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Paper1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a<\x0a// Get a reference to the canvas object\x0a\x09\x09var canvas = document.getElementById('myCanvas');\x0a\x09\x09// Create an empty project and a view for the canvas:\x0a\x09\x09paper.setup(canvas);\x0a\x09\x09// Create a Paper.js Path to draw a line into it:\x0a\x09\x09var path = new paper.Path();\x0a\x09\x09// Give the stroke a color\x0a\x09\x09path.strokeColor = 'black';\x0a\x09\x09var start = new paper.Point(100, 100);\x0a\x09\x09// Move to start and draw a line from there\x0a\x09\x09path.moveTo(start);\x0a\x09\x09// Note that the plus operator on Point objects does not work\x0a\x09\x09// in JavaScript. Instead, we need to call the add() function:\x0a\x09\x09path.lineTo(start.add([ 200, -50 ]));\x0a\x09\x09// Draw the view now:\x0a\x09\x09paper.view.draw();\x0a\x09\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Paper1.klass);


$core.addClass('Paper2', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var paper,canvas,aPath,start;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
canvas=$recv(document)._getElementById_("myCanvas");
paper=$recv(require)._value_("paper/paper-full");
$recv(paper)._setup_(canvas);
aPath=$recv($recv(paper)._Path())._new();
$recv(aPath)._inspect();
$recv(aPath)._strokeColor_("red");
start=$recv($recv(paper)._Point())._newValue_value_((100),(200));
$recv(aPath)._moveTo_(start);
$recv(aPath)._lineTo_($recv(start)._add_([(200), (-50)]));
$recv($recv(paper)._view())._draw();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{paper:paper,canvas:canvas,aPath:aPath,start:start},$globals.Paper2.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a| paper canvas aPath start |\x0a   canvas := document getElementById: 'myCanvas'.\x0a\x0a   \x22Create an empty project and a view for the canvas:\x22\x0a    paper := require value: 'paper/paper-full'.\x0a    paper setup: canvas.\x0a\x0a    aPath := paper Path new.\x0a\x0a\x09\x22Give the stroke a color\x22\x0a\x09aPath inspect.\x0a\x09aPath strokeColor: 'red'.\x0a\x0a\x09start := (paper Point) newValue: 100 value: 200.\x0a\x0a\x09aPath moveTo: start.\x0a\x0a\x09aPath lineTo: (start add: #(200 -50)).\x0a\x09paper view draw.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getElementById:", "value:", "setup:", "new", "Path", "inspect", "strokeColor:", "newValue:value:", "Point", "moveTo:", "lineTo:", "add:", "draw", "view"]
}),
$globals.Paper2.klass);

$core.addMethod(
$core.method({
selector: "mainJS",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");

// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
		;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mainJS",{},$globals.Paper2.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mainJS\x0a<\x0a// Get a reference to the canvas object\x0a\x09\x09var canvas = document.getElementById('myCanvas');\x0a\x09\x09// Create an empty project and a view for the canvas:\x0a\x09\x09paper.setup(canvas);\x0a\x09\x09// Create a Paper.js Path to draw a line into it:\x0a\x09\x09var path = new paper.Path();\x0a\x09\x09// Give the stroke a color\x0a\x09\x09path.strokeColor = 'black';\x0a\x09\x09var start = new paper.Point(100, 100);\x0a\x09\x09// Move to start and draw a line from there\x0a\x09\x09path.moveTo(start);\x0a\x09\x09// Note that the plus operator on Point objects does not work\x0a\x09\x09// in JavaScript. Instead, we need to call the add() function:\x0a\x09\x09path.lineTo(start.add([ 200, -50 ]));\x0a\x09\x09// Draw the view now:\x0a\x09\x09paper.view.draw();\x0a\x09\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Paper2.klass);


$core.addClass('Physics1', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");



//
// PhysicsJS
// A modular, extendable, and easy-to-use physics engine for javascript
//
// Use the select box in the top right to see more examples!
//
// Smalltalk:
// | Physics |
// Physics := (require value: 'physicsjs/physicsjs-full-0.6.0') .
// JavaScript
// require('physicsjs/physicsjs-full-0.6.0')


//var Physics = require('physicsjs/physicsjs-full');

Physics(function (world) {

    var viewWidth = window.innerWidth
        ,viewHeight = window.innerHeight
        // center of the window
        ,center = Physics.vector(viewWidth, viewHeight).mult(0.5)
        // bounds of the window
        ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
        ,attractor
        ,edgeBounce
        ,renderer
        ;

    // create a renderer
    renderer = Physics.renderer('canvas', {
        el: 'viewport'
        ,width: viewWidth
        ,height: viewHeight
    });

    // add the renderer
    world.add(renderer);
    // render on each step
    world.on('step', function () {
        world.render();
    });

    // attract bodies to a point
    attractor = Physics.behavior('attractor', {
        pos: center
        ,strength: .1
        ,order: 1
    });

    // constrain objects to these bounds
    edgeBounce = Physics.behavior('edge-collision-detection', {
        aabb: viewportBounds
        ,restitution: 0.2
        ,cof: 0.8
    });

    // resize events
    window.addEventListener('resize', function () {

        viewWidth = window.innerWidth;
        viewHeight = window.innerHeight;

        renderer.el.width = viewWidth;
        renderer.el.height = viewHeight;

        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
        // update the boundaries
        edgeBounce.setAABB(viewportBounds);

    }, true);

    // move the attractor position to match the mouse coords
    renderer.el.addEventListener('mousemove', function( e ){
        attractor.position({ x: e.pageX, y: e.pageY });
    });

    // some fun colors
    var colors = [
        '#b58900',
        '#cb4b16',
        '#dc322f',
        '#d33682',
        '#6c71c4',
        '#268bd2',
        '#2aa198',
        '#859900'
    ];
    // create some bodies
    var l = 10;
    var bodies = [];
    var v = Physics.vector(0, 300);
    var b, r;

    while ( l-- ) {
        r = (20 + Math.random()*30)|0;
        b = Physics.body('circle', {
            radius: r
            ,mass: r
            ,x: v.x + center.x
            ,y: v.y + center.y
            ,vx: v.perp().mult(0.0001).x
            ,vx: v.y
            ,styles: {
                fillStyle: colors[ l % colors.length ]
            }
        });
        bodies.push(b);
        v.perp(true)
            .mult(10000)
            .rotate(l / 3);
    }

    // add things to the world
    world.add( bodies );
    world.add([
        Physics.behavior('newtonian', {
            strength: 0.005
            ,min: 10
        })
        ,Physics.behavior('body-impulse-response')
        ,edgeBounce
        ,attractor
    ]);

    // subscribe to ticker to advance the simulation
    Physics.util.ticker.on(function( time ) {
        world.step( time );
    });

    // start the ticker
    Physics.util.ticker.start();
});

// go ahead... expand the code and play around...

;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{},$globals.Physics1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a<\x0a\x0a\x0a//\x0a// PhysicsJS\x0a// A modular, extendable, and easy-to-use physics engine for javascript\x0a//\x0a// Use the select box in the top right to see more examples!\x0a//\x0a// Smalltalk:\x0a// | Physics |\x0a// Physics := (require value: 'physicsjs/physicsjs-full-0.6.0') .\x0a// JavaScript\x0a// require('physicsjs/physicsjs-full-0.6.0')\x0a\x0a\x0a//var Physics = require('physicsjs/physicsjs-full');\x0a\x0aPhysics(function (world) {\x0a\x0a    var viewWidth = window.innerWidth\x0a        ,viewHeight = window.innerHeight\x0a        // center of the window\x0a        ,center = Physics.vector(viewWidth, viewHeight).mult(0.5)\x0a        // bounds of the window\x0a        ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)\x0a        ,attractor\x0a        ,edgeBounce\x0a        ,renderer\x0a        ;\x0a\x0a    // create a renderer\x0a    renderer = Physics.renderer('canvas', {\x0a        el: 'viewport'\x0a        ,width: viewWidth\x0a        ,height: viewHeight\x0a    });\x0a\x0a    // add the renderer\x0a    world.add(renderer);\x0a    // render on each step\x0a    world.on('step', function () {\x0a        world.render();\x0a    });\x0a\x0a    // attract bodies to a point\x0a    attractor = Physics.behavior('attractor', {\x0a        pos: center\x0a        ,strength: .1\x0a        ,order: 1\x0a    });\x0a\x0a    // constrain objects to these bounds\x0a    edgeBounce = Physics.behavior('edge-collision-detection', {\x0a        aabb: viewportBounds\x0a        ,restitution: 0.2\x0a        ,cof: 0.8\x0a    });\x0a\x0a    // resize events\x0a    window.addEventListener('resize', function () {\x0a\x0a        viewWidth = window.innerWidth;\x0a        viewHeight = window.innerHeight;\x0a\x0a        renderer.el.width = viewWidth;\x0a        renderer.el.height = viewHeight;\x0a\x0a        viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);\x0a        // update the boundaries\x0a        edgeBounce.setAABB(viewportBounds);\x0a\x0a    }, true);\x0a\x0a    // move the attractor position to match the mouse coords\x0a    renderer.el.addEventListener('mousemove', function( e ){\x0a        attractor.position({ x: e.pageX, y: e.pageY });\x0a    });\x0a\x0a    // some fun colors\x0a    var colors = [\x0a        '#b58900',\x0a        '#cb4b16',\x0a        '#dc322f',\x0a        '#d33682',\x0a        '#6c71c4',\x0a        '#268bd2',\x0a        '#2aa198',\x0a        '#859900'\x0a    ];\x0a    // create some bodies\x0a    var l = 10;\x0a    var bodies = [];\x0a    var v = Physics.vector(0, 300);\x0a    var b, r;\x0a\x0a    while ( l-- ) {\x0a        r = (20 + Math.random()*30)|0;\x0a        b = Physics.body('circle', {\x0a            radius: r\x0a            ,mass: r\x0a            ,x: v.x + center.x\x0a            ,y: v.y + center.y\x0a            ,vx: v.perp().mult(0.0001).x\x0a            ,vx: v.y\x0a            ,styles: {\x0a                fillStyle: colors[ l % colors.length ]\x0a            }\x0a        });\x0a        bodies.push(b);\x0a        v.perp(true)\x0a            .mult(10000)\x0a            .rotate(l / 3);\x0a    }\x0a\x0a    // add things to the world\x0a    world.add( bodies );\x0a    world.add([\x0a        Physics.behavior('newtonian', {\x0a            strength: 0.005\x0a            ,min: 10\x0a        })\x0a        ,Physics.behavior('body-impulse-response')\x0a        ,edgeBounce\x0a        ,attractor\x0a    ]);\x0a\x0a    // subscribe to ticker to advance the simulation\x0a    Physics.util.ticker.on(function( time ) {\x0a        world.step( time );\x0a    });\x0a\x0a    // start the ticker\x0a    Physics.util.ticker.start();\x0a});\x0a\x0a// go ahead... expand the code and play around...\x0a\x0a\x0a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Physics1.klass);


$core.addClass('SVG1', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var draw,rect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
draw=$recv(snapSvg)._value_("#svg");
$1=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=1;
//>>excludeEnd("ctx");
rect=$recv($1)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._fill_("#a03");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=1;
//>>excludeEnd("ctx");
$2=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=2;
//>>excludeEnd("ctx");
rect=$recv($2)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=2;
//>>excludeEnd("ctx");
$3=rect;
$recv($3)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=2;
//>>excludeEnd("ctx");
$recv($3)._fill_("#bbb");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._dx_((120));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dx:"]=1;
//>>excludeEnd("ctx");
$5=$recv($recv(draw)._rect())._width_((100));
$recv($5)._height_((100));
$recv($5)._fill_("#709");
$6=$recv($5)._dx_((240));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{draw:draw,rect:rect},$globals.SVG1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a\x0a| draw rect |\x0a\x0a\x22http://documentup.com/wout/svg.js#usage/create-a-svg-document\x22\x0a\x0adraw := snapSvg value: '#svg'.\x0a\x22draw size: 500 y: 150.\x22\x0arect := draw rect width: 100.\x0arect height: 100.\x0arect fill: '#a03'.\x0a\x0arect := draw rect width: 100.\x0arect height: 100; fill: '#bbb'; dx: 120.\x0a\x0a(draw rect width: 100) height: 100; fill: '#709'; dx: 240.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "width:", "rect", "height:", "fill:", "dx:"]
}),
$globals.SVG1.klass);


$core.addClass('SnapSVG1', $globals.Object, [], 'Examples-Paper');

$core.addMethod(
$core.method({
selector: "main",
protocol: 'not yet classified',
fn: function (){
var self=this;
var draw,rect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
draw=$recv(snapSvg)._value_("#svg");
$1=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=1;
//>>excludeEnd("ctx");
rect=$recv($1)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._fill_("#a03");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=1;
//>>excludeEnd("ctx");
$2=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=2;
//>>excludeEnd("ctx");
rect=$recv($2)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=2;
//>>excludeEnd("ctx");
$3=rect;
$recv($3)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=2;
//>>excludeEnd("ctx");
$recv($3)._fill_("#bbb");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._dx_((120));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dx:"]=1;
//>>excludeEnd("ctx");
$5=$recv($recv(draw)._rect())._width_((100));
$recv($5)._height_((100));
$recv($5)._fill_("#709");
$6=$recv($5)._dx_((240));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main",{draw:draw,rect:rect},$globals.SnapSVG1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main\x0a| draw rect |\x0a\x0a\x22http://documentup.com/wout/svg.js#usage/create-a-svg-document\x22\x0a\x0adraw := (snapSvg value: '#svg').\x0a\x22draw size: 500 y: 150.\x22\x0arect := draw rect width: 100.\x0arect height: 100.\x0arect fill: '#a03'.\x0a\x0arect := draw rect width: 100.\x0arect height: 100; fill: '#bbb'; dx: 120.\x0a\x0a(draw rect width: 100) height: 100; fill: '#709'; dx: 240.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "width:", "rect", "height:", "fill:", "dx:"]
}),
$globals.SnapSVG1.klass);

$core.addMethod(
$core.method({
selector: "main0",
protocol: 'not yet classified',
fn: function (){
var self=this;
var s,bigCircle,smallCircle;
function $Snap(){return $globals.Snap||(typeof Snap=="undefined"?nil:Snap)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
s=$recv($Snap())._value_value_((300),(600));
bigCircle=$recv(s)._circle_value_value_((150),(150),(100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["circle:value:value:"]=1;
//>>excludeEnd("ctx");
$recv(bigCircle)._attr_($globals.HashedCollection._newFromPairs_(["fill","#bada55","stroke","#000","strokeWidth",(5)]));
smallCircle=$recv(s)._circle_value_value_((100),(150),(70));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main0",{s:s,bigCircle:bigCircle,smallCircle:smallCircle},$globals.SnapSVG1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main0\x0a\x22translation to Smalltalk points 1 to 4 of\x0ahttp://snapsvg.io/start/ \x22\x0a\x0a| s bigCircle smallCircle |\x0a\x0as := Snap value:  300 value: 600.\x0abigCircle := s circle: 150 value: 150 value: 100.\x0abigCircle attr: #{'fill' -> '#bada55'.  'stroke' -> '#000'. 'strokeWidth' -> 5}.\x0asmallCircle := s circle: 100 value: 150 value: 70.",
referencedClasses: ["Snap"],
//>>excludeEnd("ide");
messageSends: ["value:value:", "circle:value:value:", "attr:"]
}),
$globals.SnapSVG1.klass);

$core.addMethod(
$core.method({
selector: "main2",
protocol: 'not yet classified',
fn: function (){
var self=this;
var draw,rect;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
draw=$recv(snapSvg)._value_("#svg");
$1=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=1;
//>>excludeEnd("ctx");
rect=$recv($1)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=1;
//>>excludeEnd("ctx");
$recv(rect)._fill_("#a03");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=1;
//>>excludeEnd("ctx");
$2=$recv(draw)._rect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rect"]=2;
//>>excludeEnd("ctx");
rect=$recv($2)._width_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width:"]=2;
//>>excludeEnd("ctx");
$3=rect;
$recv($3)._height_((100));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height:"]=2;
//>>excludeEnd("ctx");
$recv($3)._fill_("#bbb");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fill:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._dx_((120));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dx:"]=1;
//>>excludeEnd("ctx");
$5=$recv($recv(draw)._rect())._width_((100));
$recv($5)._height_((100));
$recv($5)._fill_("#709");
$6=$recv($5)._dx_((240));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"main2",{draw:draw,rect:rect},$globals.SnapSVG1.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "main2\x0a| draw rect |\x0a\x0a\x22http://documentup.com/wout/svg.js#usage/create-a-svg-document\x22\x0a\x0adraw := (snapSvg value: '#svg').\x0a\x22draw size: 500 y: 150.\x22\x0arect := draw rect width: 100.\x0arect height: 100.\x0arect fill: '#a03'.\x0a\x0arect := draw rect width: 100.\x0arect height: 100; fill: '#bbb'; dx: 120.\x0a\x0a(draw rect width: 100) height: 100; fill: '#709'; dx: 240.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "width:", "rect", "height:", "fill:", "dx:"]
}),
$globals.SnapSVG1.klass);

});
