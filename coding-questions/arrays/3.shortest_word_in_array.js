const words = [
  "cat",
  "saturday",
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "cot",
];

let minLength = Infinity;
let minIndex = 0;

words.forEach((v, i) => {
  if (v.length <= minLength) {
    minLength = v.length;
    minIndex = i;
  }
});

console.log(words[minIndex]);
