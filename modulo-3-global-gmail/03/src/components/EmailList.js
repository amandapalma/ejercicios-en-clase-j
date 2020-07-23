import React from 'react';
import EmailItem from './EmailItem';

class EmailList extends React.Component {
  render() {
    const result = this.props.emails.map((email, index) => {
      return <EmailItem key={index} from={email.from} time={email.time} subject={email.subject} />;
    });

    return (
      <table className="table">
        <tbody>{result}</tbody>
      </table>
    );
  }
}

export default EmailList;
