// Iterator and generator functions are advanced concepts in JavaScript that
//  allow for efficient and customizable looping through data structures.
//  They also provide a mechanism for customizing the behavior of for…of loops.

// In JavaScript, an iterator function is a unique function that returns an iterator object.
//  An iterator object is an object that has a next() method, which returns an object with
//  two properties: value and done.The value property represents the next value in the
// sequence, and the done property indicates whether the iterator has reached the
// end of the sequence.

// Iterator functions can be used to iterate over collections of data, such as arrays or objects.

// Iterator to loop over an array;

const Iterator = function (array) {
  let nextIndex = 0;
  return {
    next() {
      if (nextIndex < array.length) {
        return {
          value: array[nextIndex++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

const arrayIter = Iterator([1, 2, 3, 4, 5]);
console.log(arrayIter.next().value);

const MyIterator = function (start, end, step) {
  let nextItem = start;
  return {
    next() {
      if (nextItem < end) {
        nextItem += step;
        return {
          value: nextItem,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

const iter = MyIterator(0, 10, 1);
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

// Default Iterators in js:

const array = [1, 2, 3, 4, 5];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }

const str = "hello";
const strIterator = str[Symbol.iterator]();

console.log(strIterator.next()); //
