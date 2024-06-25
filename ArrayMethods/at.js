// at is a newly added method in js.
// It returns element at the given location. if negative index is given then it will count from end of array
// returns undefined if the passed value is > length of array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(arr.at(0)); // 1
console.log(arr.at(4)); // 5
console.log(arr.at(-2)); // 12
console.log(arr.at(-1)); // 13
console.log(arr.at(89)); // undefined
console.log(arr.at([])); // 1 since [] is converted to number 0;
console.log(arr.at({})); // 1 since {} is converted to number 0;
console.log(arr.at("abc")); // 1
