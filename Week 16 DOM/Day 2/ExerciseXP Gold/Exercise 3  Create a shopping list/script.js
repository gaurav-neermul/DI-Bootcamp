// In your js file:
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];
let root = document.getElementById("root");


// form:
let form = document.createElement("form")
//creating input
let input = document.createElement("input")
input.type = "text"
input.placeholder = "Enter item"

let addBtn = document.createElement("button");
addBtn.textContent = "Add Item"

form.addEventListener("submit", addItem)

// Add elements to form
form.appendChild(input);
form.appendChild(addBtn);

// Add form to page
root.appendChild(form);

let ul = document.createElement("ul")
root.appendChild(ul)

//clear btn
let clearBtn = document.createElement("button")
clearBtn.textContent = "Clear All"

clearBtn.addEventListener("click", clearAll)
root.appendChild(clearBtn)


//functions: addItem, clearAll

//addItem
function addItem(event) {
    event.preventDefault()

    let item = input.value
    if (item.trim() === "") {
        return
    }

    shoppingList.push(item); //add to array

    let li = document.createElement("li")
    li.textContent = item

    ul.appendChild(li)
    input.value = "" //clear  input field

}

function clearAll() {
    shoppingList = []
    ul.innerHTML = ""
}