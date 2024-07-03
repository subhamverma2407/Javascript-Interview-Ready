// Given an array from 0 to n.(unsorted).
// Find the missing number;

const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // missing 8

const idealLength = arr.length + 1;
const idealSum = (idealLength * (idealLength - 1)) / 2;
const realSum = arr.reduce((acc, v) => {
  acc += v;
  return acc;
}, 0);

console.log(idealSum - realSum);
