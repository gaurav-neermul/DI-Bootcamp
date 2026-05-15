let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i <alphabet.length; i++) {
    let box = document.createElement("div");
    box.classList.add("letter");
    box.textContent = alphabet[i]
    box.style.left = (i * 60) + "px" 
    //width + spacing = 60px
    box.style.top = "50px"

    document.body.appendChild(box)

    let isDragging = false
    box.addEventListener("mousedown", function() {
        isDragging = true
    })

    document.addEventListener("mouseup", function(){
        isDragging = false
    })

    document.addEventListener("mousemove", function(event) {
        if (isDragging === true) {
            box.style.left = event.clientX +"px"
            box.style.top = event.clientY +"px"
        }
    })
}