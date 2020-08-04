import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import emailsFromApi from '../data/emails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: localStorage.getItem('filterText') || '',
      emails: emailsFromApi
    };
    this.handleFilterText = this.handleFilterText.bind(this);
    this.deleteEmail = this.deleteEmail.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderEmailReader = this.renderEmailReader.bind(this);
  }

  // event methods

  handleFilterText(text) {
    this.setState({ filterText: text });
  }

  handleReset() {
    this.setState({ filterText: '' });
  }

  deleteEmail(clickedEmailId) {
    const email = this.state.emails.find(email => email.id === clickedEmailId);
    email.deleted = true;
    this.setState({ emails: this.state.emails });
  }

  // render methods

  getFilteredEmails() {
    const filterText = this.state.filterText.toLowerCase();
    return this.state.emailsPu
      .filter(email => email.deleted === false)
      .filter(email => email.subject.toLowerCase().includes(filterText));
  }

  renderEmailReader(props) {
    const routeEmailId = props.match.params.id;
    const email = this.state.emails.find(email => email.id === routeEmailId);
    if (email === undefined) {
      return 'Cargando...';
    } else {
      return (
        <EmailReader
          subject={email.subject}
          body={email.body}
          from={email.from}
          deleteEmail={this.deleteEmail}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Header
          filterText={this.state.filterText}
          handleFilterText={this.handleFilterText}
          handleReset={this.handleReset}
        />
        <h2>Filtrando por: "{this.state.filterText}"</h2>
        <Switch>
          <Route exact path="/">
            <EmailList emails={this.getFilteredEmails()} deleteEmail={this.deleteEmail} />
          </Route>
          <Route path="/emails/:id" children={this.renderEmailReader}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
