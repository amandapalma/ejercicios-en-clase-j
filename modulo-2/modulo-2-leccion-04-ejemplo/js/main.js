'use strict';

function setText(selector, text) {
  document.querySelector(selector).innerHTML = text;
}

function getArea(base, height) {
  const a = base * height;
  const resultado = a / 2;
  return resultado;
}

const getAreaAnonymous = function (base, height) {
  const a = base * height;
  const resultado = a / 2;
  return resultado;
};

const getAreaArrow = (base, height) => {
  const a = base * height;
  const resultado = a / 2;
  return resultado;
};

const getAreaArrow2 = (base, height) => (base * height) / 2;

setText('.js-hero', 'Hola mundo');

const area = getArea(10, 20);
const areaAnonymous = getAreaAnonymous(10, 20);
const areaArrow = getAreaArrow(10, 20);
const areaArrow2 = getAreaArrow2(10, 20);
