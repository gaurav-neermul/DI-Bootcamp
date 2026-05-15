let box = document.getElementById("box");
let isDragging = false
box.addEventListener("mousedown", function() { //mousedown = mouse button is pressed down
    isDragging = true
})

document.addEventListener("mouseup", function(){
    isDragging = false
})

document.addEventListener("mousemove", function(event){
    if (isDragging === true) {
        box.style.left = event.clientX + "px"
        box.style.top = event.clientY + "px"
    }
})
