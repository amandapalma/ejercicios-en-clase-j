/* eslint-disable no-console */
'use strict';

const paragraph = document.querySelector('.js-paragraph');

const handleElementClick = ev => {
  if (ev.target.classList.contains('js-btn-a')) {
    console.log(`Se ha pulsado el botón A`);
  }
  if (ev.target.classList.contains('js-btn-a')) {
    console.log(`Se ha pulsado el botón B`);
  }
  ev.preventDefault();
};

// En vez de hacer el addEventListener sobre los botones hago addEventListener sobre el párrafo, es decir
// en vez de escuchar el click sobre los botones escucho el click sobre el párrafo.
// El párrafo es la madre de ambos botones (también podría hacerlo sobre la abuela, bisabuela...).
// Y en la función handleElementClick comprobamos con ev.target qué botón ha sido pulsado
paragraph.addEventListener('click', handleElementClick);
// Esto lo hacemos porque a veces no podemos hacer addEventListener sobre los elementos que queremos
// y nos vemos obligados a hacerlo sobre las madres o abuelas de estos de estos.
