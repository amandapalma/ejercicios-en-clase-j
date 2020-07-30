import React from 'react';

const Input = (props) => {

  const updateInputValue = (evt) => {
    props.handleInputValue(evt.currentTarget.name,evt.currentTarget.value)
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={props.id}>{props.labelName}</label>
      <input type={props.type} 
             name={props.name}
             id={props.id}
             value={props.value}
             onChange={updateInputValue}
             checked={props.checked}
             required
      />
    </div>
  )
}

export default Input;