let markedSum = 0;

function calculateTotalSum() {
    const allDivs = document.querySelectorAll("#gridtable div");
    let totalSum = 0;

    console.log("Calculating total sum for grid divs:", allDivs);

    for (let div of allDivs) {
        const value = parseInt(div.textContent, 10);
        if (!isNaN(value)) {
            totalSum += value;
        }
    }

    document.getElementById("sumAll").textContent = totalSum;
    markedSum = 0;
    document.getElementById("sumMarked").textContent = markedSum;
}

function markNumber(event) {
    const div = event.target;
    console.log("Clicked div:", div);

    if (!div.classList.contains("marked")) {
        div.classList.add("marked");
        markedSum += parseInt(div.textContent, 10)
    } else {
        div.classList.remove("marked");
        markedSum -= parseInt(div.textContent, 10);
    }

    console.log("Marked sum:", markedSum);
    document.getElementById("sumMarked").textContent = markedSum;
}

reset.addEventListener("click", function () {
    const allDivs = document.querySelectorAll("#gridtable div");

    for (let div of allDivs) {
        div.classList.remove("marked");
    }

    markedSum = "-";
    document.getElementById("sumMarked").textContent = markedSum;
});


grid.addEventListener("click", function (event) {
    const div = event.target;
    // Ensure the clicked element is a grid cell and not the grid container
    if (div.tagName === "DIV" && div.id !== "gridtable") {
        markNumber(event);
    }
});


submit.addEventListener("click", function () {
    const input = document.getElementById("gridAmountInputField");
    const numberOfBoxes = parseInt(input.value, 10);

    console.log("Submit clicked. Number of boxes:", numberOfBoxes);

    if (!isNaN(numberOfBoxes) && numberOfBoxes > 0) {
        createGrid(numberOfBoxes); // Use `createGrid` from common.js
        calculateTotalSum(); // Recalculate total sum of the grid
    } else {
        alert("Please enter a valid positive number.");
    }
});