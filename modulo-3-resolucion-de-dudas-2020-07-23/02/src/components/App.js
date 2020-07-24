import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  render() {
    return <div>Fecha: {new Date().toLocaleTimeString()}</div>;
  }
}

export default App;
