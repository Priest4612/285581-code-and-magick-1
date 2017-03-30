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


  return module;
})();
