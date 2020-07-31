import React from 'react';
import Input from './Input';

const Form = (props) => {
//En este componente renderizo cada uno de los inputs personalizables
//y le paso las props que necesitan
//en el caso de que los inputs sean de tipo radio le paso el checked
//si está o no está checked lo valido con un ternario, si lo que recibo en la prop checked
//coincide con mi value devuelvo true, si no es así false
  return <form action="">
    <div className="options">
      <Input type="radio"
            name="palette"
            id="palette-1"
            labelName="Color 1"
            value="1"
            handleInputValue={props.handleInputValue}
            checked={props.checked === "1" ? true : false}
      />
      <Input type="radio"
            name="palette"
            id="palette-2"
            labelName="Color 2"
            value="2"
            handleInputValue={props.handleInputValue}
            checked={props.checked === "2" ? true : false}
      />
      <Input type="radio"
            name="palette"
            id="palette-3"
            labelName="Color 3"
            value="3"
            handleInputValue={props.handleInputValue}
            checked={props.checked === "3" ? true : false}
      />
    </div>
    <Input type="text"
           name="name"
           id="user-name"
           labelName="Nombre completo"
           value={props.name}
           handleInputValue={props.handleInputValue}
    />
    <Input type="text"
           name="job"
           id="user-job"
           labelName="Profesión"
           value={props.job}
           handleInputValue={props.handleInputValue}
    />      
    <Input type="text"
           name="phone"
           id="user-phone"
           labelName="Teléfono"
           value={props.phone}
           handleInputValue={props.handleInputValue}
    />
    <Input type="text"
           name="email"
           id="user-email"
           labelName="Email"
           value={props.email}
           handleInputValue={props.handleInputValue}
    />
    <Input type="text"
           name="linkedin"
           id="user-linkedin"
           labelName="LinkedIn"
           value={props.linkedin}
           handleInputValue={props.handleInputValue}
    />
    <Input type="text"
           name="github"
           id="user-github"
           labelName="Github"
           value={props.github}
           handleInputValue={props.handleInputValue}
    />
    <button type="submit">Enviar</button>
  </form> 
}

export default Form;