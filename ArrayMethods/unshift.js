// this method is used to add element/elements at the start of an array.
// This method changes the original array and its length.
// It returns the length of modified array

const arr = [1, 2, 3, 4, 5];
const res = arr.unshift("abc", "def");
console.log(arr); // ['abc','def',1,2,3,4,5]
console.log(res); // 7
