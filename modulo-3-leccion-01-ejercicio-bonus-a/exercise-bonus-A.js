'use strict';

class Polygon {
  constructor(sides, base, height) {
    // el constructor de mi super clase recibirá por parámetros el número de lados del polígono, la base y la altura
    this.numberOfSides = sides;
    this.base = base;
    this.height = height;
  }

  // en nuestra clase madre definimos un método para el perímetro
  perimeter() {
    console.log(this.base * this.numberOfSides);
  }

  // definimos un método para el área
  area() {
    return this.base * this.height;
  }
}

// creo una subclase que hereda de mi madre Polygon
class Square extends Polygon {
  constructor(sideSize) {
    // en super heredo de mi madre (la propiedad con el número de lados y recibiré como parámetro la altura y la base)
    super(4, sideSize, sideSize); // <---aquí uso el constructor porque estoy heredando estas propiedades de mi clase madre (super es como llamar al constructor de la madre)
    this.side = sideSize; // como es un cuadrado le digo que tendrá un atributo de clase lado que será igual la base y la altura
  }
}

// creo otra subclase que hereda de Polygon
class Triangle extends Polygon {
  constructor(baseSize, heightSize) {
    // <-- al instaciar el objeto le pasaré por parámetro, la base y la altura
    super(3, baseSize, heightSize); // sigo rcogiendo de mi madre el número de lados y el tamaño que me ha llegado por parámetro
  }

  area() {
    console.log(super.area() / 2); // <---para solucionar el área del triángulo como en mi madre tengo definido que el área es base x altura
    // y el área del triángulo es base x altura / 2 necesito ejecutar el método de mi madre y el resultado dividirlo entre 2
  }
}

// instancio los objetos
const mySquare = new Square(4);
const myTriangle = new Triangle(4, 3);

// llamoa los métodos para los perímetros y la áreas
mySquare.perimeter();
myTriangle.perimeter();
myTriangle.area();
