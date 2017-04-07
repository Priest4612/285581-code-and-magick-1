'use strict';
var clsHidden = 'hidden';
var userDialog = document.querySelector('.setup');
var wizardForm = userDialog.querySelector('.setup-wizard-form');

var isKeydownHandlerEsc = function (evt) {
  if (window.utils.isDeactivateEvent(evt)) {
    closeUserDialog();
  }
};


var setupClose = wizardForm.querySelector('.setup-close');
var closeUserDialog = function () {
  userDialog.classList.add(clsHidden);
  document.removeEventListener('keydown', isKeydownHandlerEsc);
};
setupClose.addEventListener('click', closeUserDialog);
setupClose.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    closeUserDialog();
  }
});


var setupOpen = document.querySelector('.setup-open');
var openUserDialog = function () {
  userDialog.classList.remove(clsHidden);
  document.addEventListener('keydown', isKeydownHandlerEsc);
};
setupOpen.addEventListener('click', openUserDialog);
setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    openUserDialog();
  }
});


var setupSubmit = wizardForm.querySelector('.setup-submit');

setupSubmit.addEventListener('keydown', function (evt) {
  if (window.utils.isActivateEvent(evt)) {
    evt.preventDefault();
    closeUserDialog();
  }
});

wizardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  closeUserDialog();
});


var wizardOptions = {
  coatColors: [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ],
  eyesColors: [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ],
  fireballColors: [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ]
};


var wizardCoat = document.querySelector('.wizard-coat');

var setWizardCoatColor = function () {
  var currentColor;
  currentColor = window.utils.getNextElement(wizardOptions.coatColors);
  window.colorizeElement.setNextColor(wizardCoat, currentColor(), 'fill');
  console.log('setWizardCoatColor');
};

wizardCoat.addEventListener('click', function () {
  setWizardCoatColor();
});


var similarListElement = userDialog.querySelector('.setup-similar-list');
similarListElement.appendChild(window.renderElements.renderWizards());
userDialog.querySelector('.setup-similar').classList.remove(clsHidden);
