//Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.
let button = document.getElementById("removeBtn")

button.addEventListener("click", removeBtn)


function removeBtn() {
    let colorSelection = document.getElementById("colorSelect")

    colorSelection.remove(colorSelection.selectedIndex)

}