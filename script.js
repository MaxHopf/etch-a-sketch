"use strict"

let squareRoot = 32;

const sketchGrid = document.querySelector('#sketch-grid');
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    clearGrid();
    createSquares(squareRoot);
    layoutSquaresToGrid(sketchGrid, squareRoot)
});

function createSquares(squareRoot) {
    for (let i = 0; i < squareRoot ** 2; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('element');
        hoverEvent(squareElement);
        sketchGrid.appendChild(squareElement);
    }
}

function layoutSquaresToGrid(sketchGrid, squareRoot) {
    sketchGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareRoot}, 1fr)`);
}

function hoverEvent(squareElement) {
    squareElement.addEventListener('mouseenter', () => {
        squareElement.setAttribute('style', 'background-color: white');
    });
}

function clearGrid() {
    const elements = document.querySelectorAll(".element");
    elements.forEach(element => element.remove());
}




createSquares(squareRoot);
layoutSquaresToGrid(sketchGrid, squareRoot)


