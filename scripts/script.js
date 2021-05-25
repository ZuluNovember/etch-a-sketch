let gridDiv = document.createElement('div');
let gridSize = 16;

document.querySelector('.slider').addEventListener('input', setValue);

function setValue(e) {
    gridSize = e.target.value;
    document.querySelector('#number-input').value = gridSize;
}