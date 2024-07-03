const fruits = [
  { apple: 4, orange: 7, grape: 3 },
  { guava: 6, lemon: 4, banana: 8 },
  { orange: 5, pineapple: 7, apple: 7 },
];

let fruitSum = {};
fruits.forEach((data) => {
  for (let x in data) {
    if (fruitSum[x]) {
      fruitSum[x] = fruitSum[x] + data[x];
    } else {
      fruitSum[x] = data[x];
    }
  }
});

console.log(fruitSum);
