import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      job: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const value = ev.currentTarget.value;
    const stateAttribute = ev.currentTarget.id;
    // creamos un objeto vacío
    const newState = {};
    // lo rellenamos dinámicamente
    // el nombre del attributo lo hemos cogido de ev.currentTarget.id al vuelo
    newState[stateAttribute] = value;
    console.log(newState);
    this.setState(newState);

    // Los siguientes ifs son la forma tediosa de hacerlo
    // if (ev.currentTarget.id === 'email') {
    //   this.setState({
    //     email: ev.currentTarget.value
    //   });
    // } else if (ev.currentTarget.id === 'job') {
    //   this.setState({
    //     job: ev.currentTarget.value
    //   });
    // }
  }

  render() {
    return (
      <div>
        <h1 className="title--medium">
          Formulario: gestión de varios inputs con una sola función manejadora
        </h1>
        <form>
          <div>
            <label htmlFor="email" className="form__label ">
              Email
            </label>
            <input
              className="form__input-text"
              type="text"
              name="email"
              id="email"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="job" className="form__label ">
              Job
            </label>
            <input
              className="form__input-text"
              type="text"
              name="job"
              id="job"
              onChange={this.handleInput}
            />
          </div>
        </form>
        <article className="border--medium">
          <p>Email: {this.state.email}</p>
          <p>Job: {this.state.job}</p>
        </article>
      </div>
    );
  }
}

export default App;
