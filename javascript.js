const container = document.querySelector(".board-container");
const boardSize = 16;
const size = Math.floor(container.offsetWidth / boardSize);



function drawBoard(size) {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement("div");
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.border = "0.1px solid lightgray";
        square.style.boxSizing = "border-box";
        square.style.flexGrow = "1"
        square.style.flexShrink = "0";
        container.appendChild(square);
    }
}

drawBoard(size)

