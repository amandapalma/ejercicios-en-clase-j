const getDataFromApi = () => {
  return fetch('https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json')
    .then(response => response.json())
    .then(data => {
      const items = [];
      for (let index = 0; index < data.cart.items.length; index++) {
        const item = data.cart.items[index];
        item.id = 'id-' + index;
        items.push(item);
      }
      return items;
      // const items = data.cart.items.map((item, index) => {
      //   item.id = 'id-' + index;
      //   return item;
      // });
      // return items;
    });
};

export default getDataFromApi;
