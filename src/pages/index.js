// Generated by BUCKLESCRIPT VERSION 1.9.0, PLEASE EDIT WITH CARE
'use strict';

var Link        = require("../../bindings/gatsby/link.js");
var React       = require("react");
var ReasonReact = require("reason-react/src/reasonReact.js");

function text(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Index");

function make() {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", undefined, React.createElement("h1", undefined, "Hi people"), React.createElement("p", undefined, "Welcome to your new Gatsby site."), React.createElement("p", undefined, "Now go build something great."), ReasonReact.element(/* None */0, /* None */0, Link.make("/page-2/", /* array */["Go to page 2"])));
    });
  return newrecord;
}

var $$default = ReasonReact.wrapReasonForJs(component, (function () {
        return make(/* array */[]);
      }));

exports.text      = text;
exports.component = component;
exports.make      = make;
exports.$$default = $$default;
exports.default   = $$default;
/* component Not a pure module */
