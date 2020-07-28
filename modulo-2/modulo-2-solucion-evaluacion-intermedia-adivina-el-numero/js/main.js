'use strict';

// random number

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log('Mi número aleatorio es:', randomNumber);

// handle event

const submitBtn = document.querySelector('.js-submit');
const number = document.querySelector('.js-number');
const clue = document.querySelector('.js-clue');
const counter = document.querySelector('.js-counter');

function handleSubmitBtn(ev) {
  ev.preventDefault();
  updateClue();
  updateCounter();
}

function updateClue() {
  let numberValue = number.value;
  numberValue = parseInt(numberValue);
  if (numberValue >= 1 && numberValue <= 100) {
    if (numberValue < randomNumber) {
      clue.innerHTML = 'Demasiado bajo.';
    } else if (numberValue > randomNumber) {
      clue.innerHTML = 'Demasiado alto.';
    } else if (numberValue === randomNumber) {
      clue.innerHTML = 'Has ganado campeona!!!';
    }
  } else {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
  // if (numberValue < 1 || numberValue > 100) {
  //   console.log('El número debe ser mayour de 0 y menor de 100');
  // } else if (numberValue < randomNumber) {
  //   console.log('Es menor');
  // } else if (numberValue > randomNumber) {
  //   console.log('Es mayor');
  // } else if (numberValue === randomNumber) {
  //   console.log('Es igual');
  // } else {
  //   console.log('No sé qué está pasando');
  // }
}

let counterAttempts = 0;

function updateCounter() {
  // counterAttempts++;
  // counterAttempts += 1;
  counterAttempts = counterAttempts + 1;
  counter.innerHTML = counterAttempts;
}

submitBtn.addEventListener('click', handleSubmitBtn);
