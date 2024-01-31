export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

class Person implements Prototype {
  public addressess: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObject = Object.create(this);
    return newObject;
  }

  addAddresss(address: Address): void {
    this.addressess.push(address);
  }
}

const address1 = new Address('Rua dos Bobos', 0);

const person1 = new Person('Higor', 23);
person1.addAddresss(address1);
const person2 = person1.clone();

console.log(person2);
console.log(person2.name);

person2.name = 'Maria'; // faz shadow em name de person1
console.log(person2);
console.log(person2.name);

console.log(person2.addressess);
person1.addressess[0].street = 'Vale da Sombra e da Morte'; // mudando em person1
console.log(person2.addressess); // reflete em person2 devido ao shallow copy
