'use strict';

const nameElement = document.querySelector('.js-name');
const ageElement = document.querySelector('.js-age');
const resultElement = document.querySelector('.js-result');

function handleForm() {
  if (nameElement.value !== '') {
    resultElement.innerHTML = 'Campo relleno';
  } else {
    resultElement.innerHTML = 'Campo vacío';
  }
}

// function handleForm() {
//   if (nameElement.value === 'María' || ageElement.value > 20) {
//     resultElement.innerHTML = 'Hazme esto';
//   } else {
//     resultElement.innerHTML = 'Hazme lo otro';
//   }
// }

nameElement.addEventListener('keyup', handleForm);
ageElement.addEventListener('keyup', handleForm);
