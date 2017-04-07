'use strict';

window.colorizeElement = (function () {
  var module = {};


  module.setNextColor = function (element, color, property) {
    element.style[property] = color;
  };


  return module;
})();
