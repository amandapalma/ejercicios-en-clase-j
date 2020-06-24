'use strict';

const item = document.querySelector('.js-item');

function handleItemClick(ev) {
  console.log('Han pulsado el botón');
  console.log('Han pulsado el botón con esta información', ev);
}

// escuchamos un evento click
// en el elemento item y
// la encargada de gestionar el evento es la función handleItemClick
item.addEventListener('click', handleItemClick);
