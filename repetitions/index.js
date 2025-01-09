let numberCount = {};  
let allNumbers = new Set();

function displayMostRepeatedNumber() {
    let maxCount = 0;
    let mostRepeated = [];

    for (let num in numberCount) {
        if (numberCount[num] > maxCount) {
            maxCount = numberCount[num];
        }
    }

    for (let num in numberCount) {
        if (numberCount[num] === maxCount) {
            mostRepeated.push(num);
        }
    }

    document.getElementById("mostRepeatedNumber").textContent = mostRepeated.join(", ") + ` (Repeated ${maxCount} times)`;

    highlightMostRepeatedNumbers(mostRepeated);
}

function highlightMostRepeatedNumbers(mostRepeated) {
    const allDivs = document.querySelectorAll("#gridtable div");

    for (let i = 0; i < allDivs.length; i++) {
        const div = allDivs[i];
        const value = div.textContent.trim();
        if (mostRepeated.includes(value)) {
            div.classList.add("marked"); 
        } else {
            div.classList.remove("marked"); 
        }
    }
}

function displayNotInPlaceNumbers() {
    let missingNumbers = [];

    for (let i = 1; i <= 99; i++) {
        if (!allNumbers.has(i)) {
            missingNumbers.push(i);
        }
    }

    document.getElementById("notInPlaceNumber").textContent = missingNumbers.join(", ");
}

function handleGridCreation(numberOfBoxes) {
    numberCount = {}; 
    allNumbers = new Set();

    createGrid(numberOfBoxes);

    const allDivs = document.querySelectorAll("#gridtable div");

    if (allDivs.length === 0) {
        alert("No numbers found in the grid.");
        return;
    }

    for (let i = 0; i < allDivs.length; i++) {
        const div = allDivs[i];
        const value = parseInt(div.textContent, 10);

        numberCount[value] = (numberCount[value] || 0) + 1;
        allNumbers.add(value);
    }

    displayMostRepeatedNumber();
    displayNotInPlaceNumbers();
}

submit.addEventListener("click", function () {
    const input = document.getElementById("gridAmountInputField");
    const numberOfBoxes = parseInt(input.value, 10);

    if (isNaN(numberOfBoxes) || numberOfBoxes <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    handleGridCreation(numberOfBoxes); 
});