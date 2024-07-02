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
