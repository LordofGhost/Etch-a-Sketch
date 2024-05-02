const debugMode = true;
const container = document.getElementById('container');
const size = document.getElementById('size');
const submitSize = document.getElementById('submitSize');
const randomColor = document.getElementById('random');
const colorSelectors = document.querySelectorAll('.color')
let color = 'black';

submitSize.addEventListener('click', () => {
    let rows = size.value;
    let columns = size.value;
    if (rows > 0 && rows <= 100 && columns > 0 && columns <= 100) init(rows, columns); else if (debugMode) console.error("Max size 100");
});

colorSelectors.forEach(colorSelector => {
    colorSelector.addEventListener('click', () => {
        if (colorSelector.textContent == 'random') { 
            color = 'random'
        } else {
            color = colorSelector.style.backgroundColor;
        }
    }); 
});

function init (rows, columns) {  // creates the canvas
    while (container.lastElementChild) { // delets all old Elements
        container.removeChild(container.lastElementChild);
    }
    for (let i = 0; i < rows; i++) {
        // creates one new row
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    
        if (debugMode) console.log("Created new row");
    
        for (let j = 0; j < columns; j++) {
            // creates a square and puts it inside row
            const square = document.createElement("div");
            square.style.backgroundColor = 'white';
            square.classList.add("square");
            square.addEventListener('click', () => {
                if (color == 'random') {
                    // creating a new color for each element
                    square.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                } else {
                    square.style.backgroundColor = color;
                }
            });
            row.appendChild(square)
    
            if (debugMode) console.log("Created new square");
        }
    }
    if (debugMode) console.log("Finished creating canvas");
}

init(16, 16);