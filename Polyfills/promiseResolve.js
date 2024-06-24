// Promise.resolve returns a promisified version of the given value. if, non promise value will be passed then
// it will return a new promise which will resolve with result as passed value.

const p1 = 42;

const newPromise = Promise.resolve(42);

newPromise.then((res) => console.log(res));

Promise.myResolve = function (value) {
  return new Promise((resolve) => resolve(value));
};

const myNewPromise = Promise.myResolve(42);
myNewPromise.then((res) => console.log(res));
