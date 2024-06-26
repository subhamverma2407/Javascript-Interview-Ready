// at() returns a string at given index,
// if index is out of bounds, returns ''
// it doesn not works with negative numbers;

const str = "abcd";

console.log(str.charAt(0)); // a
console.log(str.charAt(-1)); // ''
console.log(str.charAt(10)); // ''
console.log(str.charAt(2)); //c
