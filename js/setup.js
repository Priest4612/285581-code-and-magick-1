'use strict';
var clsHidden = 'hidden';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove(clsHidden);

var countSimilarWizard = 4;
var similarWizardTemplates = document.querySelector('#similar-wizard-template').content;
var similarListElement = userDialog.querySelector('.setup-similar-list');
var listWizardField = {
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
    'green',
  ]
};
var similarWizards = [
  {
    name: listWizardField.firstName[0] + ' ' + listWizardField.lastName[0],
    coatColor: listWizardField.coatColor[0],
    eyesColor: listWizardField.eyesColor[0]
  },
  {
    name: listWizardField.firstName[1] + ' ' + listWizardField.lastName[1],
    coatColor: listWizardField.coatColor[1],
    eyesColor: listWizardField.eyesColor[1]
  },
  {
    name: listWizardField.firstName[2] + ' ' + listWizardField.lastName[2],
    coatColor: listWizardField.coatColor[2],
    eyesColor: listWizardField.eyesColor[2]
  },
  {
    name: listWizardField.firstName[3] + ' ' + listWizardField.lastName[3],
    coatColor: listWizardField.coatColor[3],
    eyesColor: listWizardField.eyesColor[3]
  },
  {
    name: listWizardField.firstName[4] + ' ' + listWizardField.lastName[4],
    coatColor: listWizardField.coatColor[4],
    eyesColor: listWizardField.eyesColor[4]
  },
  {
    name: listWizardField.firstName[5] + ' ' + listWizardField.lastName[5],
    coatColor: listWizardField.coatColor[5],
    eyesColor: listWizardField.eyesColor[5]
  }
];


var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplates.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < countSimilarWizard; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove(clsHidden);
