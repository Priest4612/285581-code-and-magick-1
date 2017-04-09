'use strict';

window.renderElements = (function () {
  var module = {};
  var wizardSimilarTemplate = document.querySelector('#similar-wizard-template').content;


  var renderWizard = function (wizard) {
    var wizardElement = wizardSimilarTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };


  module.renderWizards = function () {
    var similarWizards = window.wizards.generateWizardList();
    var countSimilarWizard = 4;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < countSimilarWizard; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }
    return fragment;
  };


  return module;
})();
