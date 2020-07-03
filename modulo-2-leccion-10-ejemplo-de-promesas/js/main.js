/* eslint-disable no-console */
'use strict';

console.log('Pido datos a un servidor');

fetch('https://swapi.dev/api/starships/9/')
  .then(response => response.json())
  .then(serverData => {
    console.log('El servidor ha respondido con', serverData);
  })
  .then(() => {
    console.log('El servidor ha respondido');
    const number = 123;
    // lo que retorne por aquí lo recibirá el siguiente then por parámetro
    return number;
  })
  .then(info => {
    // recibo por aquí lo que el anterior then retornó
    console.log('Pinto los datos que recibo:', info);
    return 2;
  })
  .then((info, foo) => {
    // como el then anterior solo puede devolver un dato en el return
    // este then solo puede recibir un dato por parámetros
    // por eso foo, que es el segundo parámetro, es undefined
    console.log('Pinto los datos que recibo:', info, foo);
    return 3;
  })
  .then(data => {
    // descomenta esta línea para ver cómo funciona el catch
    // console.log(foo.name.address);
    console.log('Pinto los datos que recibo:', data);
    return 'Hola MC';
  })
  .then(data => {
    console.log('Pinto los datos que recibo:', data);
  })
  .then(info => {
    // hmmm 🤔 por qué el siguiente console pinta un undefined???
    console.log('Pinto los datos que recibo:', info);
    return true;
  })
  .then(data => {
    console.log('Pinto los datos que recibo:', data);
  })
  .catch(err => {
    console.log('Ha habido un error', err);
  });

console.log('Continuo haciendo cosas');
