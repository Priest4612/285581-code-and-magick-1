'use strict';

window.utils = (function () {
  var module = {};


  var getRandomElement = function (array) {
    var indexElement = Math.floor(Math.random() * array.length);
    return array[indexElement];
  };

  module.getRandomElementExcept = function (array, currentElement) {
    var newElement;
    while (!newElement || newElement === currentElement) {
      newElement = getRandomElement(array);
    }
    return newElement;
  };


  module.getNextElement = function (array) {
    var counter = 0;
    return function () {
      if (counter < array.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      return array[counter];
    };
  };

  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;

  var isKeyboardEvent = function (evt) {
    return typeof evt.keyCode !== 'undefined';
  };

  module.isActivateEvent = function (evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ENTER_KEY_CODE;
  };

  module.isDeactivateEvent = function (evt) {
    return isKeyboardEvent(evt) && evt.keyCode === ESCAPE_KEY_CODE;
  };


  return module;
})();
