const createGridBtn = document.querySelector(".createGridBtn");
const resetGridBtn = document.querySelector(".resetGridBtn");
const grid = document.querySelector(".grid");

function addBox(append) {
    const box = document.createElement("div");
    box.className = "box";
    append.appendChild(box);
}

createGridBtn.addEventListener("click", (e) => {
    addBox(grid);
});
