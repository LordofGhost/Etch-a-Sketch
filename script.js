const container = document.getElementById('container');
const size = document.getElementById('size');
const submitSize = document.getElementById('submitSize');
const colorSelectors = document.querySelectorAll('.color')
let color = 'black';
let isMouseDown = false;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

submitSize.addEventListener('click', () => {
    let rows = size.value;
    let columns = size.value;
    // checks if it si valid input 
    if (rows > 0 && rows <= 100 && columns > 0 && columns <= 100) init(rows, columns); else alert("Max 100");
});

colorSelectors.forEach(colorSelector => {
    colorSelector.addEventListener('click', () => {
        color = colorSelector.style.backgroundColor;
    }); 
});

function changeColor (e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = color;
}

function init (rows, columns) {  // creates the canvas
    while (container.lastElementChild) { // delets all old Elements
        container.removeChild(container.lastElementChild);
    }
    for (let i = 0; i < rows; i++) {
        // creates one new row
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        for (let j = 0; j < columns; j++) {
            // creates a square and puts it inside row
            const square = document.createElement("div");
            square.style.backgroundColor = 'white';
            square.classList.add("square");

            square.addEventListener('mouseover', changeColor);
            square.addEventListener('mousedown', changeColor);
            row.appendChild(square)
        }
    }
}

init(16, 16);