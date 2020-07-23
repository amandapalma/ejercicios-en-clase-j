import React from 'react';
import EmailItem from './EmailItem';

class EmailList extends React.Component {
  renderEmails() {
    return this.props.emails.map((email, index) => {
      return <EmailItem key={index} from={email.from} time={email.time} subject={email.subject} />;
    });
  }

  render() {
    return (
      <table className="table">
        <tbody>{this.renderEmails()}</tbody>
      </table>
    );
  }
}

export default EmailList;
