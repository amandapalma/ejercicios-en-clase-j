import React from 'react';

function CollapseItem(props) {

  const displayPanel = (evt) => props.handleCollapse(evt.currentTarget.id);

    {/*cada colapsable recibe el id, escucha el click y renderiza una clase diferente en función
    de si el panel activo coincide con el id o no, la validación de la clase que pinto lo he hecho con un ternario
    ya que ya sabemos que es una expresión
    */}
    return (
      <div id={props.id} 
           onClick={displayPanel} 
           className={`collapse-item ${props.activePanel === props.id ? "active" : ""}`}
      >
        {props.children}
      </div>
    );
}

export default CollapseItem;
