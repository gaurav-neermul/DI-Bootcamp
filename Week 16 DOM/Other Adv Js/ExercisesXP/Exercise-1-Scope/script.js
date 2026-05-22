// #1
function funcOne() {
    let a = 5;

    if(a > 1) {
        a = 3;
    }

    // Prediction:
    // a becomes 3 because the if block modifies the same variable
    alert(`inside the funcOne function ${a}`);
}

// #1.1
funcOne(); 
// Output:
// inside the funcOne function 3

// #1.2
// If let is replaced with const:
// ERROR -> Assignment to constant variable
// because const variables cannot be reassigned



//#2
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    // Prediction:
    // First call -> 0
    // After funcTwo() -> 5
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // 0
funcTwo();
funcThree(); // 5

// #2.2
// If let is replaced with const:
// funcTwo() will cause ERROR
// because const variables cannot be reassigned



//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    // Prediction:
    // "hello"
    // because a becomes a global variable attached to window
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour();
funcFive();



//#4
let a = 1;

function funcSix() {
    let a = "test";

    // Prediction:
    // "test"
    // local variable shadows global variable
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix();

// #4.2
// If let is replaced with const:
// same result
// because the variable is never reassigned



//#5
let a = 2;

if (true) {
    let a = 5;

    // local block scope
    alert(`in the if block ${a}`);
}

// global scope
alert(`outside of the if block ${a}`);

// #5.1
// Outputs:
// in the if block 5
// outside of the if block 2

// #5.2
// If let is replaced with const:
// same result
// because neither variable is reassigned