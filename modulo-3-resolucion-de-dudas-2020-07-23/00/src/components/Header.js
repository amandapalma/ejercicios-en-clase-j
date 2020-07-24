import React from 'react';

class Header extends React.Component {
  constructor(props) {
    // este constructor no nos aporta nada
    super(props);
  }

  getLoggedClassName() {
    if (this.props.isLogged === true) {
      return 'logged';
    } else {
      return 'anonymous';
    }
  }

  render() {
    console.log(this.props);

    let loggedClassName = '';
    if (this.props.isLogged === true) {
      loggedClassName = 'logged';
    } else {
      loggedClassName = 'anonymous';
    }

    return (
      <>
        <p className={`header ${loggedClassName}`}>
          {this.props.isLogged === true ? 'Bienvenida' : 'Iniciar sesión'}
        </p>
        <p className={`header ${this.props.isLogged === true ? 'logged' : 'anomymous'}`}>Hola</p>
        <p className={`header ${this.getLoggedClassName()}`}>Hola</p>
      </>
    );
  }
}

export default Header;
