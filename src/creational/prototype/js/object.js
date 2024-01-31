const personPrototype = {
  firstName: 'Higor',
  lastName: 'Koakovski',
  age: 23,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.lastName);
console.log(anotherPerson.fullName());

anotherPerson.lastName = 'Pereira';

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.lastName);
console.log(anotherPerson.fullName());
