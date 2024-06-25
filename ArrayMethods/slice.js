// The slice() method returns a shallow copy of a portion of an array into a new array object.
// it works with negative indices as well.
// Syntax: arr.slice(start, end)
// Returns a new array containing the extracted elements.

let languages = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr = languages.slice();
console.log(new_arr); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr2 = languages.slice(2);
console.log(new_arr2); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr3 = languages.slice(1, 4);
console.log(new_arr3); // [ 'Python', 'C', 'C++' ]

// slicing the array from start to second-to-last
let new_arr4 = languages.slice(0, -2);
console.log(new_arr4); // [ 'JavaScript', 'Python', 'C' ]

let new_arr5 = languages.slice(-2, 0);
console.log(new_arr5); // [ ]
