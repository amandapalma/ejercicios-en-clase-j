'use strict';

let breeds;

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    breeds = data.message.terrier;
    console.log('Las razas devueltas son:', breeds);
    // obtengo el número máximo de razas
    const maxBreedsLength = data.message.terrier.length - 1;
    // llamo a otra API que nos devuelve un número aleatorio
    const url = 'https://api.rand.fun/number/integer?max=' + maxBreedsLength;
    console.log('Llamo a la url', url);
    return fetch(url);
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('El número aleatorio devuelto es', data.result);
    console.log(`La raza número ${data.result} del listado de razas es ${breeds[data.result]}`);
  });
