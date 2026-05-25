// Exercise 1 : Dog age to Human years
// Instructions
// Using the following data

// const data = [
//   {
//     name: 'Butters',
//     age: 3,
//     type: 'dog'
//   },
//    {
//     name: 'Cuty',
//     age: 5,
//     type: 'rabbit'
//   },
//   {
//     name: 'Lizzy',
//     age: 6,
//     type: 'dog'
//   },
//   {
//     name: 'Red',
//     age: 1,
//     type: 'cat'
//   },
//   {
//     name: 'Joey',
//     age: 3,
//     type: 'dog'
//   },
//   {
//     name: 'Rex',
//     age: 10,
//     type: 'dog'
//   },
// ];
// Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years
// Using the reduce() method, find the sum of the dogs’ ages in human years.
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let sum = 0;

for (let i = 0; i < data.length; i++) {

    if (data[i].type === "dog") {
        sum += data[i].age * 7;
    }
}

console.log(sum);

const totalDogHumanYears = data.reduce((sum, animal) => {

    if (animal.type === "dog") {
        return sum + animal.age * 7;
    }

    return sum;

}, 0);

console.log(totalDogHumanYears);