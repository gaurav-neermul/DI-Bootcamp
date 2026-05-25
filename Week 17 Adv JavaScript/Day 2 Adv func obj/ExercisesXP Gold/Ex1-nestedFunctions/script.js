// // Exercise 1 : Nested functions
// // Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// // Change the code below to nested arrow functions.
// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4)
//  flat(4)

//  return result;
// }

// landscape() 
// output= ____/''''\\____

let landscape = () => {

    let result = "";

    let flat = (x) => {
        for(let count = 0; count < x; count++) {
            result += "_";
        }
    };

    let mountain = (x) => {
        result += "/";

        for(let counter = 0; counter < x; counter++) {
            result += "'";
        }

        result += "\\";
    };

    flat(4);
    mountain(4);
    flat(4);

    return result;
};

console.log(landscape());