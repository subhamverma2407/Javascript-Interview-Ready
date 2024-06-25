// The findLastIndex() method of Array instances iterates
// the array in reverse order and returns the index of the first element
// that satisfies the provided testing function. If no elements satisfy
// the testing function, -1 is returned.

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLastIndex((element) => element > 45);

console.log(found);
// Expected output: 3
