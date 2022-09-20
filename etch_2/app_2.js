//define variables
const grid = document.getElementById("grid")
const reset = document.querySelector(".reset")
let mouseDown = false


//get height and width of grid
function getHeight(h) {
    return 500/h
}

function highlight(e) {
    e.target.classList.add("highlighted")
}

//create a square grid of user specified width
    //generate all boxes 
    function createGrid(h) {
        for (let r = 0;r<h;r++){
            let row = document.createElement("div")
            for (let c = 0;c<h;c++){
                let cell = document.createElement("div")
                cell.className = "square"
                row.appendChild(cell)
                //set height to appropriate fraction of grid space
                cell.style.height = `${getHeight(h)-2}px`;
                //set width to appropriate fraction of grid space
                cell.style.width = `${getHeight(h)-2}px`;
            }
            grid.appendChild(row)
        }
        
        //when a square is hovered over, make it change color
        squares = document.querySelectorAll(".square")
        squares.forEach(square => square.addEventListener('mouseover', highlight))
        
        //make a reset button that clears the grid
        reset.addEventListener('click',function() {
            squares.forEach(square => square.classList.remove("highlighted"));
        })
    }

createGrid(16)









//make a slider to change resolution of grid, set its default at 16x16