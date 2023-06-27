const grid = document.querySelector('.grid');
const black = document.querySelector('#black');
const multi = document.querySelector('#multicolor');
const erase = document.querySelector('#erase');
const gradient = document.querySelector('#gradient')
const buttons = document.querySelectorAll('button');
let increase = 0.1;

function createGrid (value) {
    for (let i = 0; i < value*value; i++){     
        const row = document.createElement('div');
        row.classList.add('box');
        row.addEventListener('mouseover', function () {
            row.classList.add('green');
        });

        black.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('green');
                row.classList.remove('multi');
                row.removeAttribute('style');
                row.classList.add('black');
            })
        });

        erase.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('green');
                row.classList.remove('black');
                row.classList.remove('multi');
                row.classList.remove('gradient');
                row.removeAttribute('style');
            })
        });

        multi.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('green');
                row.classList.remove('black');
                row.classList.add('multi');
                row.style.backgroundColor = getRandomColor();
            })
        });

        gradient.addEventListener('click', function () {
            row.addEventListener('mouseover', function () {
                row.classList.remove('green');
                row.classList.remove('black');
                row.classList.remove('multi');
                row.removeAttribute('style');
                row.classList.add('gradient');

            })

            let alphaValue = 0;
            let rgbValue = `rgba(0, 0, 0, ${alphaValue})`;

            row.addEventListener('mouseover', darkenBox);

            function darkenBox(e) {
                alphaValue += 0.1;
                rgbValue= `rgba(0, 0, 0, ${alphaValue})`;
                row.style.backgroundColor = rgbValue;
            }
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

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        button.onclick = transformButton();
        setTimeout(resetButton, 150);

        function transformButton() {
            button.style.transform = "scale(0.97)";
            button.style.transition = "transform 0.2 ease";
            button.style.border = "2px solid #ffc600";
            button.style.boxShadow = "0 0 3px 2.5px #ffc600";
        }

        function resetButton() {
            button.style.transform = "scale(1.0)";
            button.style.border = "1px solid darkgray";
            button.style.boxShadow = "none";
        }
    })
})