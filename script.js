
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
    row.classList.add('row' + i);
    row.textContent = '';

    grid.appendChild(row);
}

function createColumns (i, j) {

    const rows = document.querySelector('.row' + i);

    const box = document.createElement('div');
    box.classList.add('box' + j);
    box.textContent = '';
    
    rows.appendChild(box);
}

createGrid();

// Continues to add boxes to first row instead of next row. Try classList.add('row' + j)?