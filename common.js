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

function highlightNumbers(selectedNumber) {
    const gridCells = grid.querySelectorAll("div");
    let count = 0;

    for (var i = 0; i < gridCells.length; i++) {
        var cell = gridCells[i];
        var cellNumber = parseInt(cell.textContent, 10);

        if (cellNumber === selectedNumber) {
            cell.style.backgroundColor = "orange";
            count++;
        } else {
            cell.style.backgroundColor = "gainsboro";
        }
    }

    return count;
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