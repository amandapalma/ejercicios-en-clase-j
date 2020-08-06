import React from 'react';
import { Link } from 'react-router-dom';

const Product = props => {
  return (
    <article className="card">
      <img src={props.imgUrl} className="card__img" alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__description">{props.price} €</p>
      <Link to={`/product/${props.id}`} className="card__btn">
        Ver detalle del producto
      </Link>
    </article>
  );
};

export default Product;
