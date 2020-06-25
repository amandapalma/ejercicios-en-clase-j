'use strict';

// element query selector

const p2Element = document.querySelector('.js-p-2');

const btnElement = p2Element.querySelector('.js-button');

console.log(p2Element);

console.log(btnElement);

const element = document.querySelector('.js-p-2').querySelector('.js-button');

console.log(element);

// toggle

btnElement.classList.toggle('active');

// el código que tiene toggle por dentro es este

if (btnElement.classList.contains('active')) {
  btnElement.classList.remove('active');
} else {
  btnElement.classList.add('active');
}
