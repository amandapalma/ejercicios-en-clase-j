import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import emailsFromApi from '../data/emails';

const App = () => {
  const [filterText, setFilterText] = useState(localStorage.getItem('filterText') || '');
  // filterText equivale a this.state = { filterText: '' }
  // setFilterText equivale a this.setState({ filter: 'lo que sea' });
  const [emails, setEmails] = useState(emailsFromApi);
  // emails equivale a this.state = { emails: [...] }
  // setEmails equivale a this.setState({ emails: [...] });

  // events methods

  const handleFilterText = text => {
    setFilterText(text);
  };

  const handleReset = () => {
    setFilterText('');
  };

  const deleteEmail = clickedEmailId => {
    const email = emails.find(email => email.id === clickedEmailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  // render methods

  const getFilteredEmails = () => {
    const lowerCasefilterText = filterText.toLowerCase();
    return emails
      .filter(email => email.deleted === false)
      .filter(email => email.subject.toLowerCase().includes(lowerCasefilterText));
  };

  const renderEmailReader = props => {
    const routeEmailId = props.match.params.id;
    const email = emails.find(email => email.id === routeEmailId);
    if (email === undefined) {
      return 'Cargando...';
    } else {
      return (
        <EmailReader
          subject={email.subject}
          body={email.body}
          from={email.from}
          deleteEmail={deleteEmail}
        />
      );
    }
  };

  return (
    <div>
      <Header
        filterText={filterText}
        handleFilterText={handleFilterText}
        handleReset={handleReset}
      />
      <h2>Filtrando por: "{filterText}"</h2>
      <Switch>
        <Route exact path="/">
          <EmailList emails={getFilteredEmails()} deleteEmail={deleteEmail} />
        </Route>
        <Route path="/emails/:id" children={renderEmailReader}></Route>
      </Switch>
    </div>
  );
};

export default App;
