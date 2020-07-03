'use strict';

const elemList = document.querySelector('#recipes-list');
const urlBase = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian';

let recipes = null;
const favourites = [];

// gracias a fetch API puedo hacer una petición a una URL y traerme datos/enviarlos... por medio GET/POST....
// en este caso como vamos a traernos datos para pintarlos por defecto si no le decimos nada nos traemos los datos con el método GET
// tenemos una URLbase que le pasamos como argumento
// los datos que nos llegan son una Promesa (que son una referencia a los datos que vendrán en un futuro, piensa que las peticiones se demoran dependiendo del servidor y
// nuestro JS va mucho más rápido que la respuesta del server)
// para manejar estos datos futuros/promesas usamos el método then
// por lo tanto el flujo sería hago fetch a una URL / despues .then los datos que nos vengan del server los paso a JSON para poder operar con ellos y devolvemos esos datos
// le pasamos la pelota al siguiente then que ya ha resuelto la promesa, puedo pasarle esos datos a una función y pintarlos o hacer lo que necesite
function conectToApi() {
  fetch(urlBase)
    .then(response => response.json())
    .then(data => {
      // este then ya ha resuelto los datos puedo pasárselos a una función que me pinte los resultados
      recipes = data.meals;
      renderRecipes(recipes);
    });
}

// 2: pinto las recetas y ejecuto la función que asigna los listeners a los botones
function renderRecipes(arr) {
  for (let item of arr) {
    elemList.innerHTML += `<li id='${item.idMeal}' class='recipes-list__item'>`;
    elemList.innerHTML += `<div class='recipes-list__item-info'>`;
    elemList.innerHTML += `<img src=${item.strMealThumb} alt=${item.strMeal}>`;
    elemList.innerHTML += `<span>${item.strMeal}</span>`;
    elemList.innerHTML += `</div></li>`;
  }
  // después de pintar escucho los eventos en los elementos pintados
  addClickListeners();
}

// 3: función para asignar los listeners a los botones
function addClickListeners() {
  // obtengo los elementos sobre los que quiero escuchar un click
  const recipeLiElements = document.querySelectorAll('.recipes-list__item');
  for (let recipeLi of recipeLiElements) {
    // a cada elemento le hago un addEventListener para escuchar el click
    recipeLi.addEventListener('click', saveFavourites);
  }
}

// 4: función para guardar en favoritos, recojo el id del evt.currentTarget, compruebo que no existe en el array de favoritos y lo guardo
// esto luego me podría servir para pintar esa receta favorita en otro lugar
function saveFavourites(evt) {
  const index = evt.currentTarget.id;
  // compruebo si ya está en favoritos
  if (favourites.indexOf(index) === -1) {
    // no está: así que lo añado
    favourites.push(index);
  } else {
    // sí está: muestro un alert
    alert('esa receta ya es tu favorita');
  }
  console.log(favourites);
}

// inicio aplicación
conectToApi();
