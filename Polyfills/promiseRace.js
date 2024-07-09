// Promise.race also takes an iterable and what it does is it returns the first settled promise.
// Be it resolved or rejected. whichever gets settled first is returned.
// Produce no result if an empty array is passed.

const promises = [
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("Promise 1 resolved"), 3000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 2 rejected"), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => resolve("Promise 3 resolved"), 5000)
  ),
];

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return;
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve, reject); // since then can take two argument.
      // .catch(reject) -> Alternative
    });
  });
};

Promise.myRace(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
