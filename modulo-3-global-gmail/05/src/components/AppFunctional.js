import React, { useState } from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import emailsFromApi from '../data/emails';

const App = () => {
  const [filterText, setFilterText] = useState('');
  // filterText equivale a this.state = { filterText: '' }
  // setFilterText equivale a this.setState({ filter: 'lo que sea' });
  const [emails, setEmails] = useState(emailsFromApi);
  // emails equivale a this.state = { emails: [...] }
  // setEmails equivale a this.setState({ emails: [...] });

  // events methods

  const changeFilterText = text => {
    setFilterText(text);
  };

  const removeEmail = clickedEmailId => {
    const email = emails.find(email => email.id === clickedEmailId);
    email.deleted = true;
    setEmails([...emails]);
  };

  // render methods

  const filteredEmails = emails
    .filter(email => {
      return email.deleted === false;
    })
    .filter(email => {
      return email.subject.includes(filterText);
    });

  return (
    <div>
      <Header pepino={changeFilterText} />
      <h2>Filtrando por: "{filterText}"</h2>
      <EmailList emails={filteredEmails} deleteEmail={removeEmail} />
      <EmailReader deleteEmail={removeEmail} />
    </div>
  );
};

export default App;
