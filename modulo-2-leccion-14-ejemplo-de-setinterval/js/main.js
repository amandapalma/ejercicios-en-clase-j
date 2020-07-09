'use strict';

let myInterval;

const paintCounter = () => {
  const date = new Date();
  console.log(
    'Son las',
    date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds() +
      ':' +
      date.getMilliseconds()
  );
};

const startCounter = () => {
  clearInterval(myInterval);
  myInterval = setInterval(paintCounter, 1000);
};

const stopCounter = () => {
  clearInterval(myInterval);
};

console.log('Me ejecuto antes del interval');
startCounter();
console.log('Me ejecuto antes del interval aunque esté una línea de código después');
