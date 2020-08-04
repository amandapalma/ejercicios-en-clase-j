import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EmailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrash = this.handleTrash.bind(this);
  }

  handleTrash() {
    this.props.deleteEmail(this.props.id);
  }

  render() {
    return (
      <tr>
        <td>
          <Link to={`/emails/${this.props.id}`} className="text--decoration--none">
            {this.props.from}
          </Link>
        </td>
        <td>
          <Link to={`/emails/${this.props.id}`} className="text--decoration--none">
            {this.props.subject}
          </Link>
        </td>
        <td>
          <Link to={`/emails/${this.props.id}`} className="text--decoration--none">
            {this.props.time}
          </Link>
        </td>
        <td className="text-align-right">
          <button className="form__btn fas fa-trash" onClick={this.handleTrash}></button>
        </td>
      </tr>
    );
  }
}

EmailItem.propTypes = {
  from: PropTypes.string.isRequired
};

EmailItem.defaultProps = {
  from: 'Remitente desconocido'
};

export default EmailItem;
