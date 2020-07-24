import React from 'react';
import CitySelector from './CitySelector';

const Form = props => {
  return (
    <form>
      <label>Dirección</label>
      <input type="text" />
      <CitySelector help={props.help} handleCity={props.handleCity} />
    </form>
  );
};

export default Form;
