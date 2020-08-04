import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.handleActive = this.handleActive.bind(this);
  }

  handleActive() {
    console.log(this.state.isActive);
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    // opción 1
    // let divClassName = '';
    // if (this.state.isActive === true) {
    //   divClassName = 'wrapper active';
    // } else {
    //   divClassName = 'wrapper disabled';
    // }

    // opción 2
    // let divClassName = this.state.isActive === true ? 'wrapper active' : 'wrapper disabled';

    // opción 3
    let divClassName = `wrapper ${this.state.isActive === true ? 'active' : 'disabled'}`;

    console.log(divClassName);
    return (
      <div>
        <p className={divClassName}>Hola mundo</p>
        <p className={`wrapper ${this.state.isActive === true ? 'active' : 'disabled'}`}>
          Hola mundo
        </p>
        <button onClick={this.handleActive}>Cambiar estado</button>
      </div>
    );
  }
}

export default App;
