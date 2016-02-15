/* DO NOT EDIT! This file is generated. */

var require;
if (!require) require = {config: function (x) {require = x;}};
require.config({
  "paths": {
    "typeahead": "bower_components/typeahead.js/dist/typeahead.jquery",
    "helios/showdown": "bower_components/showdown/src/showdown",
    "requireJS": "node_modules/requirejs/require",
    "require-css": "bower_components/require-css",
    "jquery": "bower_components/jquery/dist/jquery",
    "jquery-ui": "bower_components/jquery-ui/jquery-ui",
    "codemirror": "bower_components/codemirror",
    "bootstrap": "bower_components/bootstrap/dist",
    "mousetrap": "bower_components/mousetrap/mousetrap",
    "jquery.blockUI": "bower_components/blockui/jquery.blockUI",
    "socket.io": "bower_components/socket.io-client/socket.io",
    "snap.svg": "bower_components/snap.svg/dist/snap.svg",
    "sevenSeg": "sevenSeg.js/sevenSeg",
    "notifyjs": "bower_components/notify.js/notify",
    "linda-client": "node_modules/linda/lib/linda-client",
    "knockout": "bower_components/knockout/dist/knockout",
    "silk": "bower_components/silk/src",
    "helios": "bower_components/helios/src",
    "helios/resources": "bower_components/helios/resources",
    "helios/index": "bower_components/helios/index",
    "domite": "bower_components/amber-contrib-domite/src",
    "amber-ide-starter-dialog": "bower_components/amber-ide-starter-dialog/lib/idestarter",
    "amber/web": "bower_components/amber-contrib-web/src",
    "amber/legacy": "bower_components/amber-contrib-legacy/src",
    "amber/legacy/resources": "bower_components/amber-contrib-legacy/resources",
    "amber/jquery": "bower_components/amber-contrib-jquery/src",
    "amber": "bower_components/amber/support",
    "amber_core": "bower_components/amber/src",
    "amber-ambercordova": "src",
    "amber-timer": "src",
    "amber-snapsvg": "src",
    "amber-todolist": "src",
    "amber-cornucopiascorecards": "src",
    "amber-cornucopiascorecards/css": "css",
    "amber-video": "src"
  },
  "shim": {
    "typeahead": {
      "deps": [
        "jquery"
      ],
      "exports": "jQuery.fn.typeahead"
    },
    "jquery-ui": {
      "deps": [
        "jquery",
        "jquery",
        "jquery"
      ]
    },
    "codemirror/lib/codemirror": {
      "deps": [
        "css!codemirror/lib/codemirror",
        "css!codemirror/lib/codemirror"
      ]
    },
    "bootstrap/js/bootstrap": {
      "deps": [
        "jquery",
        "css!bootstrap/css/bootstrap"
      ]
    },
    "sevenSeg": {
      "deps": [
        "jquery",
        "jquery-ui",
        "knockout"
      ]
    },
    "linda-client": {
      "deps": [
        "socket.io"
      ]
    },
    "ensure-console": {
      "exports": "console"
    }
  },
  "map": {
    "*": {
      "css": "require-css/css",
      "amber/domite/DOMite": "domite/DOMite",
      "amber/domite/DOMite-Tests": "domite/DOMite-Tests",
      "00comment": "These are backward compatibility pointers.",
      "amber-contrib-web/Web": "amber/web/Web",
      "amber_core/Web": "amber/web/Web",
      "amber_core/Canvas": "amber/web/Web",
      "amber-attic/Benchfib": "amber/legacy/Benchfib",
      "amber-attic/Examples": "amber/legacy/Examples",
      "amber-attic/IDE": "amber/legacy/IDE",
      "amber-contrib-jquery/Wrappers-JQuery": "amber/jquery/Wrappers-JQuery",
      "amber_core/Compiler-Exceptions": "amber_core/Compiler-Core",
      "amber_core/Kernel-ImportExport": "amber_core/Platform-ImportExport"
    }
  }
});