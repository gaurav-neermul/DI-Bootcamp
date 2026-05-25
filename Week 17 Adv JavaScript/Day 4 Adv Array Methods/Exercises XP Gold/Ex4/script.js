// Exercise 4 : Nested arrays
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray = array.flat(2);
console.log(newArray);

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"]
];
const newGreeting = greeting.map(words => {
    return words.join(" ");
});

console.log(newGreeting);

const sentence = greeting
    .map(words => words.join(" "))
    .join(" ");

console.log(sentence);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const result = trapped.flat(Infinity);

console.log(result);