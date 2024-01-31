// Array Methods

// Reverse
// It modifies the array

const arr = [1, 2, 3, 4, 5];
const res = arr.reverse();
console.log(res, arr);

// Sort
// It modifies the array

const arr1 = [4, 3, 2, 5, 1];
const res1 = arr1.sort((a, b) => b - a);
console.log(res1, arr1);

// Fill
// It modifies the array
const arr3 = [1, 2, 3, 4, 5, 6];
const res3 = arr3.fill(2); //[ 2, 2, 2, 2, 2, 2 ]
const res4 = arr3.fill(0, 2, 5); // [ 2, 2, 2, 2, 2, 2 ]
console.log(arr3);
