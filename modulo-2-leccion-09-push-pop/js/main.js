'use strict';

// push añade un elemento al final y devuelve la nueva longitud del array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const numbersLength = numbers.push(20);
console.log('Nueva longitud', numbersLength);
console.log('Numbers después de añadir', numbers);

// pop extrae y devuelve el último elemento
const lastNumber = numbers.pop();
console.log('Elemento extraido del final', lastNumber);
console.log('Numbers después de extraer', numbers);
