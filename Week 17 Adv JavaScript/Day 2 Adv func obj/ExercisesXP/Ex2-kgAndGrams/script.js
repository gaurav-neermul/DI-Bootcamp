// 🌟 Exercise 2 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kgToGrams(weight) {
    return weight * 1000 
}
console.log(kgToGrams(4))

const kgToGramsExp = function(weight) {
    return weight * 1000;
};

console.log(kgToGramsExp(5));


const kgToGramsArrow = weight => weight * 1000;

console.log(kgToGramsArrow(3));