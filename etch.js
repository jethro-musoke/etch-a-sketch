let header = document.querySelector('#header');
let container = document.querySelector('#container');
let footer = document.querySelector('#footer');
let ticker = document.createElement('div');
ticker.setAttribute('id', 'ticker');

let resetBtn = document.querySelector('#reset');
let eraseBtn = document.querySelector('#erase');
let drawBtn = document.querySelector('#draw');

let gridItems = container.getElementsByClassName('grid-item');

let slider = document.querySelector('#myRange');
let output = document.querySelector('#selectedRange');
output.innerHTML = slider.value;
//console.log(slider);

let rows = slider.value;
let cols = slider.value;
makeRows(rows, cols);

//console.log(`Row: ${rows}, Col: ${cols}`);
myRange.addEventListener('change', function() {
    //console.log(`Now setting slider value`);
    output.innerText = slider.value;
    rows = slider.value;
    cols = slider.value;
    makeRows(rows, cols);
});

function makeRows(rows, cols) {
    container.innerHTML = '';
    container.style.setProperty('--gid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    //console.log(`Row: ${rows}, Col: ${cols}`);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.setAttribute('id', 'div' + i);
        //cell.innerText = (i + 1);
        //cell.addEventListener('mouseover', function(e) {
        cell.addEventListener('click', function(e) {
            changeColor('div' + i);
        });
        container.appendChild(cell).className = 'grid-item';
    }
}

function changeColor(id) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    //console.log(`rgb(${x}, ${y}, ${z}, 0.3)`);
    document.querySelector(`#${id}`).style.backgroundColor = `rgb(${x}, ${y}, ${z}, 1)`;
}

draw.addEventListener('click', function(e) {
    let items = Array.from(gridItems);
    items.forEach(cell => {
        cell.addEventListener('click', function() {
            changeColor(this.id);
        });
    });
});

reset.addEventListener('click', function(e) {
    let items = Array.from(gridItems);
    items.forEach(cell => {
        document.querySelector(`#${cell.id}`).style.backgroundColor = ``;
    });
});

erase.addEventListener('click', function() {
    let items = Array.from(gridItems);
    items.forEach(cell => {
        cell.addEventListener('click', function() {
            document.querySelector(`#${this.id}`).style.backgroundColor = ``;
        });
    });
});