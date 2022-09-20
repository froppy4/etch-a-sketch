//define variables
let grid = document.getElementById("grid")
let gridsquares = document.querySelectorAll(".gridsquare")
let resetButton = document.querySelector(".reset")
let setGrid = ""
let squares = ""

//highlight box being hovered over
function highlight(e) {
    if (e.target.nodeName == "BUTTON") return
    e.target.classList.add("highlighted")
}

//a
function setGridColumns(n) {
    let columnText = "auto"
    for(let a=1; a<n;a++){
        columnText += " auto"
    }
    return columnText
}

function createGrid(h,w) {
    //combine rows together
    for(let i=0;i<h;i++){
        //create individual row
        let row = document.createElement("div")
        for(let r=0;r<w;r++){
            let cell = document.createElement("div")
            cell.className = "gridsquare"
            row.appendChild(cell)
        }
        grid.appendChild(row)
       
    }
    console.log(grid.style.backgroundColor)
    grid.style.backgroundColor = "0xFF0000"

    //check for mouse hovering over any square
    squares = document.querySelectorAll(".gridsquare")
    const styles = getComputedStyle(squares)
    //squares.style.height =(500/h)
    squares.forEach(square => square.addEventListener('mouseover',highlight));


}

function getGridSize() {
    let height = parseInt(prompt("How many boxes high is your grid? (1-100)"));
        if (height == "NaN" || height < 1 || height > 100) {
            height = parseInt(prompt("Please provide a valid height input. (1-100)"))
        }

    return height
}

function deleteGrid(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
}


//check for mouse leaving square
// squares.forEach(square => square.addEventListener('mouseout',unhighlight));
createGrid(30,30)

resetButton.addEventListener('click', function(e) {
    console.log("reset")
    squares.forEach(square => square.classList.remove('highlighted'))
})


// setGrid.addEventListener('click', function() {
//     console.log("new grid")
//     deleteGrid()
//     console.log(gridsquares)
//     h = getGridSize()
//     createGrid(h,h)
// })



//set appropriate number of columns
//ask for a valid input until 1-100 input
//set each box to appropriate size
//remove previous grid
//slider for sizing