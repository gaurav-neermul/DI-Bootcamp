// Exercise 1 : Menu
// Instructions
// Using the array below:

// const menu = [
//   {
//     type : "starter",
//     name : "Houmous with Pita"
//   },
//   {
//     type : "starter",
//     name : "Vegetable Soup with Houmous peas"
//   },
//   {
//     type : "dessert",
//     name : "Chocolate Cake"
//   }
// ]
// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
// Using an array method, check if all the elements in the array are starters.
// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
// Using this array :

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

//atleast one dessert
let oneDessert = menu.some(item => item.type === "dessert")
console.log(oneDessert ? "Dessert exists" : "No Dessert")

let starters = menu.every(item => item.type === "starter")
console.log(starters)

let mainCourse = menu.some(item => item.type === "main course")
if (!mainCourse) {
    menu.push({
        type: "main course",
        name: "Grilled Chicken"
    })
}

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.forEach(item => {
    item.vegetarian = vegetarian.some(food => 
        item.name.toLowerCase().includes(food)
    )
});

console.log(menu)