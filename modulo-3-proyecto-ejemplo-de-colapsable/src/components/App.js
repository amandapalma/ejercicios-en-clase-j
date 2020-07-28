import React from 'react';
import '../stylesheets/App.css';
import CollapseList from './CollapseList';

/*El manejo de los colapsables puede hacerse de muchas maneras, esta es una posible solución*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    //guardo el panel que está activo en el estado, al principio ninguno
    this.state = {
      activePanel: ''
    }
  }

  //creo un método que maneje el estado del colapsable y recibe el colapsable en el que he clickado por parámetro
  //me llegará por lifting a través del componente hija
  handleCollapse(targetId) {
    //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
    //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
    if(targetId !== this.state.activePanel){
      this.setState({activePanel: targetId})
    } else {
      this.setState({activePanel: ''})
    }
  }
  
  render() {
    return (
      <div className="App">
        {/*Paso el me´todo que controla y el panel activo del estado por props al componente hija que debe
        interactuar con estos datos*/}
        <CollapseList handleCollapse={this.handleCollapse} 
                      activePanel={this.state.activePanel}
        />
      </div>
    );
  }
}

export default App;
