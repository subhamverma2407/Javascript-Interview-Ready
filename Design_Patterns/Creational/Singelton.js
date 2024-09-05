class Bag {
  static instance;
  constructor() {
    if (Bag.instance) {
      // throw new Error("This is a Singleton")
    } else {
      this.bag = [];
      Bag.instance = this;
    }
  }

  addItem(item) {
    this.bag.push(item);
  }

  getCount() {
    return this.count;
  }
}

const bagSingelton = new Bag();
// Object.freeze(bagSingelton);

bagSingelton.value = 4;

// const bagSingelton1 = new Bag();

bagSingelton.addItem("apple");

console.log(bagSingelton);

const Singleton = (function () {
  function Manager(name) {
    this.name = name;
    this.task = [];
  }
  let manager;

  function createManager(name) {
    manager = new Manager(name);
    return manager;
  }

  Manager.prototype = {
    addTask(task) {
      this.task.push(task);
    },
    getTaskCount() {
      return this.task.length;
    },
  };

  return {
    getManager: function () {
      if (!manager) {
        return createManager("Rohan");
      } else {
        return manager;
      }
    },
  };
})();

const manager = Singleton.getManager();

Object.freeze(manager);
manager.addTask("hello");

const manager2 = Singleton.getManager();
console.log(manager2);

class Manager {
  static manager;
  constructor() {
    if (!Manager.manager) {
      this.task = [];
      Manager.manager = this;
    }
    return Manager.manager;
  }
  addTask(task) {
    this.task.push(task);
  }
  getCount() {
    return this.task.length;
  }
  showTask() {
    return this.task;
  }
}

const managerInstance = new Manager();
console.log(managerInstance);
managerInstance.addTask("PR review");
console.log(managerInstance);
