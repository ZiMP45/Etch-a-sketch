
function createGrid () {
    for (let i = 0; i < 16; i++) {
        createRows(i);
        for (let j = 0; j < 16; j++) {
            createColumns(i, j);
        }
    }
} 

function createRows (i) {
    const grid = document.querySelector('.grid');

    const row = document.createElement('div');
    row.setAttribute('id', 'row' + i);
    row.classList.add('yDimension');
    row.textContent = '';

    grid.appendChild(row);
}

function createColumns (i, j) {

    const rows = document.querySelector('#row' + i);

    const box = document.createElement('div');
    box.setAttribute('id', 'box' + j);
    box.classList.add('xDimension');
    box.textContent = '';
    
    rows.appendChild(box);
}

createGrid();