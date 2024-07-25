const createGridBtn = document.querySelector(".createGridBtn");
const resetGridBtn = document.querySelector(".resetGridBtn");
const grid = document.querySelector(".grid");
const gridReset = grid;

function addBox(append) {
    const box = document.createElement("div");
    box.className = "box";
    append.appendChild(box);
}

function addRow(append, boxAmt) {
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 0; i < boxAmt; i++) {
        addBox(row);
    }
    append.appendChild(row);
}

function createGrid(width, height) {
    for (let i = 0; i < height; i++) {
        addRow(grid, width);
    }
}

function resetGrid(resetter) {
    while (resetter.firstChild) {
        resetter.removeChild(resetter.lastChild);
    }
}

createGridBtn.addEventListener("click", (e) => {
    resetGrid(grid);
    const width = prompt("Width?");
    const height = prompt("Height?");
    createGrid(width, height);
});

resetGridBtn.addEventListener("click", (e) => {
    resetGrid(grid);
});
