const body = document.querySelector("body");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const grid = document.getElementById("gridtable");

function createGrid(numberOfBoxes) {
    grid.innerHTML = "";
    for (let i = 0; i < numberOfBoxes; i++) {
        const div = document.createElement("div");
        div.textContent = Math.floor(Math.random() * 99) + 1;
        grid.appendChild(div);
    }
}

submit.addEventListener("click", function () {
    var input = document.getElementById("gridAmountInputField");
    var numberOfBoxes = parseInt(input.value, 10);

    if (!isNaN(numberOfBoxes) && numberOfBoxes > 0) {
        createGrid(numberOfBoxes);
    } else {
        alert("Please enter a valid positive number.");
    }
});