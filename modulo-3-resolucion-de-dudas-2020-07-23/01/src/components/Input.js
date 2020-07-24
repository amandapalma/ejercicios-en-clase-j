import React from 'react';

const Input = props => {
  return (
    <div>
      <label>{props.label}</label>
      <input type="text" name={props.name} />
    </div>
  );
};

export default Input;
