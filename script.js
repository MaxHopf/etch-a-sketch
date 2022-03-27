"use strict"

let squareRoot = 32;
let penColor = '#ffffff';

const sketchArea = document.querySelector('#sketch-grid');
const clearBtn = document.querySelector('#clear');
const slider = document.querySelector('#myRange');
const colorSelector = document.querySelector('#colorselector');

generatePixels(squareRoot);
createGrid(sketchArea, squareRoot);
draw(getPixels());

clearBtn.addEventListener('click', () => {
    clear(getPixels());
    generatePixels(squareRoot);
    createGrid(sketchArea, squareRoot);
    draw(getPixels());
});

slider.addEventListener('change', () => {
    squareRoot = slider.value;
    clear(getPixels());
    generatePixels(squareRoot);
    createGrid(sketchArea, squareRoot);
    draw(getPixels());
});

colorSelector.addEventListener('change', () => {
    penColor = colorSelector.value;
    createGrid(sketchArea, squareRoot);
});

function generatePixels(squareRoot) {
    for (let i = 0; i < squareRoot ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('element');
        sketchArea.appendChild(pixel);
    }
}

function createGrid(sketchArea, squareRoot) {
    sketchArea.setAttribute('style', `display: grid; grid-template-columns: repeat(${squareRoot}, 1fr)`);
}

function getPixels() {
    let pixels = document.querySelectorAll('.element');
    return pixels;
}

function draw(pixels) {
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.setAttribute('style', `background-color: ${penColor}`);
        });
    });
}

function clear(pixels) {
    pixels.forEach(element => element.remove());
}





