// The string indexOf() method returns the index of the first occurence of the substring in a string.
// Parameters
// 1=> searchValue - The value to search for in the string.
// If no string is provided explicitly, "undefined" will be searched.
// 2=> fromIndex (optional) -
//  The index to start the search at.By default it is 0. If fromIndex < 0, the search starts at index 0.

// Returns
// Returns the first index of the value in the string if it is present at least once.
// Returns -1 if the value is not found in the string.

const message = "JavaScript is not Java";

// returns index of 'v' in first occurrence of 'va'
const index = message.indexOf("va");

console.log("index: " + index); // index: 2

var str = "JavaScript is the world's most misunderstood programming language.";

// indexOf() returns the first occurance
var index1 = str.indexOf("language");
console.log(index1); // 57

var index2 = str.indexOf("p");
console.log(index2); // 8

// second argument specifies the search's start index
var index3 = str.indexOf("p", 9);
console.log(index3); // 45

// indexOf returns -1 if not found
var index4 = str.indexOf("Python");
console.log(index4); // -1
