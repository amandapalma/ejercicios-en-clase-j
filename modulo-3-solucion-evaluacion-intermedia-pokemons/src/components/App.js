import React from 'react';
import PokeList from './PokeList';
import data from '../data/pokemons.json';

const App = () => {
  return (
    <div>
      <h1>PokeDex</h1>
      <PokeList list={data} />
    </div>
  );
};

export default App;
