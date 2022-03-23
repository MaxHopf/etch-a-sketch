"use strict"

let squareRoot = 32;

const sketchGrid = document.querySelector('#sketch-grid');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    clearGrid();
    createSquareElements(squareRoot);
    createGrid(sketchGrid, squareRoot)
});

function createSquareElements(squareRoot) {
    for (let i = 0; i < squareRoot ** 2; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('element');
        changeElements(squareElement);
        sketchGrid.appendChild(squareElement);
    }
}

function createGrid(sketchGrid, squareRoot) {
    sketchGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareRoot}, 1fr)`);
}

function changeElements(squareElement) {
    squareElement.addEventListener('mouseenter', () => {
        squareElement.setAttribute('style', 'background-color: white');
    });
}

function clearGrid() {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => element.remove());
}




createSquareElements(squareRoot);
createGrid(sketchGrid, squareRoot)


