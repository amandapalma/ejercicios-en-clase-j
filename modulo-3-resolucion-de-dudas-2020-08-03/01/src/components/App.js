import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Me han clickado');
    this.setState({});
  }

  render() {
    return (
      <div>
        Hola mundo
        <button onClick={this.handleClick}>Púlsame</button>
      </div>
    );
  }
}

export default App;
