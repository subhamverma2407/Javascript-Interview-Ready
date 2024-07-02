const data = {
  id: 1,
  title: "Javascript",
};
const print = function (greetings, message) {
  console.log(`${greetings}! ${this.title} ${message}`);
};

Function.prototype.myBind = function (context = {}, ...args) {
  context.fn = this;
  return function (...args1) {
    const arg = [...args, ...args1];
    context.fn(...arg);
  };
};

// Function.prototype.myBind = function (obj, ...args) {
//   const fncSymbol = Symbol("functionToCall");
//   obj[fncSymbol] = this;
//   return function (...args1) {
//     obj[fncSymbol](...args, ...args1);
//     delete obj[fncSymbol];
//   };
// };

// Function.prototype.newBind = function (...args) {
//   const obj = this;
//   const rest = args.slice(1);
//   return function (...args1) {
//     obj.apply(args[0], rest.concat(args1));
//   };
// };
// const printData = print.myBind(data, "Hi", "is a great language");
// const printData1 = print.newBind(data, "Hello", "is the best language");
// printData1(); // Hi! Javascript is a great language
// printData1(); // Hello!! Javascript is the best language

const printData2 = print.myBind(data, "Hi");
printData2("is a great language"); // Hi! Javascript is a great language
