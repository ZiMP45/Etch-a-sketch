
function printGrid () {
    for (let i = 0; i < 16; i++) {
        const rows = document.querySelector('#row');

        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = '';
        
        rows.appendChild(box);
    }
}

printGrid();