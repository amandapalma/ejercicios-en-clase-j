/* eslint-disable no-console */
'use strict';

class Auto {
  constructor(name, type) {
    console.log('Ejecutando constructor de Auto para:', name);
    this.name = name;
    this.distance = 0;
  }

  printPosition() {
    console.log(`El auto ${this.name} ha avanzado ${this.distance} metros`);
  }
}

class Car extends Auto {
  constructor(name) {
    super(name);
    console.log('Ejecutando constructor de Car para:', name);
    this.distance = 100;
    this.wheels = 4;
  }

  move(distance = 0) {
    this.distance += distance;
    this.printPosition();
  }
}

class Moto extends Auto {
  constructor(name) {
    super(name);
    this.wheels = 2;
  }

  move(distance = 0) {
    if (distance >= 0) {
      this.distance += distance;
    } else {
      console.error('Las motos no tienen marcha atrás');
    }
  }
}

const myCar = new Car('Opel');
myCar.move(10);
myCar.printPosition();
myCar.move(-5);
myCar.printPosition();

const myCar2 = new Car('Nissan');
myCar2.move(10);

const myMoto = new Moto('Vespa');
myMoto.move(10);
myMoto.printPosition();
myMoto.move(-5);
myMoto.printPosition();
