// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// output: 13 > y= 10 + y > att becomes 10 + 3