const createGridBtn = document.querySelector(".createGridBtn");
const resetGridBtn = document.querySelector(".resetGridBtn");
const grid = document.querySelector(".grid");

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

createGridBtn.addEventListener("click", (e) => {
    addRow(grid, 10);
});
