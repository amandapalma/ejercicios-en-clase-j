import React from 'react';
import image from '../img/ralph.png'

const Info = (props) => {
  return (
    <div>
      {/*en className directamente valido la condición para que se muestre una clase u otra */}
      <div className={`ralph-wrapper ${props.colorPalette === '1' ? "red" : props.colorPalette === '2' ? "blue" : "green"}`}>
        <img src={image} alt={props.name}/>
        <p>{props.name}</p>
        <p>{props.job}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  )

}

export default Info;