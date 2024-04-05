const debugMode = true;
const container = document.querySelector("#container");
let rows = 16;
let columns = 16;

function init () {
    for (let i = 0; i < rows; i++) {
        // creates one new row
        const row = document.createElement("div");
        row.classList.add("row");
    
        if (debugMode) console.log("Created new row");
    
        for (let j = 0; j < columns; j++) {
            // creates a square and puts it inside row
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square)
    
            if (debugMode) console.log("Created new square");
        }
    }
    if (debugMode) console.log("Finished creating canvas");
}

init();