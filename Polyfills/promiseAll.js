// Polyfill of Promise.all
// Promise.all accepts an iterable as an argument and returns a promise if all the
// promise in the iterable is resolved.
// Even if any one of the promise is rejected then the Promise.all will immediately exit with the error.
// It can also accept primitive or non-promise value in the array. in that case. it resolves it with exact same value.

// We will create an array of Promises.

const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 3000)),
  Promise.resolve(12),
  Promise.resolve("I am promise 3"),
];

Promise.myAll = function (promises) {
  return new Promise(function (resolve, reject) {
    const output = [];
    let settledCount = 0; // flag to keep track of settled Count.
    promises.forEach((promise, index) => {
      Promise.resolve(promise) // The reason to do this is if in the [] we have a primitive or non promise value, then it is not thenable.
        //So Promise.resolve() converts a non-promise into a promise and if we pass a promise then it remain unchanged.
        .then((result) => {
          settledCount++;
          output[index] = result;
          if (settledCount === promises.length) resolve(output); //// If all the promises are resolved then we can resolve the current promise with the output
        })
        .catch((error) => {
          reject(error); // If any promise fails then we will reject the current promise.
        });
    });
  });
};

Promise.myAll(promises)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
