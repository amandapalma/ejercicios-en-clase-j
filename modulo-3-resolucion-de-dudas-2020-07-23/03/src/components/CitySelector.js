import React from 'react';

const CitySelector = props => {
  const handleCityClick = ev => {
    console.log('Me han seleccionado', ev.currentTarget.value);
    const city = ev.currentTarget.value;
    const type = ev.currentTarget.name;
    props.handleCity(city, type);
  };

  return (
    <div>
      <p>Ciudad donde vivo</p>
      <select name="currentCity" onChange={handleCityClick}>
        <option value="Madrid">Madrid</option>
        <option value="Málaga">Málaga</option>
        <option value="Vigo">Vigo</option>
        <option value="Buenos Aires">Buenos Aires</option>
      </select>
      <p>Ciudad donde nací</p>
      <select name="birthCity" onChange={handleCityClick}>
        <option value="Madrid">Madrid</option>
        <option value="Málaga">Málaga</option>
        <option value="Vigo">Vigo</option>
        <option value="Buenos Aires">Buenos Aires</option>
      </select>
      <p>{props.help}</p>
    </div>
  );
};

export default CitySelector;
