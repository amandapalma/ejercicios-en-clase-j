'use strict';

const letters = ['a', 'b', 'c', 'd', 'e'];

const letter = letters.splice(2, 0, 'x', 'y');

console.log('Elementos extraidos', letter);

console.log('Array después de extraer', letters);
