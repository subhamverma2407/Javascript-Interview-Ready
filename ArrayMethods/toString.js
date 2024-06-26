// The toString() method returns a string formed by the elements of the given array.
// The toString() method does not change the original array.
// Elements like undefined, null, or empty array, have an empty string representation.

const arr = [1, 2, , 4, 5, 6];
const res = arr.toString();
console.log(res); // "1,2,,4,5,6"

const obj = {};
obj.a = 1;
obj[arr] = 2;
console.log(obj); // { a: 1, '1,2,,4,5,6': 2 }
