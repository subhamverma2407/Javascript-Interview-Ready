function countSubstringOccurrences(str, substring) {
  let count = 0;
  let startIndex = 0;

  // Continue searching until no more occurrences are found
  while (true) {
    startIndex = str.indexOf(substring, startIndex);
    if (startIndex !== -1) {
      count++;
      startIndex += substring.length;
    } else {
      break;
    }
  }
  return count;
}

// Example usage
console.log(countSubstringOccurrences("hello world, hello universe", "hello")); // Output: 2

function findAllOccurrences(str, substring) {
  // Implementation here
  let startIndex = 0;
  let res = [];
  let i = 0;
  while (i < str.length) {
    startIndex = str.indexOf(substring, startIndex);
    if (startIndex !== -1) {
      res.push(startIndex);
      startIndex += substring.length;
      i = startIndex;
    }
  }
  return res;
}

console.log(findAllOccurrences("ababcababc", "abc")); // Output: [2, 7]
