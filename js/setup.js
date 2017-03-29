'use strict';
var clsHidden = 'hidden';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove(clsHidden);

var wizard = {
  name: [
    'Баба Яга',
    'Кощей безсмертный',
    'Васелиса Прекрасная',
    'Радогаст',
    'Мерлин',
    'Сарумян',
    'Кашперовский',
    'Жора Потный'
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
