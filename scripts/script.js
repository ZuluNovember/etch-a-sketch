let gridDiv = document.createElement('div');
let gridSize = 16;

initializeGrid();

document.querySelector('#number-input').addEventListener('input', setSliderValue);
document.querySelector('.slider').addEventListener('input', setValue);
document.querySelector('#game-button').addEventListener('click', initializeGrid);



function colorSetter(e) {
    let target = document.getElementById(`${e.target.id}`);
    target.style.backgroundColor = `black`;
}

function initializeGrid() {
    let container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < gridSize ** 2; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'sketch-grid';
        newDiv.id = `grid${i}`;
        newDiv.style = `width:calc(${100 / gridSize}%); height:calc(${100 / gridSize}%)`
        container.append(newDiv)
    }

    document.querySelectorAll('.sketch-grid').forEach(x => x.addEventListener('mouseover', colorSetter))
}


function setSliderValue(e) {
    if (e.target.value <= 100 && e.target.value >= 16) {
        document.querySelector('.slider').value = e.target.value;
        gridSize = e.target.value;
    }
}


function setValue(e) {
    gridSize = e.target.value;
    document.querySelector('#number-input').value = gridSize;

}