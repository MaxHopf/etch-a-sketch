"use strict"

const squareRoot = 32;

const sketchGrid = document.querySelector('#sketch-grid');

function createSquares(squareRoot) {
    for (let i = 0; i < squareRoot ** 2; i++) {
        const square = document.createElement('div');
        square.setAttribute('style', 'background-color: red');
        sketchGrid.appendChild(square);
    }
}

function layoutSquaresToGrid(sketchGrid, squareRoot) {
    sketchGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareRoot}, 1fr)`)
}



