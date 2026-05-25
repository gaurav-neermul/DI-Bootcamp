// Exercise 2: Analyzing the reduce method :)
// Instructions
// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2], //acc
);
//[1, 2, 0, 1, 2, 3]