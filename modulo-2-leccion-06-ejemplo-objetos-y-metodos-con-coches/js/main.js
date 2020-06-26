'use strict';

const createCar = function (name) {
  return {
    // propiedades del objeto
    name: name,
    gpsX: 0,
    gpsY: 0,
    // métodos del objeto
    move: function (incrementX = 0, incrementY = 0) {
      // this hace referencia al objeto sobre el que estamos trabajando en cada momento
      // en la siguiente línea this es car1 cuando estamos ejecutando car1.move(...) y this es car2 cuando estamos ejecutando car2.move(...)
      this.gpsX = this.gpsX + incrementX;
      this.gpsY = this.gpsY + incrementY;
    },
    showPosition: function () {
      console.log(`${this.name} is in position x = ${this.gpsX} y = ${this.gpsY}`);
    }
  };
};

const car1 = createCar('Opel Corsa');
car1.showPosition();
car1.move(10, 20);
car1.showPosition();
car1.move(3, 4);
car1.showPosition();

const car2 = createCar('Twingo');
car2.showPosition();
car2.move(5, -15);
car2.showPosition();
