// Promise.any also takes an iterable and what it does is it returns the first resolved promise.
// If all the promise is rejected then it will return Aggregate Error

const promises = [
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 1 resolved"), 3000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 2 rejected"), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Promise 3 resolved"), 5000)
  ),
];

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let rejectedCount = 0;
    const error = new AggregateError(errors, "All promises were rejected");
    if (promises.length === 0) {
      reject(error);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          rejectedCount++;
          errors[index] = err;
          if (rejectedCount === promises.length) {
            reject(error);
          }
        });
    });
  });
};

Promise.myAny(promises).catch((err) => console.log(err));
