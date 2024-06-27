// The replaceAll() method returns a new string with all matches
// of a pattern replaced by a replacement.
// The replaceAll() method takes in:
// pattern - either a substring or a regex that is to be replaced
// replacement - the pattern is replaced with this replacement (can be either a string or a function)

// Returns a string.

const str = "hello java, java is a good language.";

console.log(str.replaceAll("java", "javascript"));

let pattern = /java/g; // use this regex to replace all

console.log(str.replaceAll(pattern, "javascript"));
