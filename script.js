const rows = document.querySelector('#row');

const box = document.createElement('div');
box.classList.add('box');
box.textContent = 'Box';

rows.appendChild(box);

// function printGrid () {

//     for (let i = 0; i < 16; i++) {
//         const div = document.createElement('div');
//         div.classList.add('box');
//         rows.appendChild('div');
//     }
// }