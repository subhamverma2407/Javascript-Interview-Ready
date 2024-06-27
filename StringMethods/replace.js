//The replace() method returns a new string with the specified string/regex replaced.
// Syntax": str.replace(pattern, replacement)
// pattern - either a string or a regex that is to be replaced
// replacement - the pattern is replaced with this
// replacement(can be either a string or a function)

// The replace() method returns a new string with the specified pattern replaced.

const str = "hello java, java is a good language.";

console.log(str.replace("java", "javascript"));

let pattern = /java/g; // use this regex to replace all

console.log(str.replace(pattern, "javascript"));
