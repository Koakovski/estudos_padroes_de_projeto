export interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    const newObject = new Address(this.street, this.number);
    return newObject;
  }
}

class Person implements Prototype {
  public addressess: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newPerson = new Person(this.name, this.age);
    newPerson.addressess = [
      ...this.addressess.map((address) => address.clone()),
    ];
    return newPerson;
  }

  addAddresss(address: Address): void {
    this.addressess.push(address);
  }
}

const address1 = new Address('Rua dos Bobos', 0);
const address2 = new Address('Vale da Sombra e da Morte', 2);

const person1 = new Person('Higor', 23);
person1.addAddresss(address1);
const person2 = person1.clone();

console.log('person1 address', person1.addressess);
console.log('person2 address', person2.addressess);
person1.addressess[0].street = 'Vale da Sombra e da Morte'; // mudando em person1
console.log('person1 address after change', person1.addressess);
console.log('person2 address after change', person2.addressess);
