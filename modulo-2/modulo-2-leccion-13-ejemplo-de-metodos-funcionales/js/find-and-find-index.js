'use strict';

const promos = [
  {
    letter: 'A',
    name: 'Ada'
  },
  {
    letter: 'B',
    name: 'Borg'
  },
  {
    letter: 'C',
    name: 'Clarke'
  }
];

// Ejemplos con find

// Este es el código que tiene el método array.find por dentro
function find(list, method) {
  for (const item of list) {
    if (method(item)) {
      return item;
    }
  }
  return undefined;
}

const findByName = function (item) {
  return item.letter === 'C';
};

const result = find(promos, findByName);
console.log(result);

// find devuelve el elemento encontrado o undefined

// Los siguientes ejemplos buscan dentro del array la promoción que tiene el nombre Borg.
// Hacen exactamente lo mismo, pero usando diferentes tipos de funciones.

// Con función arrow con retorno implícito
const search1 = 'Borg';
const promo1 = promos.find(promo => promo.name === search1);
console.log('Promo con nombre Borg', promo1);

// Con función arrow con retorno explícito
const search2 = 'Borg';
const promo2 = promos.find(promo => {
  return promo.name === search2;
});
console.log('Promo con nombre Borg', promo2);

// Con función anónima
const search3 = 'Borg';
const promo3 = promos.find(function (promo) {
  return promo.name === search3;
});
console.log('Promo con nombre Borg', promo3);

// Con función normal
function searchInPromos(promo) {
  return promo.name === search4;
}
const search4 = 'Borg';
const promo4 = promos.find(searchInPromos);
console.log('Promo con nombre Borg', promo4);

// Otros ejemplos de find

// Buscando por la letra B
const letter1 = 'B';
const promo5 = promos.find(promo => promo.letter === letter1);
console.log('Promo con letra B', promo5);

// Buscando por algo que no existe
const search6 = 'Nombre de promo mal escrito';
const promo6 = promos.find(promo => promo.name === search6);
console.log('Cuando find no encuentra el elemento retorna', promo6);

// Ejemplos con findIndex

// findIndex funciona exactamente igual find, pero find devuelve el elemento encontrado o undefined
// y findIndex devuelve el índice encontrado o -1

// Buscamos algo que sí existe
const search7 = 'Borg';
const promo7 = promos.findIndex(promo => promo.name === search7);
console.log('Índice de la promo con nombre Borg', promo7);

// Buscamos algo que no existe
const search8 = 'Nombre de promo mal escrito';
const promo8 = promos.findIndex(promo => promo.name === search8);
console.log('Índice de la promo con nombre equivocado', promo8);

// Debugger: para saber cómo funcionan estos métodos ponemos un debugger en la función

// Ponemos un console o un debugger
const search9 = 'Borg';
const promo9 = promos.find(function (promo) {
  console.log('Promo dentro de la función find', promo);
  return promo.name === search9;
});
// Aunque hay 3 promociones solo consolea las 2 primeras, porque la segunda es la encontrada. Una vez ha encontrado ya no sigue iterando
