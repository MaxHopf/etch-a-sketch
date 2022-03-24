"use strict"

let squareRoot = 32;

const sketchGrid = document.querySelector('#sketch-grid');
const clearBtn = document.querySelector('#clear');
const slider = document.getElementById("myRange");

createSquareElements(squareRoot);
createGrid(sketchGrid, squareRoot);

clearBtn.addEventListener('click', () => {
    clearGrid();
    createSquareElements(squareRoot);
    createGrid(sketchGrid, squareRoot)
});

slider.addEventListener('change', () => {
    console.log(slider.value);
    squareRoot = slider.value;
    clearGrid();
    createSquareElements(squareRoot);
    createGrid(sketchGrid, squareRoot);

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


