// este fichero es un módulo
// exporta funciones (o cualquier otra cosa de JS) para que sea usada en otros ficheros
// en este fichero también puede importar cosas de otros ficheros

export default {
  getEl: selector => {
    return document.querySelector(selector);
  }
};
