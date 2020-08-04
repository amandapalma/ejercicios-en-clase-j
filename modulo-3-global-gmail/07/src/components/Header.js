import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleInboxClick = this.handleInboxClick.bind(this);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
  }

  handleInboxClick(ev) {
    ev.preventDefault();
    console.log('El elemento clickado es', ev.currentTarget);
  }

  handleTrashClick(ev) {
    ev.preventDefault();
    console.log('El elemento clickado es', ev.currentTarget);
  }

  handleFilterText(ev) {
    this.props.handleFilterText(ev.currentTarget.value);
  }

  handleResetButton(ev) {
    ev.preventDefault();
    this.props.handleReset();
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

        <input
          className="form__input-text"
          type="text"
          placeholder="Buscar un correo"
          value={this.props.filterText}
          onChange={this.handleFilterText}
        />
        <button className="fas fa-times-circle form__btn" onClick={this.handleResetButton}></button>
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
