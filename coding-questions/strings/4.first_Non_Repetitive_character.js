let str = "swiss"; // op : w;
// str = "swissw";

const charHash = {};

for (let val of str) {
  charHash[val] = (charHash[val] || 0) + 1;
}

for (let key in charHash) {
  if (charHash[key] === 1) {
    console.log(key);
    return;
  }
}
