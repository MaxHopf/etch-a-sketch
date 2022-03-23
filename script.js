"use strict"

const squareRoot = 32;

const sketchGrid = document.querySelector('#sketch-grid');

function createSquares(squareRoot) {
    for (let i = 0; i < squareRoot ** 2; i++) {
        const squareElement = document.createElement('div');
        squareElement.setAttribute('style', 'background-color: red');
        hoverEvent(squareElement);
        sketchGrid.appendChild(squareElement);
    }
}

function layoutSquaresToGrid(sketchGrid, squareRoot) {
    sketchGrid.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareRoot}, 1fr)`)
}

function hoverEvent(squareElement) {
    squareElement.addEventListener('mouseenter', () => {
        squareElement.setAttribute('style', 'background-color: white');
    });
}


