
function printGrid () {
    for (let j = 0; j < 16; j++) {
        const grid = document.querySelector('.grid')

        const row = document.createElement('div');
        row.classList.add('row');
        row.textContent = '';

        grid.appendChild(row);

        for (let i = 0; i < 16; i++) {
            const rows = document.querySelector('.row');

            const box = document.createElement('div');
            box.classList.add('box');
            box.textContent = '';
            
            rows.appendChild(box);
        }
    }
}

printGrid();