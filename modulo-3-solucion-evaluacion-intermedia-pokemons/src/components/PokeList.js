import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
  const listLi = props.list.map(pokemon => {
    return (
      <li key={pokemon.id} className="card">
        <Pokemon pokemon={pokemon} />
      </li>
    );
  });

  return <ul className="cards">{listLi}</ul>;
};

export default PokeList;
