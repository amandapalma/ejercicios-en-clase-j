import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: true
    };
  }

  render() {
    const isLogged = false;

    return (
      <div>
        <Header isLogged={isLogged} />
        <Footer isLogged={isLogged} />
      </div>
    );
  }
}

export default App;
