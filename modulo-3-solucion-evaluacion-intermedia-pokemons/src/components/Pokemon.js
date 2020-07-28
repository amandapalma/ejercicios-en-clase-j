import React from 'react';

const Pokemon = props => {
  const typesLi = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });

  return (
    <>
      <h2 className="card__title">{props.pokemon.name}</h2>
      <img src={props.pokemon.url} alt="Pokemon" className="card__img " />
      <ul className="card__description ml-1">{typesLi}</ul>
    </>
  );
};

export default Pokemon;
