import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedCities: [], // array de strings
      selectedCompanies: [] // array de strings
    };
    // pedir los datos con un fetch
    // - guardamos la respuesta en this.state.user
  }

  handleCities() {
    // comprobar si en this.state.selectedCities está la ciudad clickada
    // - si no está push
    // - si sí esta splice
    // - actualizamos el estado
  }

  handleCompanies() {
    // comprobar si en this.state.selectedCompanies está la ciudad clickada
    // - si no está push
    // - si sí esta splice
    // - actualizamos el estado
  }

  render() {
    // recorremos los usuarios del estado
    // - creamos un array con las ciudades
    // - pintamos las ciudades con un map
    // - comprobando si hay que des/activar su propiedad "checked"

    // recorremos los usuarios del estado
    // - creamos un array con las empresas
    // - pintamos las empresas con un map
    // - comprobando si hay que des/activar su propiedad "checked"

    // recorremos los usuarios del estado
    // - filtrar los usuarios por ciudad y empresa
    // - pintamos las map con un map
    return <div>Hola mundo</div>;
  }
}

export default App;
