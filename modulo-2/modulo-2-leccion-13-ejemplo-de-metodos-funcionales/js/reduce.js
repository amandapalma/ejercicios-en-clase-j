const numbers = [1, 2, 3];

// esta es la típica función de sumatorio

const total = numbers.reduce(function (acc, number) {
  // cada iteración recibe por la variable acc lo que haya devuelto esta función en la iteración anterior
  console.log(`Iteración ${number}: el accumulador recibido es`, acc);
  acc = acc + number;
  console.log(`Iteración ${number}: el accumulador devuelto es`, acc);
  return acc;
}, 0);

console.log('La suma total es:', total);
