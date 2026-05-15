function myMove() {
    let box = document.getElementById("animate");
    let position = 0
    let interval = setInterval(frame, 1) //setInterval(function, time in ms)
//setinterval is save in a var so as to stop it later... if not saved, animation can't be stopped 
    function frame() {
        if (position === 350) { // 350 is in the end of the container: end  position = width container - width animate
            clearInterval(interval)
        } else {
            position++; //adds one pixel each interval
            box.style.left = position + "px"
        }
    }
}