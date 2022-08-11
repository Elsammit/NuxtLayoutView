"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("test world");
});
app.get('/users/:user/skills/:skill', function (req, res) {
  res.send(req.params);
});
app.get("/query", function (req, res) {
  res.send(req.query);
});

var handler1 = function handler1(req, res, next) {
  console.log('handler1 (not send)');
  req.startTime = new Date();
  next();
};

var handler2 = function handler2(req, res, next) {
  console.log('handler2 (not send)');
  next();
};

app.get('/nextcheck', [handler1, handler2], function (req, res, next) {
  console.log("handler sending. Please wait...");
  next();
}, function (req, res) {
  res.send("".concat(req.startTime));
});
var _default = app;
exports["default"] = _default;