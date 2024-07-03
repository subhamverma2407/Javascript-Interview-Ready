const arr = [2, 7, 11, 15];
const target = 9;

const numHash = {};

for (let val of arr) {
  const complement = target - val;
  if (numHash[complement] !== undefined) {
    console.log(complement, val);
  } else {
    numHash[val] = true;
  }
}
