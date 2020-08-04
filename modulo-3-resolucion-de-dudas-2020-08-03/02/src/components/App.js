import React, { useState } from 'react';

const App = () => {
  const [name, setState] = useState('MC');

  return <div>Hola mundo</div>;
};

export default App;

// destructuring de arrays

const names = ['MC', 'Agustin', 'Tarzán', 'Cristina'];
const name0 = names[0];
const name1 = names[1];
const name2 = names[2];
const name3 = names[3];

const [, newNameDos, newNameIII] = names;

console.log(newNameDos);

// const lastName = names[names.length - 1]
// const lastName2 = names[names.length - 2]
// const lastName3 = names[names.length - 3]

const coors = [10, 34];
const [x, y] = coors;

// destructuring de objetos

const student = {
  name: 'MC',
  city: 'Badajoz',
  age: 34,
  OS: 'Mac'
};

const { name, age, country } = student;

const name = student.name;
const age = student.age;
const city = student.city;
const OS = student.OS;

console.log(name, age, country);
