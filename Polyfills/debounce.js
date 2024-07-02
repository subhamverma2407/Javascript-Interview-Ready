// Debounce is a technique in which we can limit a function call.
// lets say we are typing something in search bar and we don't want the api call to go on every
// key stroke. but rather wait for sometime from the previous key stroke and then make a call.

// There can be two situations.
// 1. where we want that the last invoke to the function needs to be called, like in typing or while autosaving
// a content.

// 2. Suppose we have a button and we want to register the first click and then if user hits the button
// within the delay duration then new call should not go.

// Solution 1: // here on every invoke of the function we are clearing the old timer and creating a new one.
// and once the timer is over then we are calling the function(or doing desired action).

function myDebounce(func, delay) {
  let timerId;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timerId);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
