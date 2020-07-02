'use strict';

/*

Diagrama de flujo:

Flujo 1: empieza al arrancar la página
Flujo 1.1: Pinto los datos con un value diferente para identificar cada checkbox de manera única
Flujo 1.2: Escucho evento change sobre cada checkbox
---
Flujo 2: empieza cuando la usuaria hace click en el checkbox y el navegador lanza el evento change
Flujo 2.1: Reacciono al evento change
Flujo 2.2: Obtengo la info que necesito
Flujo 2.3: Modifico mis datos
Flujo 2.4: Pinto los datos
Flujo 2.5: Escucho evento change sobre cada checkbox
---
Los flujos 2.4 y 2.5 son iguales que los 1.1 y 1.2. Por ello vamos a reutilizar el código

*/

// array de datos con el que voy a trabajar
const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const ulElement = document.querySelector('.js-list');

// función para pintar los elementos en el html
// esta función la puedo llamar siempre que quiera y desde donde quiera
function paintTasks() {
  let className;
  let checked;
  let htmlCode = '';
  // recorro las tareas
  for (let i = 0; i < tasks.length; i += 1) {
    // compruebo si cada tarea está completada o no
    if (tasks[i].completed === true) {
      className = 'text--decoration--through';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    // genero el código html de cada tarea
    htmlCode += `<li class="${className}">`;
    // con value identifico los elementos de forma única
    htmlCode += `<input type="checkbox" ${checked} class="js-checkbox" value="${i}" />`;
    htmlCode += `${tasks[i].name}</li>`;
  }
  // añado el código html de todas las tareas a la vez al <ul/>
  ulElement.innerHTML = htmlCode;
}

// función para manejar un click
// esta función debe modificar los datos y después pintar y escuchar eventos
function handleCheckbox(ev) {
  // obtengo la información que he puesto en el <input ... value="${i}"/> de la función paintTasks
  const index = parseInt(ev.target.value);
  // modifico mi array de datos tasks
  tasks[index].completed = !tasks[index].completed;
  // pinto y escucho
  udpateAll();
}

function listenCheckboxEvents() {
  // obtengo el listado de checkboxes, y lo guardo en checkboxElements como un array
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  // recorro los checkboxes
  for (let i = 0; i < checkboxElements.length; i += 1) {
    // a cada checkbox les hago un addEventListener para gestionar su evento change
    checkboxElements[i].addEventListener('change', handleCheckbox);
  }
}

// reset

const resetElement = document.querySelector('.js-reset');

// función para poner todos las tareas a no completadas
// esta función debe modificar los datos y después pintar y escuchar eventos
function reset(ev) {
  // prevengo la acción por defecto
  ev.preventDefault();
  // recorro todas las tareas
  for (const task of tasks) {
    // para cada tarea pongo su propiedad complete a false
    task.completed = false;
  }
  // pinto y escucho
  udpateAll();
}

resetElement.addEventListener('click', reset);

// start app

// función que pinta y escucha
function udpateAll() {
  // puesto que siempre pinto y escucho a la vez lo he metido en una función para unificar
  paintTasks();
  listenCheckboxEvents();
}

// arranco la web pintando y escuchando
udpateAll();
