let palette = document.getElementById("palette");
let grid = document.getElementById("grid")
let clearBtn = document.getElementById("clear");
let currentColor = "black";
let isDrawing = false

let colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "brown",
    "gray"
];
//color palette
for (let i = 0; i < colors.length; i++) {
    let colorBox = document.createElement("div")
    colorBox.classList.add("color")
    colorBox.style.backgroundColor = colors[i]

    palette.appendChild(colorBox)

    colorBox.addEventListener("click", function() {
        currentColor = colors[i]
    })
}


 //drawing grid
 for (let i = 0; i < 400; i++ ) { //20x20 grid = 400sq
     let square = document.createElement("div")
     square.classList.add("square")
    grid.appendChild(square)

     square.addEventListener("mousedown", function() {
         isDrawing = true
         square.style.backgroundColor = currentColor
    })

     square.addEventListener("mouseover", function(){
        if (isDrawing === true) {
            square.backgroundColor = currentColor
       }
    })
}


document.addEventListener("mouseup", function(){
    isDrawing = false
}) 
clearBtn.addEventListener("click", function () {

    // Select all squares
    let squares = document.querySelectorAll(".square");

    // Loop through squares
    for (let i = 0; i < squares.length; i++) {

        // Reset color
        squares[i].style.backgroundColor = "white";

    }

});