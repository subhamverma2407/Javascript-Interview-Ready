// Promise.reject returns a promisified version of the given value. if, non promise value will be passed then
// it will return a new promise which will reject with error as passed value.

const p1 = 42;

const newPromise = Promise.reject(42);

newPromise.catch((res) => console.log(res));

Promise.myResolve = function (value) {
  return new Promise((_, reject) => reject(value));
};

const myNewPromise = Promise.myResolve(42);
myNewPromise.catch((res) => console.log(res));
