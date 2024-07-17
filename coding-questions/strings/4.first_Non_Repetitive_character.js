let str = "swiss"; // op : w;
// str = "swissw";

const charHash = {};

for (let val of str) {
  charHash[val] = (charHash[val] || 0) + 1;
}

for (let val of str) {
  if (charHash[val] === 1) {
    console.log(val);
    break;
  }
}
