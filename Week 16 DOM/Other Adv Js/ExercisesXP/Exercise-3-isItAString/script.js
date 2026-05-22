// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


//the normal way:
// const isString = function(value) {
//     return typeof value === "string";
// }


let isString = value => typeof value === "string"
console.log(isString('Hello'))
console.log(isString([1,2,3,4,9,0]))