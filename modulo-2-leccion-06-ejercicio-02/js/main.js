/* eslint-disable no-console */
'use strict';

const adalaber = {};
adalaber.name = 'María';
adalaber.speak = phrase => `Yo digo: ${phrase}`;

adalaber.run = function() {
  console.log('Estoy corriendo');
};

adalaber.runAMarathon = distance => {
  console.log(`Estoy corriendo una maratón de ${distance} kilometros`);
};

// Muestra en la consola 'Yo digo: Hola'
console.log(adalaber.speak('Hola'));

adalaber.run();
adalaber.runAMarathon(50);
