const grid = document.querySelector('.grid');

function createGrid (value) {
    for (let i = 0; i < value*value; i++){     
        const row = document.createElement('div');
        row.classList.add('box');
        row.addEventListener('mouseover', e => e.target.classList.add('hover'));
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
    // createGrid(value);

    if (value == 'select') {
        createGrid(16);
    } else {
        createGrid(value);
    }
})