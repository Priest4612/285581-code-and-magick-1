'use strict';

window.colorizeElement = (function () {
  var module = {};


  var setColor = function (element, color, property) {
    element.style[property] = color;
  };

  module.setNextColor = function (element, colors, property) {
    var currentColor = window.utils.getNextElement(colors);
    element.addEventListener('click', function () {
      setColor(element, currentColor(), property);
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivateEvent(evt)) {
        setColor(evt.currentTarget, currentColor(), property);
      }
    });
  };

  return module;
})();
