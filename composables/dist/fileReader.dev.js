"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var readResult = (0, _vue.ref)("yahoo");

var _default = function _default() {
  var FileRead = function FileRead(filePath) {
    var readResult = "";
    fetch("/components/LayoutPattern1.vue", {
      "Content-Type": "plain/text"
    }).then(function (response) {
      return response.text();
    }).then(function (data) {
      readResult = data;
      console.log(data);
    });
    return readResult;
  };

  return {
    readResult: (0, _vue.readonly)(readResult),
    FileRead: FileRead
  };
};

exports["default"] = _default;