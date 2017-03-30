'use strict';
var clsHidden = 'hidden';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove(clsHidden);

var similarListElement = userDialog.querySelector('.setup-similar-list');
var wizardSimilarTemplate = document.querySelector('#similar-wizard-template').content;


var randerWizard = function (wizard) {
  var wizardElement = wizardSimilarTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var similarWizards = window.wizardList;
var countSimilarWizard = 4;
var fragment = document.createDocumentFragment();
for (var i = 0; i < countSimilarWizard; i++) {
  fragment.appendChild(randerWizard(similarWizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove(clsHidden);
