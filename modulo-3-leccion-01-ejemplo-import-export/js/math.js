// este fichero es un módulo
// exporta funciones (o cualquier otra cosa de JS) para que sea usada en otros ficheros
// en este fichero también puede importar cosas de otros ficheros
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

export default {
  add: add,
  sub: sub
};
