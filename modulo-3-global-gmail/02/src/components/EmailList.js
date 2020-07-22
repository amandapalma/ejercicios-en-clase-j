import React from 'react';
import EmailItem from './EmailItem';

class EmailList extends React.Component {
  render() {
    const emails = [
      {
        subject: 'Entradas ya a la venta',
        time: '15:27'
      },
      {
        from: 'GitHub',
        subject: 'Adalab/project-promo-i Local store #23',
        time: '16:00'
      },
      {
        from: 'Node Weekly',
        subject: 'Node news',
        time: '21:45'
      }
    ];

    // const emailsHTML = [];
    // for (let index = 0; index < emails.length; index++) {
    //   emailsHTML.push(
    //     <li key={index} identificador={index} className="email">
    //       <span>{emails[index].from}</span>
    //     </li>
    //   );
    // }

    const result = emails.map((email, index) => {
      return <EmailItem key={index} time={email.time} subject={email.subject} />;
    });

    return (
      <table className="table">
        <tbody>{result}</tbody>
      </table>
    );
  }
}

export default EmailList;
