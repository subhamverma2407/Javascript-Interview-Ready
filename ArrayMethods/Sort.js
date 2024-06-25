// Sort
// It modifies the array
// The sort() method sorts the items of an array in a specific order (ascending or descending).
// Returns the array after sorting the elements of the array
// in place(meaning that it changes the original array and no copy is made).

// When compareFunction is not passed,
// All non-undefined array elements are first converted to strings.
// These strings are then compared using their UTF-16 code point value.
// The sorting is done in ascending order.
// All undefined elements are sorted to the end of the array.

// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort());

// modifies the array in place
console.log(names);

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();

// Number is converted to string and sorted
console.log(priceList);

//When compareFunction is passed,
// All non-undefined array elements are sorted according to the return value of compareFunction.
// All undefined elements are sorted to the end of the array
// and compareFunction is not called for them.

const arr1 = [4, 3, 2, 5, 1];
const res1 = arr1.sort((a, b) => b - a);
console.log(res1, arr1);

// The compareFunction should return a Number. This returned value
// is used to sort the elements in the following way:

// If returned value < 0, a is sorted before b (a comes before b).
// If returned value > 0, b is sorted before a (b comes before a).
// If returned value == 0, a and b remain unchanged relative to each other.
