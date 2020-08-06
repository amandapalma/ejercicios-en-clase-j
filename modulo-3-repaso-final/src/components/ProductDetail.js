import React from 'react';

const ProductDetail = props => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title">Camiseta: {props.name}</h2>
            <a href="/">
              <span className="modal__close icon fas fa-times"></span>
            </a>
          </header>
          <section>
            <img className="card__img" src={props.imageUrl} alt={props.name} />
            <ul className="ml-1 mt-1">
              <li>Precio: {props.price}</li>
              <li>Descripción: {props.description}</li>
              <li>Tallas: {props.sizes.join(' - ')}</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
