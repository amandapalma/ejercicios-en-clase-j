import React from 'react';
import Product from './Product';

const ProductList = props => {
  const htmlCode = props.products.map((product, index) => {
    return (
      <Product key={index} name={product.name} price={product.price} imgUrl={product.imageUrl} />
    );
  });
  return <section className="cards">{htmlCode}</section>;
};

export default ProductList;
