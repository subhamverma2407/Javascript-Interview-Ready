// at() returns a string at given index,
// if index is out of bounds, returns undefined
// it works with negative numbers as well;

const str = "abcd";

console.log(str.at(0)); // a
console.log(str.at(-1)); // d
console.log(str.at(10)); // undefined
console.log(str.at(2)); //c
