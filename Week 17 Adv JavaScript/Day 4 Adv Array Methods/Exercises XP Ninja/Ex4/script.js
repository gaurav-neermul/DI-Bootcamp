// Exercise 4 : Array to Object
// Instructions
// Using this array const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };
// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
const count = {};

for (let i = 0; i < letters.length; i++) {

    const letter = letters[i];

    if (count[letter]) {
        count[letter]++;
    } else {
        count[letter] = 1;
    }
}

console.log(count);

const result = letters.reduce((obj, letter) => {

    if (obj[letter]) {
        obj[letter]++;
    } else {
        obj[letter] = 1;
    }

    return obj;

}, {});

console.log(result);