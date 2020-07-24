import React from 'react';
import Form from './Form';

const App = () => {
  const handleCitySelector = (city, type) => {
    console.log('Me han seleccionado', city, type);
  };

  return (
    <div>
      <Form help="Por favor indíca tus datos" handleCity={handleCitySelector} />
    </div>
  );
};

export default App;
