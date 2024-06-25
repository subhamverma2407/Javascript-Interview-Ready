// The includes() method checks if an array contains a specified element or not.
// Syntax: arr.includes(valueToFind, fromIndex)
// The includes() method can take two parameters:
// searchValue- The value to search for.
// fromIndex (optional) - The position in the array at which to begin the search. By default, it is 0.
// For negative values, the search starts from array.length + fromIndex (Counting from backward).
// For example, -1 represents the last element.
// Returns:
// true if searchValue is found anywhere within the array
// false if searchValue is not found anywhere within the array
// The includes() method is case sensitive.

let languages = ["JavaScript", "Java", "C", "C++", "python"];

// checking whether the array contains 'C'
let check1 = languages.includes("C");

console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");

console.log(check2); // false
console.log(languages.includes("Python")); // false
console.log(languages.includes("python")); // true
