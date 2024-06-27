// Used to find a pattern in a given string.
// Takes only one argument .
// Returns the index of the first match between the regular expression and the given string
// returns -1 if not found.

// difference between indexOf and search is search can't take regex;
// also search allows to set start position

const str = "hello world. javascript is great, hello world";

console.log(str.search("world")); // 6
console.log(str.search(/hello/g)); // 0
console.log(str.indexOf(/hello/g)); // -1 -> indexOf method can't take regexs
console.log(str.search("ga")); // -1
