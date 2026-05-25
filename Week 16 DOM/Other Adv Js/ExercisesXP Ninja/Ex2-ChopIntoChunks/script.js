// Exercise 2 : Chop into chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
// Example:

// console.log(string_chop('developers',2)); 
// ["de", "ve", "lo", "pe", "rs"] 

function string_chop(str, size) {

    let result = [];

    for(let i = 0; i < str.length; i += size) {

        result.push(str.substr(i, size));

    }

    return result;
}

console.log(string_chop('developers', 2));