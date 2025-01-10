const fillCleared = document.getElementById("fillCleared");
let markedDivs = new Set(); 


function handleGridHover(event) {
    const hoveredDiv = event.target;
    if (hoveredDiv && hoveredDiv.tagName === "DIV" && hoveredDiv.id !== "gridtable") {
        hoveredDiv.style.backgroundColor = "orange";
    }
}

function handleGridLeave(event) {
    const hoveredDiv = event.target;
    if (hoveredDiv && hoveredDiv.tagName === "DIV" && hoveredDiv.id !== "gridtable") {
        if (!hoveredDiv.classList.contains("marked")) {
            hoveredDiv.style.backgroundColor = "";
        }
    }
}


function handleGridClick(event) {
    const clickedDiv = event.target;

    if (clickedDiv && clickedDiv.tagName === "DIV" && clickedDiv.id !== "gridtable") {
        if (!clickedDiv.classList.contains("marked")) {
            clickedDiv.classList.add("marked");
            clickedDiv.textContent = "";
            markedDivs.add(clickedDiv);
        } else {
            const randomNumber = Math.floor(Math.random() * 99) + 1;
            clickedDiv.textContent = randomNumber; 
            clickedDiv.classList.remove("marked"); 
            clickedDiv.style.backgroundColor = "";
            markedDivs.delete(clickedDiv);
        }
    }
}

function refillMarkedDivs() {
    for (let div of markedDivs) {
        const randomNumber = Math.floor(Math.random() * 99) + 1;
        div.textContent = randomNumber;
        div.classList.remove("marked");
        div.style.backgroundColor = ""; 
    }
    markedDivs.clear(); 
}

grid.addEventListener("mouseover", handleGridHover);
grid.addEventListener("mouseout", handleGridLeave); 
grid.addEventListener("click", handleGridClick); 
fillCleared.addEventListener("click", refillMarkedDivs); 