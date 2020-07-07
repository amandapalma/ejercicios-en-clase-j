'use strict';

const groups = [
  {
    id: 'asfd234',
    isFav: true,
    name: 'Pegatina'
  },
  {
    id: 'sfñasldfkasdf',
    isFav: true,
    name: 'Pegatina'
  },
  {
    id: '9234nd',
    isFav: false,
    name: 'Camela'
  },
  {
    id: '234rfdsf',
    isFav: true,
    name: 'AC-CD'
  }
];

// función que maneja los clicks
const handleClick = function (ev) {
  // pintamos el objeto dataset
  console.log('Objeto dataset entero', ev.currentTarget.dataset);
  console.log('data.id', ev.currentTarget.dataset.id);
  console.log('data.isFav', ev.currentTarget.dataset.isFav);
  // gracias al objeto dataset podemos guardar en el DOM datos sin que sean visibles para el usuario

  // buscamos
  const clickedId = ev.currentTarget.dataset.id;
  for (const group of groups) {
    if (clickedId === group.id) {
      console.log('El elmento clickado es:', group);
      group.isFav = !group.isFav;
      console.log('El elmento clickado es:', group);
    }
  }

  // repintamos y escuchamos
  paintGroups();
};

function paintGroups() {
  // pintamos los elementos en el dom
  const ulElement = document.querySelector('.js-list');
  ulElement.innerHTML = '';

  // recorremos el array
  for (const group of groups) {
    // creo el li
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.classList.add('js-group');

    // con una de las siguientes 2 líneas creamos el atributo id="..."
    // liElement.setAttribute('id', group.id);
    liElement.id = group.id;

    // con una de las siguientes dos líneas creamos el attributo data set
    // liElement.setAttribute('data-id', group.id);
    liElement.dataset.id = group.id;
    // con la siguiente línea creamos otro data set
    liElement.dataset.isFav = group.isFav;

    // con las siguientes dos líneas creamos atributos inventados o no inventados
    liElement.setAttribute('mi-atributo-inventado', 'lamari');
    liElement.setAttribute('disable', '');

    // escucho el evento sobre el li
    liElement.addEventListener('click', handleClick);

    // creo un párrafo
    const pElement = document.createElement('p');
    liElement.appendChild(pElement);

    // creo un texto
    const textElement = document.createTextNode(group.name + ':');
    pElement.appendChild(textElement);

    // creo un span con el texto "Favorito" o "No favorito"
    const spanElement = document.createElement('span');
    pElement.appendChild(spanElement);
    const favText = group.isFav ? ' Favorito' : ' No favorito';
    const favTextElement = document.createTextNode(favText);
    spanElement.appendChild(favTextElement);

    // inspecciona el código generado
  }
}

// arranco la aplicación pintando y escuchando eventos
paintGroups();
