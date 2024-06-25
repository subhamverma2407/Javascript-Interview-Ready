// The indexOf() method returns the first index
// of occurance of an array element, or - 1 if it is not found.
// Syntax: arr.indexOf(searchElement, fromIndex)

const priceList = [10, 8, 2, 31, 10, 1, 65];

const res = priceList.indexOf(10, 2); // since start index is passsed 1,so it checks from 2nd index.
console.log(res);

console.log(priceList.indexOf(289)); // -1
