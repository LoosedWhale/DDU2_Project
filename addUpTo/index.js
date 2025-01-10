const numberAddUpTo = document.getElementById("numAddUp")
const addingUpButton = document.getElementById("addUpBtn")


function addUp(){
    const allDivs = document.querySelectorAll("#gridtable div")
    let result = parseInt(numberAddUpTo.value)
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].classList.remove("marked");
    }


    for (let i = 0; i < allDivs.length; i++) {
        let firstNumber = parseInt(allDivs[i].textContent)
        for (let j = i + 1; j < allDivs.length; j++) {
            const secondNumber = parseInt(allDivs[j].textContent)
            if (firstNumber + secondNumber == result) {
                allDivs[i].classList.add("marked")
                allDivs[j].classList.add("marked")
                return
            }
        }
    }
}

addingUpButton.addEventListener("click", addUp)