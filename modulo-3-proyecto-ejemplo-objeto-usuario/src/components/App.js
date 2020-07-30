import React from 'react';
import Form from './Form.js';
import Info from './Info.js'
import '../stylesheets/App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    //guardo en el estado un objeto con los valores que pasaré a través del value
    //al formulario
    this.state = {
      userInfo: {
        palette:'',
        name:'',
        job:'',
        phone:'',
        email:'',
        linkedin:'',
        github:''
      }
    }
  }

  //función encargada de setear de nuevo el estado cada vez que ocurre un onChange en el input
  //desde mi componente reutilizable Input recibiré el name y el value de cada input para setear el estado
  handleInputValue (inputName,inputValue) {
    this.setState(prevState => {
      return {
        //accedo al objeto que contiene los datos de usuario, 
        //por medio de spread operator clono y expando cada una de sus propiedades y actualizo el valor de la que coincida
        //con el parámetro de mi función, recuerda que es la manera en la que puedo acceder a la propiedad de un objeto que es variable
        userInfo: {
          ...prevState.userInfo,
          [inputName]:inputValue
        }
      }
    })
  }

  render() {
    return (
      //Renderizo los componentes y paso las props que necesito
      //envío la función que va a tener que ejecutarse desde input handleInputValue (recuerda que luego la encargada de ejecutar está función está en props)
      <div className="App">
        <Form 
          name={this.state.userInfo.name}
          job={this.state.userInfo.job}
          phone={this.state.userInfo.phone}
          email={this.state.userInfo.email}
          linkedin={this.state.userInfo.linkedin}
          github={this.state.userInfo.github}
          handleInputValue = {this.handleInputValue}
          checked = {this.state.userInfo.palette}
        />
        <Info 
          colorPalette={this.state.userInfo.palette}
          name={this.state.userInfo.name}
          job={this.state.userInfo.job}
          phone={this.state.userInfo.phone}
        />
      </div>
    );
  }
}

export default App;
