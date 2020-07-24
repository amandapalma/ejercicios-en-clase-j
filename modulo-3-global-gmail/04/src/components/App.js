import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      name: 'Maricarmen',
      age: 30,
      address: {
        city: 'Badajoz',
        street: 'Gran vía',
        number: 32,
        gps: {
          latitude: ''
        }
      },
      emails: [
        {
          id: 'id-1',
          subject: 'Entradas ya a la venta!!!!',
          time: '15:27'
        },
        {
          id: 'id-2',
          from: 'GitHub',
          subject: 'Adalab/project-promo-i Local store #23',
          time: '16:00'
        },
        {
          id: 'id-3',
          from: 'Node Weekly',
          subject: 'Node news',
          time: '21:45'
        }
      ]
    };
    this.changeFilterText = this.changeFilterText.bind(this);
  }

  changeFilterText(text) {
    this.setState({
      address: {
        ...this.state.address,
        city: text
      }
    });
  }

  removeEmail(emailId) {
    console.log('Borrando email', emailId);
  }

  render() {
    const filteredEmails = this.state.emails.filter(email => {
      return email.subject.includes(this.state.filterText);
    });

    return (
      <div>
        <Header pepino={this.changeFilterText} />
        <h2>Filtrando por: "{this.state.filterText}"</h2>
        <EmailList emails={filteredEmails} />
        <EmailReader username="Maricarmen" deleteEmail={this.removeEmail} />
      </div>
    );
  }
}

export default App;

// const user = {
//   name: 'Maricarmen',
//   age: 30,
//   address: {
//     city: 'Badajoz',
//     street: 'Gran vía',
//     gps: {
//       latitude: ''
//     }
//   }
// };

// const user2 = {
//   ...user,
//   name: 'Lola'
// };

// console.log(user2);
