const person = {
  name: "abc",
  displayName: function (message) {
    console.log("my name is", this.name, message);
  },
};

const student = {
  name: "subham",
};

person.displayName.call(student, "hello");

Function.prototype.myCall = function (context = {}, ...args) {
  context.fn = this;
  context.fn(...args);
};

person.displayName.myCall(student, "hello");
