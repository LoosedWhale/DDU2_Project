// DOM Elements
const showNumber = document.getElementById("showNumber");
const showRemovedNumber = document.getElementById("showRemovedNumber");
const newRandomNumberButton = document.getElementById("newRandomNumberButton");
const removeButton = document.getElementById("removeButton");
let selectedNumber = null;

function newRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 99) + 1;
    showNumber.textContent = randomNumber;
    selectedNumber = randomNumber;

    highlightNumbers(selectedNumber);

    showRemovedNumber.textContent = "-";
}

function removeNumber() {
    if (selectedNumber === null) {
        showRemovedNumber.textContent = "No number selected.";
        return;
    }

    var count = highlightNumbers(selectedNumber); 
    if (count === 0) {
        showRemovedNumber.textContent = "Nothing to remove.";
        return;
    }

    var allDivs = document.querySelectorAll("#gridtable div");
    for (var i = 0; i < allDivs.length; i++) {
        var div = allDivs[i];
        if (parseInt(div.textContent, 10) === selectedNumber) {
            div.textContent = "X";
            div.classList.add("removed");
        }
    }

    showRemovedNumber.textContent = `${selectedNumber} removed ${count} times.`;
}

// Event Listeners
removeButton.addEventListener("click", function () {
    removeNumber();
});

newRandomNumberButton.addEventListener("click", function () {
    newRandomNumber();
});