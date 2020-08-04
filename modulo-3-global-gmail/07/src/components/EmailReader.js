import React from 'react';
import PropTypes from 'prop-types';

const EmailReader = props => {
  const handleTrashClick = ev => {
    console.log('Me han clickado');
    props.deleteEmail('id-1');
  };

  const renderEmailHeader = () => {
    return (
      <div>
        <h2 className="title--meidum">{props.subject}</h2>
        <h3 className="title--small">
          <span className="text--bold display-inline-block mr-1">{props.from}</span>
        </h3>
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div className="text-align-right">
        <button className="fas fa-times-circle form__btn"></button>
        <button className="fas fa-trash form__btn" onClick={handleTrashClick}></button>
      </div>
    );
  };

  const renderEmailBody = () => {
    return <p>{props.body}</p>;
  };

  const renderResponseButtons = () => {
    return (
      <div className="mt-1">
        <button className="form__btn">
          <span className="fas fa-reply"></span> Responder
        </button>

        <button className="form__btn">
          <span className="fas fa-reply-all"></span> Responder a todos
        </button>

        <button className="form__btn">
          <span className="fas fa-share"></span> Reenviar a todos
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="col2 mt-1 pt-1">
        {renderEmailHeader()}
        {renderButtons()}
      </div>
      {renderEmailBody()}
      {renderResponseButtons()}
    </div>
  );
};

EmailReader.propTypes = {
  from: PropTypes.string.isRequired
};

EmailReader.defaultProps = {
  from: 'Remitente desconocido'
};

export default EmailReader;
