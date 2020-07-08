'use strict';

let products = [];
let cart = [];

// api

const getDataFromApi = () => {
  fetch('./api/data.json')
    .then(response => response.json())
    .then(data => {
      products = data.items;
      paintProducts();
    });
};

// products

const paintProducts = () => {
  let codeHTML = '';
  for (let index = 0; index < products.length; index += 1) {
    codeHTML += `<article class="card">`;
    codeHTML += `<img src="${products[index].imageUrl}" class="card__img" alt="Camiseta de ${products[index].name}" />`;
    codeHTML += `<h3 class="card__title">${products[index].name}</h3>`;
    codeHTML += `<p class="card__description">${products[index].price} €</p>`;
    codeHTML += `<button class="card__btn js-product-inc"
      id="${products[index].id}"
      data-index="${index}"
      data-id="${products[index].id}"
    >Añadir a la cesta</button>`;
    codeHTML += `</article>`;
  }
  const cardsElement = document.querySelector('.js-cards');
  cardsElement.innerHTML = codeHTML;
  listenProductsClicks();
};

// cart

const paintCart = () => {
  let codeHTML = '';
  for (let index = 0; index < cart.length; index += 1) {
    codeHTML += `<tbody class="js-cart">`;
    codeHTML += `<tr>`;
    codeHTML += `<td>${cart[index].name}</td>`;
    codeHTML += `<td>${cart[index].price}</td>`;
    codeHTML += `<td>`;
    codeHTML += `<button class="card__btn">-</button>`;
    codeHTML += ` 0 `;
    codeHTML += `<button class="card__btn">+</button>`;
    codeHTML += `</td>`;
    codeHTML += `<td class="text-align-right">${cart[index].price}€</td>`;
    codeHTML += `</tr>`;
  }
  codeHTML += getCartTotalHtmlCode();
  const cardsElement = document.querySelector('.js-cart');
  cardsElement.innerHTML = codeHTML;
};

const getCartTotalHtmlCode = () => {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getTotalPrice = () => {
  let total = 0;
  for (const product of cart) {
    total += product.price;
  }
  return total;
  // el for anterior es equivalente a este reduce
  return cart.reduce((total, product) => total + product.price, 0);
};

// events

const handleProductsClick = ev => {
  // obtenemos el id del producto clickado
  const clickedId = parseInt(ev.currentTarget.id);
  // buscamos con find
  const product = products.find(productItem => productItem.id === clickedId);
  cart.push(product);
  console.log(cart);
  paintCart();
};

const listenProductsClicks = () => {
  const productsBtns = document.querySelectorAll('.js-product-inc');
  for (let index = 0; index < productsBtns.length; index++) {
    const productsBtn = productsBtns[index];
    productsBtn.addEventListener('click', handleProductsClick);
  }
};

// start app

getDataFromApi();
paintProducts();
paintCart();
