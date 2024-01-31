// this method is used to add element/elements at the end of an array.
// This method changes the original array and its length.
// It returns the length of modified array

const arr = [1, 2, 3, 4, 5];
const res = arr.push("abc", "def");
console.log(arr); // [1,2,3,4,5,'abc','def']
console.log(res); // 7
