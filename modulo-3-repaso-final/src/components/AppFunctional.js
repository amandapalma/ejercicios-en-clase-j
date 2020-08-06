import React, { useEffect, useState } from 'react';
import Filters from './Filters';
// import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import getApiData from '../services/api';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData().then(data => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1 className="title--big">Catálogo de camisetas</h1>
      <Filters />
      <ProductList products={products} />
      {/* <ProductDetail
        name="JavaScript"
        imageUrl="//beta.adalab.es/ejercicios-extra/api/eshop/assets/images/javascript.jpg"
        price="15"
        description="Tremenda camiseta"
        sizes={['s', 'l', 'xl']}
      /> */}
    </div>
  );
};

export default App;
