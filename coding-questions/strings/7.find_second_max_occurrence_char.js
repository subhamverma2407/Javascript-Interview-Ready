const str = "abcabcaab";
let max = 0;
let secondMax = 0;
let maxChar = null;
let secondMaxChar = null;
const strHash = {};
for (let i of str) {
  strHash[i] = (strHash[i] || 0) + 1;
}

console.log(strHash);

for (let [key, val] of Object.entries(strHash)) {
  if (val > max) {
    secondMax = max;
    secondMaxChar = maxChar;

    max = val;
    firstMaxChar = key;
  } else if (val > secondMax && val < max) {
    secondMax = val;
    secondMaxChar = key;
  }
}
console.log(secondMaxChar, secondMax);
