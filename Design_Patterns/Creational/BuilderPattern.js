class Person {
  constructor(name, age, weight, gender) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }
}

class PersonBuilder {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  setAge(age) {
    this.age = age;
    return this;
  }
  setWeight(weight) {
    this.weight = weight;
    return this;
  }
  build() {
    return new Person(this.name, this.age, this.weight, this.gender);
  }
}

const person = new Person("subham", 27, 54, "M");

const person1 = new PersonBuilder("subham", "M")
  .setAge(28)
  .setWeight(54)
  .build();
console.log(person1);

/// Another Approach
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }
  build() {
    return this.user;
  }
}

const user = new UserBuilder("subham").setAge(27).setPhone(827827382).build();
console.log(user);
