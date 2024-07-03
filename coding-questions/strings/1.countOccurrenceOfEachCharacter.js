const str = "malyalam";
const hashMap = {};
for (let v of str) {
  hashMap[v] ? (hashMap[v] += 1) : (hashMap[v] = 1);
}
for (let key in hashMap) {
  console.log(key, hashMap[key]);
}
