/* eslint-disable no-console */
'use strict';

const basket = {
  max: 5,
  min: 0,
  current: 0,
  initial: 0,

  add: function() {
    if (this.current < this.max) {
      this.current += 1;
      // la línea anterior es lo mismo que la siguiente
      // this.current = this.current + 1;
    }
  },

  // add: () => {
  //   // esta función igual que la función anterior pero en arrow
  //   if (this.current < this.max) {
  //     this.current += 1;
  //   }
  // },

  sub: function() {
    if (this.current > this.min) {
      this.current -= 1;
      // la línea anterior es lo mismo que la siguiente
      // this.current = this.current - 1;
    }
  },

  // sub: () => {
  //   // esta función igual que la función anterior pero en arrow
  //   if (this.current > this.min) {
  //     this.current -= 1;
  //   }
  // },

  reset: function() {
    this.current = this.initial;
  }

  // reset: () => {
  //   // esta función igual que la función anterior pero en arrow
  //   this.current = this.initial;
  // }
};

basket.add();
basket.add();
basket.reset();
basket.add();
basket.sub();
basket.sub();
basket.sub();

console.log('Valor actual:', basket.current);
