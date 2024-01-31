function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Higor',
  lastName: 'Koakovski',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = true;
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person = new Person('Higor', 'Pereira', 23);
console.log(person);
console.log(person.fullName());
const subPerson = new SubPerson('João', 'Victor', 30);
console.log(subPerson);
console.log(subPerson.fromSubClass);
