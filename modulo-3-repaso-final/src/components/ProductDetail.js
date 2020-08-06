import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = props => {
  const handleModalContentClick = ev => {
    ev.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content" onClick={handleModalContentClick}>
            <header className="modal__header">
              <h2 className="modal__title">Camiseta: {props.name}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
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
    </Link>
  );
};

export default ProductDetail;
