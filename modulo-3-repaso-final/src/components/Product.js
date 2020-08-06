import React from 'react';

const App = props => {
  return (
    <article className="card">
      <img src={props.imgUrl} className="card__img" alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__description">{props.price} €</p>
      <button className="card__btn">Ver detalle del producto</button>
    </article>
  );
};

export default App;
