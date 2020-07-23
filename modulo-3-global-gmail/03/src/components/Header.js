import React from 'react';

const foo = 123;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleInboxClick = this.handleInboxClick.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
  }

  handleInboxClick(ev) {
    ev.preventDefault();
    console.log('Mi this es', this);
    this.logData();
    console.log('Me han clickado');
    console.log('El elemento clickado es', ev.currentTarget);
  }

  handleTrashClick(ev) {
    ev.preventDefault();
    console.log('Mi this es', this);
    this.logData();
    console.log('Me han clickado');
    console.log('El elemento clickado es', ev.currentTarget);
  }

  logData() {
    console.log('Pinto cosas en consola');
  }

  renderLogo() {
    return (
      <div>
        <h1 className="title">
          <span className="fas fa-envelope-open-text"></span>
          Gmail
        </h1>
      </div>
    );
  }

  renderForm() {
    return (
      <form className="text-align-right">
        <button className="form__btn" id="inbox" onClick={this.handleInboxClick}>
          <span className="fas fa-inbox"></span>
          Recibidos
        </button>
        <button className="form__btn" id="trash" onClick={this.handleTrashClick}>
          <span className="fas fa-trash"></span>
          Papelera
        </button>
        <input className="form__input-text" type="text" placeholder="Buscar un correo" />
      </form>
    );
  }

  render() {
    return (
      <header className="col2 mb-1">
        {this.renderLogo()}
        {this.renderForm()}
      </header>
    );
  }
}

export default Header;

// const button = document.querySelector('.form__btn');

// function handleInboxClick(ev) {
//   ev.preventDefault();
//   console.log('Me han clickado');
// }

// button.addEventListener('click', handleInboxClick);
