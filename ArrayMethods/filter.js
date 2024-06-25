//The filter() method returns a new array with all elements that pass the test defined by the given function.

const arr = [2, 4, 6, 7, 8, 10, 11, 13, 14];

const filteredArray = arr.filter((v) => v % 2 === 0);

console.log(filteredArray);
// This only returns the values which returns true from inside the call back function

const oddArray = arr.filter((v) => v % 2 !== 0);
console.log(oddArray);
