//create random hsl color to determine appropriate grid setup without borders present
// const getRandomNumber = (maxNum) => {
//     return Math.floor(Math.random() * maxNum);
//   };

// const getRandomColor = () => {
//     const h = getRandomNumber(360);
//     const s = getRandomNumber(100);
//     const l = getRandomNumber(100);
   
//     return `hsl(${h}deg, ${s}%, ${l}%)`;
//   };



function createGrid(h,w) {
    let grid = document.querySelector("#grid")
    //combine rows together
    for(let i=0;i<h;i++){
        //create individual row
        let row = document.createElement("div")
        for(let r=0;r<w;r++){
            let cell = document.createElement("div")
            cell.textContent = `${i+1}.${r+1}`;
            cell.className = "gridsquare"
            row.appendChild(cell)
        }
        grid.appendChild(row)
    }
}

createGrid(16,16)


const squares = document.querySelectorAll(".gridsquare")

console.log(squares)