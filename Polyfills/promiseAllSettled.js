// Promise.allSettled takes an iterable(mostly array) of either promise or a non-promise value.
// It executes all the promise and returns a resolved promise with the result as
// an array of all the promise status, be it resolved or rejected.
// the format of the result is as {status: 'fulfilled', value: result} for fulfilled status
// and {status: 'rejected', reason: error} for rejected status

const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 3000)),
  Promise.resolve(12),
  Promise.reject(28),
  new Promise((_, reject) =>
    setTimeout(() => reject("Promise 4 is rejected due to some issue"), 1000)
  ),
  Promise.resolve("I am promise 5"),
];

Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    const output = [];
    let settledCount = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          output[index] = {
            status: "fulfilled",
            value: result,
          };
        })
        .catch((error) => {
          output[index] = {
            status: "rejected",
            reason: error,
          };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) resolve(output);
        });
    });
  });
};

Promise.myAllSettled(promises).then((res) => console.log(res));
