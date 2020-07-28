'use strict';

const ENDPOINT = 'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json'

let users = [];
let favorites = [];
const list = document.querySelector('.js-user-list')
/* Do your magic! 🦄🦄🦄*/

function getPrincess() {
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      users = data;
      renderPrincess(users)
      console.log(users)
    })
}



function renderPrincess(arr) {
  for(let i = 0; i < arr.length; i++) {
    list.innerHTML += `<li>${arr[i].name}</li>`
  }


}

getPrincess();

