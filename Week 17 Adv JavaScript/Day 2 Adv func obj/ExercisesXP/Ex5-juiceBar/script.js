// function makeJuice(size) {

//     function addIngredients(ing1, ing2, ing3) {

//         document.getElementById("juice").innerHTML =
//         `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
//     }

//     addIngredients("apple", "banana", "mango");
// }

// makeJuice("large");

function makeJuice(size) {

    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {

        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {

        document.getElementById("juice").innerHTML =
        `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    }

    addIngredients("apple", "banana", "mango");

    addIngredients("orange", "kiwi", "pineapple");

    displayJuice();
}

makeJuice("medium");