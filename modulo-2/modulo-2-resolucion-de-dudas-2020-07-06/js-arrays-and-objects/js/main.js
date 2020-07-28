'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

// TÚ CÓDIGO AQUÍ

const resultElement = document.querySelector('.js-result');

// const showPromos1 = () => {
//   let codeHtml = '<ul>';
//   for (const promo of promos) {
//     codeHtml += `<li>${promo.name}</li>`;
//   }
//   codeHtml += '</ul>';
//   resultElement.innerHTML = codeHtml;
// };

// showPromos1();

// const showPromos4 = () => {
//   let codeHtml = '<ul>';
//   for (const promo of promos) {
//     codeHtml += `<li>`;
//     codeHtml += `<p>Nombre: ${promo.name}</p>`;
//     codeHtml += `<ul>`;
//     const students = promo.students;
//     for (const student of students) {
//       codeHtml += `<li>${student.name}</li>`;
//     }
//     codeHtml += `</ul>`;
//     codeHtml += `</li>`;
//   }
//   codeHtml += '</ul>';
//   resultElement.innerHTML = codeHtml;
// };

// showPromos4();

const showPromos4B = () => {
  let codeHtml = '<ul>';
  for (let promoIndex = 0; promoIndex < promos.length; promoIndex++) {
    codeHtml += `<li>`;
    codeHtml += `${promoIndex + 1}:`;
    codeHtml += `<p>Nombre: ${promos[promoIndex].name}</p>`;
    // codeHtml += `<p>Nombre: ${promo.name}</p>`;
    codeHtml += `<ul>`;
    const students = promos[promoIndex].students;
    for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
      codeHtml += `<li>${students[studentIndex].name}</li>`;
      // codeHtml += `<li>${student.name}</li>`;
    }
    codeHtml += `</ul>`;
    codeHtml += `</li>`;
  }
  codeHtml += '</ul>';
  resultElement.innerHTML = codeHtml;
};

showPromos4B();
