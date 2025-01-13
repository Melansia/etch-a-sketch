const container = document.querySelector(".board-container");
const resetButton = document.querySelector(".reset")
const resizeButton = document.querySelector(".resize")
const boardInfo = document.querySelector(".info")
let isMouseDown = false
let boardSize = 16;

function drawBoard(bSize) {

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const size = Math.floor(container.offsetWidth / bSize);

    for (let i = 0; i < bSize * bSize; i++) {
        const square = document.createElement("div");
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.border = "0.1px solid lightgrey";
        square.style.boxSizing = "border-box";
        square.style.flexGrow = "1"
        square.style.flexShrink = "0";
        square.style.backgroundColor = "white";
        square.classList.add("square")
        container.appendChild(square);
    }

    boardInfo.textContent = `${bSize} x ${bSize}`
}

drawBoard(boardSize)

resetButton.addEventListener("click", () => {
    drawBoard(boardSize)
})


// TODO: implement a better error handling
resizeButton.addEventListener("click", () => {
    const newSize = parseInt(prompt("Enter the size of the new grid."));
    boardSize = newSize
    drawBoard(newSize)
})

container.addEventListener("mousedown", (event) => {
    isMouseDown = true;
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "orange";
    }
});

container.addEventListener("mousemove", (event) => {
    if (isMouseDown && event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "orange";
    }
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});