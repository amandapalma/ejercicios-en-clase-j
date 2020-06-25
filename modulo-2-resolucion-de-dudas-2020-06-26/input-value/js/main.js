'use strict';

const input = document.querySelector('.js-input');
const result = document.querySelector('.js-result');

function handleInput() {
  console.log('Han tecleado', input.value);
  result.innerHTML = input.value;
}

// function handleInput(ev) {
//   console.log('Han tecleado', ev.target.value);
//   result.innerHTML = ev.target.value;
//   // result.classList.add(ev.target.value);
//   result.setAttribute('class', ev.target.value);
//   result.setAttribute('id', ev.target.value);
// }

function getInputValue() {
  return input.value;
}

function updateResult(text) {
  return (result.innerHTML = text);
}

function handleInput() {
  const text = getInputValue();
  updateResult(text);
}

input.addEventListener('keyup', handleInput);
