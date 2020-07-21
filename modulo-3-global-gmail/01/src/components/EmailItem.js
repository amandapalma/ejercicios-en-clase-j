import React from 'react';
import '../stylesheets/EmailItem.css';

class EmailItem extends React.Component {
  render() {
    console.log(this.props.subject);
    const from = this.props.from;
    return (
      <tr className="cursor-pointer">
        <td>
          <a href="/" className="text--decoration--none">
            {from}
          </a>
        </td>
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.subject}
          </a>
        </td>
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.time}
          </a>
        </td>
        <td className="text-align-right">
          <button className="form__btn fas fa-trash"></button>
        </td>
      </tr>
    );
  }
}

export default EmailItem;
