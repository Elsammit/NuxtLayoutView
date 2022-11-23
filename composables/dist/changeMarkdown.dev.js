"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default() {
  var ChgToMarkdown = function ChgToMarkdown(textData) {
    return (0, _marked["default"])(textData); // return textData;
  };

  return {
    ChgToMarkdown: ChgToMarkdown
  };
};

exports["default"] = _default;