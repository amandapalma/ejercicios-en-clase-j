import React from 'react';
import CollapseItem from './CollapseItem';

function CollapseList(props) {
  //este componente solamente sigue pasanso las props a cada colapsable que son los que tienen que manejar
  //las props
  //a cada componente colapsable le doy un id y le paso el método y el panel activo

    return (
      <div className="collapse-list">
        <CollapseItem handleCollapse = {props.handleCollapse}
                      activePanel = {props.activePanel}
                      id = 'collapse-1'
        >
          <h1>Contenido del colapsable 1</h1>
          <p>texto 1 agfkashdfkhasdf</p>
        </CollapseItem>

        <CollapseItem handleCollapse = {props.handleCollapse}
                      activePanel = {props.activePanel}
                      id = 'collapse-2'
        >
          <h1>Contenido del colapsable 2</h1>
          <p>texto 2 agfkashdfkhasdf</p>
        </CollapseItem>

        <CollapseItem handleCollapse={props.handleCollapse}
                      activePanel={props.activePanel}
                      id = 'collapse-3'
        >
          <h1>Contenido del colapsable 3</h1>
          <p>texto 3 agfkashdfkhasdf</p>
        </CollapseItem>
      </div>
    );

}

export default CollapseList;
