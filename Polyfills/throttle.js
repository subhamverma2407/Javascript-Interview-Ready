// In throttle, once we invoke the throttled function then it will first execute the main function.
// then it will wait for the delay and triggers the main function after every delay.

const myThrottle = function (func, delay) {
  let isThrottled = false;
  return function () {
    let args = arguments;
    if (!isThrottled) {
      func.apply(this, args); // func(...args)
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
};
