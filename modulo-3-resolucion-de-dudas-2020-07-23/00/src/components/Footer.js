import React from 'react';

function Footer(props) {
  console.log(props);

  let loggedClassName = '';
  if (props.isLogged === true) {
    loggedClassName = 'logged';
  } else {
    loggedClassName = 'anonymous';
  }

  return (
    <>
      <p className={loggedClassName}>{props.isLogged === true ? 'Bienvenida' : 'Iniciar sesión'}</p>
    </>
  );
}

export default Footer;
