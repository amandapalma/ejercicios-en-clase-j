import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import emailsFromApi from '../data/emails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      emails: emailsFromApi
    };
    this.changeFilterText = this.changeFilterText.bind(this);
    this.removeEmail = this.removeEmail.bind(this);
  }

  // event methods

  changeFilterText(text) {
    this.setState({
      filterText: text
    });
  }

  removeEmail(clickedEmailId) {
    const email = this.state.emails.find(email => email.id === clickedEmailId);
    email.deleted = true;
    this.setState({
      emails: this.state.emails
    });
  }

  // render methods

  render() {
    const filteredEmails = this.state.emails
      .filter(email => {
        return email.deleted === false;
      })
      .filter(email => {
        return email.subject.includes(this.state.filterText);
      });

    return (
      <div>
        <Header pepino={this.changeFilterText} />
        <h2>Filtrando por: "{this.state.filterText}"</h2>
        <EmailList emails={filteredEmails} deleteEmail={this.removeEmail} />
        <EmailReader deleteEmail={this.removeEmail} />
      </div>
    );
  }
}

export default App;
