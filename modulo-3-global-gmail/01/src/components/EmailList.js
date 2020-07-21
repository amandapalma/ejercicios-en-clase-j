import React from 'react';
import EmailItem from './EmailItem';

class EmailList extends React.Component {
  render() {
    const tocho = 'Node news';
    return (
      <table className="table">
        <tbody>
          <EmailItem from="From fest" time="15:27" subject="Entradas ya a la venta" />
          <EmailItem from="GitHub" time="16:00" subject="Adalab/project-promo-i Local store #23" />
          <EmailItem from="Node Weekly" time="21:45" subject={tocho} />
        </tbody>
      </table>
    );
  }
}

export default EmailList;
