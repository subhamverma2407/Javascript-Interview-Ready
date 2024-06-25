// It checks if every item in the array pass the test in the call back function or not.
// Returns true if every item passes the test else return false

const arr = [2, 4, 6, 8, 10];
const res = arr.every((v) => v % 2 === 0);
console.log(res);
