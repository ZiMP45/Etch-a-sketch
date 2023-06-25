createGrid(16, 16);

function getValue() {
    var e = document.getElementById("gridSize");
    printGrid(e);
}

function printGrid(size) {

    let height = size.value;
    let width = size.value;

    createGrid(height, width);
}

function createGrid (height, width) {
    for (let i = 0; i < height; i++) {
        createRows(i);
        for (let j = 0; j < width; j++) {
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