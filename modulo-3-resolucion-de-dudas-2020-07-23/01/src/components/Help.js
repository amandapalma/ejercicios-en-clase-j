import React from 'react';

const Help = props => {
  return (
    <div className="help">
      <p>
        <strong>Ayuda:</strong> {props.children}
        <button>X</button>
      </p>
    </div>
  );
};

export default Help;
