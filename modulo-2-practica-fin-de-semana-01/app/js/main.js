'use strict';

// SELECTORS...

const btn = document.querySelector('.js-login-button');

// Number of user attemps
let attemps = 0;

// Object saved in BBDD with user information to compare with my form

const userInfo = {
  name: 'front23',
  password: 'bicicleta'
};

// FUNCTIONS

function handleLogin() {
  // leer los datos
  const name = document.querySelector('.js-user-name').value;
  const password = document.querySelector('.js-user-password').value;
  // limpiar el mensaje de error
  document.querySelector('.js-error-wrapper').classList.add('hidden');
  // comprobar los datos
  if (name === userInfo.name && password === userInfo.password) {
    alert('Estás dentro');
    // reinicio los intentos
    attemps = 0;
  } else {
    document.querySelector('.js-error-wrapper').classList.remove('hidden');
    // aumentar los intentos
    attemps = attemps + 1;
    if (attemps > 3) {
      alert('Estás bloqueado');
    }
  }
  console.log(name, password);
}

// LISTENERS

btn.addEventListener('click', handleLogin);
