const str = "statistics";

const strHash = {};

for (let i = 0; i < str.length; i++) {
  if (strHash[str[i]] !== undefined) {
    console.log(str[i]);
    break;
  } else {
    strHash[str[i]] = 1;
  }
}
