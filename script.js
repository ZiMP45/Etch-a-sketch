const grid = document.querySelector('.grid');

function createGrid () {
    for (let i = 0; i < 256; i++){     
        const row = document.createElement('div');
        row.classList.add('box');
        row.addEventListener('mouseover', e => e.target.classList.add('hover'));
        grid.append(row);
    }   
}

function deleteChild (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


createGrid();

// const container = document.querySelector('.grid');
// deleteChild(container);