'use strict';

const students = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },

  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },

  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },

  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },

  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  }
]

//planteo que necesito comparar dos valores, la edad en la que estoy iterando en ese momento y la edad que voy a acumular
//creo la variable youngest dandole el valor de la edad de la primera adalaber
//comienzo a iterar el bucle en vez de en 0 en 1 para partir de la siguiente adalaber y poder hacer esa comparación

function getYoungest(arr) {
  let youngest = arr[0].age;
  let acc;
  for (let i = 1; i < arr.length; i++) {
    //acc vale la edad sobre la que itero en cada caso
    acc = arr[i].age;
    //si la edad en la que itero es menor que la edad de la primea adalaber
    //actualizo el valor de youngest con el valor de acc
    if (acc < youngest) {
      youngest = acc;
    }
  }
  //al final del bucle devuelvo youngest
  return youngest;
}

console.log(getYoungest(students))