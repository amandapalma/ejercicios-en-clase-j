'use strict';

const paragraphs = document.querySelectorAll('.js-item');

function handleClick(ev) {
  console.log('Me han clickado', ev.target.id);
}

for (const paragraph of paragraphs) {
  paragraph.addEventListener('click', handleClick);
}
