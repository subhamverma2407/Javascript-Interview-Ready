// The splice() method modifies an array (adds, removes or replaces elements).
// Syntax: arr.splice(start, deleteCount, item1, ..., itemN)
//start - The index from where the array is changed.
// deleteCount (optional) - The number of items to remove from start.
// item1, ..., itemN(optional) - The elements to add to the start index.
// If not specified, splice() will only remove elements from the array.
// Returns an array containing the deleted elements.
// It modifies the original array

// It is kinda swiss knife, performs, insert , delete and replace operations;

let fruits = ["apple", "orange", "grape", "banana", "melon"];

const res = fruits.splice(1, 0, "pineapple"); // pushes pineapple at 1th position
console.log(res, fruits);

fruits = ["apple", "orange", "grape", "banana", "melon"];
fruits.splice(2, 1); // This deletes 1 element from 2nd position
console.log(fruits); // [ 'apple', 'orange', 'banana', 'melon' ]
