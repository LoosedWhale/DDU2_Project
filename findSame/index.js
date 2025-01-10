const resetButton = document.getElementById("reset");
const instructionDisplay = document.getElementById("instructionAndDisplay");

let numberCount = {}; 

function handleGridClick(event) {
    const clickedDiv = event.target;

    if (clickedDiv && clickedDiv.tagName === "DIV" && clickedDiv.id !== "gridtable") {
        const number = parseInt(clickedDiv.textContent, 10);

        const allDivs = document.querySelectorAll("#gridtable div");
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove("marked");
        }

        if (!isNaN(number)) {
            let count = 0;

            for (let i = 0; i < allDivs.length; i++) {
                if (parseInt(allDivs[i].textContent, 10) === number) {
                    allDivs[i].classList.add("marked");
                    count++;
                }
            }

            instructionDisplay.textContent = `${count} copies of the number ${number}`;
        }
    }
}

function resetGrid() {
    const allDivs = document.querySelectorAll("#gridtable div");
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.remove("marked");
    }
    instructionDisplay.textContent = "Click on a number to find copies";
}

gridtable.addEventListener("click", handleGridClick);
resetButton.addEventListener("click", resetGrid);