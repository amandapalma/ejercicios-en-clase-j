'use strict';

const age = document.querySelector('.js-age');
const resultStop = document.querySelector('.js-result-stop');
const resultGo = document.querySelector('.js-result-go');

const showMessage = function () {
  const ageValue = age.value;

  resultGo.classList.add('hidden');
  resultStop.classList.add('hidden');
  debugger;
  // const isAtLegalAge = ageValue >= 18;
  const isUnderAge = !!ageValue;

  if (ageValue === 18) {
    console.log('Anda pasa');
    resultGo.classList.remove('hidden');
  } else {
    console.log('Espera unos años');
    resultStop.classList.remove('hidden');
  }
};

age.addEventListener('change', showMessage);
