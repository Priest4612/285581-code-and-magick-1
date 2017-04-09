'use strict';

window.wizards = (function () {
  var module = {};
  var wizardFieldOptions = {
    firstName: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'
    ],
    lastName: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'
    ],
    coatColor: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)',
    ],
    eyesColor: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ]
  };


  var generationSimilarWizard = function (options) {
    var currentFirstName;
    var currentLastName;
    var currentCoatColor;
    var currentEyesColor;
    var countCall = 0;

    return function () {
      currentFirstName = window.utils.getRandomElementExcept(options.firstName, currentFirstName);
      currentLastName = window.utils.getRandomElementExcept(options.lastName, currentLastName);
      currentCoatColor = window.utils.getRandomElementExcept(options.coatColor, currentCoatColor);
      currentEyesColor = window.utils.getRandomElementExcept(options.coatColor, currentEyesColor);
      var newWizard = {};
      if (countCall % 2 === 1) {
        newWizard.name = currentFirstName + ' ' + currentLastName;
        countCall += 1;
      } else {
        newWizard.name = currentLastName + ' ' + currentFirstName;
        countCall += 1;
      }
      newWizard.coatColor = currentCoatColor;
      newWizard.eyesColor = currentEyesColor;
      return newWizard;
    };
  };


  module.generateWizardList = function () {
    var similarWizardList = [];
    var wizardNames = wizardFieldOptions.firstName;
    var teastWizards = generationSimilarWizard(wizardFieldOptions);
    wizardNames.forEach(function () {
      similarWizardList.push(teastWizards());
    });
    return similarWizardList;
  };

  return module;
})();
