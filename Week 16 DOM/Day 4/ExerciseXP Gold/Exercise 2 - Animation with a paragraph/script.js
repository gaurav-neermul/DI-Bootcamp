let paragraph = document.getElementById("paragraph")
let isDragging = false

paragraph.addEventListener("mousedown", function(){
    isDragging = true;
})

document.addEventListener("mouseup", function(){
    isDragging = false
})

document.addEventListener("mousemove",function(event){
    if (isDragging === true) {
        paragraph.style.left = event.clientX + "px"
        paragraph.style.top = event.clientY + "px"
        paragraph.style.fontSize = event.clientX / 10 + "px"
    }
})