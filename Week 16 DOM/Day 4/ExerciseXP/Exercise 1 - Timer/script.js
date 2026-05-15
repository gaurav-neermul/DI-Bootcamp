

// setTimeout(function () {
//     alert("Hello World")
// },2000)

// setTimeout(function () {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = "Hello World";
//     container.appendChild(paragraph)
// },2000)

let container = document.getElementById("container");
let clearBtn = document.getElementById("clear");

let interval = setInterval(function() {

    let paragraph = document.createElement("p");

    paragraph.textContent = "Hello World";

    container.appendChild(paragraph);

    if (container.children.length === 5) {

        clearInterval(interval);

    }

}, 2000);

clearBtn.addEventListener("click", function() {

    clearInterval(interval);

});