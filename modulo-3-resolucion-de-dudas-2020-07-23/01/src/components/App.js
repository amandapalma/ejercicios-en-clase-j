import React from 'react';
import Input from './Input';
import Help from './Help';

class App extends React.Component {
  handleParagraphClick() {
    console.log('Me han clickado');
  }
  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <Input label="Correo electrónico" name="email" />
        <Help>
          <p>Escribe aquí tu email de trabajo</p>
        </Help>
        <Input label="Teléfono" name="phone" />
        <Help>
          <section>
            <h2>Teléfono</h2>
            <p onClick={this.handleParagraphClick}>Abrir la documentación para más ayuda</p>
          </section>
        </Help>
      </div>
    );
  }
}

export default App;
