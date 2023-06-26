const grid = document.querySelector('.grid');
const black = document.querySelector('#black');
const multi = document.querySelector('#multicolor');
const erase = document.querySelector('#erase');

function createGrid (value) {
    for (let i = 0; i < value*value; i++){     
        const row = document.createElement('div');
        row.classList.add('box');
        row.addEventListener('mouseover', function () {
            row.classList.add('red');
        });

        black.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('red');
                row.classList.remove('erase');
                row.classList.add('black');
            })
        });

        erase.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('red');
                row.classList.remove('black');
            })
        });

        grid.append(row);
        grid.style.setProperty('grid-template-columns', `repeat(${value}, 2fr)`);
        grid.style.setProperty('grid-template-rows', `repeat(${value}, 2fr)`);
    }   
}

function deleteChild (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(16);

const button = document.querySelector('#submit');
button.addEventListener('click', myFunction = () => {
    deleteChild(grid);
    let a = document.getElementById('gridSize');
    let value = a.value;

    if (value == 'select') {
        createGrid(16);
    } else {
        createGrid(value);
    }
})