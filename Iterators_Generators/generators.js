function* MyGenerator() {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}

const iterator = MyGenerator();

for (let item of iterator) {
  console.log(item);
}

function* fib(end) {
  let first = 0;
  let second = 1;
  yield first;
  yield second;
  for (let i = 0; i < end - 2; i++) {
    let temp = first + second;
    yield temp;
    first = second;
    second = temp;
  }
}

let fibIter = fib(30);

let res = fibIter.next();

while (!res.done) {
  console.log(res.value);
  res = fibIter.next();
}
