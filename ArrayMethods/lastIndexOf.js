// The lastIndexOf() method returns the index of the last
// occurrence of a specified element in the array.
// Syntax: arr.lastIndexOf(searchElement, fromIndex)
// fromIndex is a negative number then the index is calculated backward.

let alphabets = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
console.log(alphabets.lastIndexOf("a", 4));

// Negative number
// starts the search at third last position
let lastIndex = console.log(alphabets.lastIndexOf("a", -3));
