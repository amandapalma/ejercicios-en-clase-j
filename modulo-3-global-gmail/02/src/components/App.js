import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <EmailList />
        <EmailReader />
      </div>
    );
  }
}

export default App;
