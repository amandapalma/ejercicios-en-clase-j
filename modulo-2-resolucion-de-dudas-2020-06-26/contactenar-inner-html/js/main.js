'use strict';

const paragraph = document.querySelector('.js-p');

const price = 10.33;
const quantity = 20;
const shipping = 5;

paragraph.innerHTML = `Enviar a Maricarmen ${quantity} peras a ${price} € por pera más ${shipping} € de gastos de envío, total ${parseInt(
  price * (quantity + shipping)
)} €`;

console.log(paragraph.innerHTML);
