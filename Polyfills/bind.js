const data = {
  id: 1,
  title: "Javascript",
};
const print = function (greetings, message) {
  console.log(`${greetings}! ${this.title} ${message}`);
};
Function.prototype.myBind = function (obj, ...args) {
  const fncSymbol = Symbol("functionToCall");
  obj[fncSymbol] = this;
  return function (...args1) {
    obj[fncSymbol](...args, ...args1);
    delete obj[fncSymbol];
  };
};
const printData = print.myBind(data, "Hi", "is a great language");
printData(); // Hi! Javascript is a great language
