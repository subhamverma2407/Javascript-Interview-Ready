// It checks if some item in the array pass the test in the call back function or not.
// Returns true if some/any item passes the test else return false

const arr = [2, 4, 6, 8, 10];
const res = arr.some((v) => v === 10);
console.log(res); // true;
console.log(arr.some((v) => v > 11)); // false
console.log(["a", 1, 2, 3, 4].some((v) => v === "a")); // true
