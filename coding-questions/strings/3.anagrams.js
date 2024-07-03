// check if two strings are anagram or not.

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charHash = {};
  for (let val of str1)
    charHash[val] ? (charHash[val] += 1) : (charHash[val] = 1);

  for (let val of str2) {
    if (!charHash[val] || charHash[val] <= 0) {
      return false;
    } else {
      charHash[val] = charHash[val] - 1;
    }
  }
  return true;
};

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "ollme"));
console.log(isAnagram("listen", "abc"));
