const arr = [3, 6, 7, 3, 5, 4, 1];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let item of arr) {
  if (item > firstLargest) {
    secondLargest = firstLargest;
    firstLargest = item;
  } else if (item > secondLargest && item < firstLargest) {
    secondLargest = item;
  }
}
console.log(secondLargest);
