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

    const size = Math.floor((container.clientWidth) / bSize);

    for(let i = 1; i <= bSize; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.style.backgroundColor = "white";
      row.style.flexGrow = "1"
      row.style.flexShrink = "0";
      row.style.flexBasis = `${size}px`
      row.style.margin = "0"
      row.style.padding = "0"
      row.style.width = `${container.clientWidth}`
      row.style.flexWrap = "nowrap"
      row.style.display = "flex"
      for (let j = 1; j <= bSize; j++) {
        const square = document.createElement("div");
        square.style.margin = "0"
        square.style.padding = "0"
        square.style.flexBasis = `${size}px`
        square.style.border = "0.1px solid lightgrey";
        square.style.boxSizing = "border-box";
        square.style.flexGrow = "1"
        square.style.flexShrink = "0";
        square.style.flexWrap = "wrap"
        square.style.backgroundColor = "white";
        square.classList.add("square")
        row.appendChild(square);
      }
      container.appendChild(row);
    }

    boardInfo.textContent = `${bSize} x ${bSize}`
}

drawBoard(boardSize)

resetButton.addEventListener("click", () => {
    drawBoard(boardSize)
})


resizeButton.addEventListener("click", () => {
    let newSize = boardSize
    while(true) {
       newSize =  parseInt(prompt("Enter the size of the new grid. Must be an integer not bigger than 100 and not less than 0."));
       if(typeof(newSize) == "number" && newSize > 0 && newSize <= 100) {
            break 
        }
    }
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