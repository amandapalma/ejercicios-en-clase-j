import React from 'react';
import PropTypes from 'prop-types';

class EmailItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleTrashClick = this.handleTrashClick.bind(this);
  }

  handleTrashClick() {
    this.props.deleteEmail(this.props.id);
  }

  render() {
    return (
      <tr className="cursor-pointer">
        <td>
          <a href="/" className="text--decoration--none">
            {this.props.from}
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
          <button className="form__btn fas fa-trash" onClick={this.handleTrashClick}></button>
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
