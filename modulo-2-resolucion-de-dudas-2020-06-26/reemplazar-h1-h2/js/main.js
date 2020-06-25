'use strict';

const mainElement = document.querySelector('.js-main');
const titleElement = document.querySelector('.js-h1');

console.log(titleElement.innerHTML);

mainElement.innerHTML = `<h2>${titleElement.innerHTML}</h2>`;
