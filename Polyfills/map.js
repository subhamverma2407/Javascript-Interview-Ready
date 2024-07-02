const myArr = [1, 2, 3, 4, 5, 6];

Array.prototype.myMap = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i));
  }
  return res;
};

console.log(myArr.myMap((v, i) => v * 2));
