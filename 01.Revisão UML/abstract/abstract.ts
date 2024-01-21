abstract class Animal {
  protected abstract facaBarulho(): string;

  emitaBarulho() {
    console.log(this.facaBarulho());
  }
}

class Cachorro extends Animal {
  protected facaBarulho(): string {
    return "Au au";
  }
}

const cachorro = new Cachorro();
cachorro.emitaBarulho(); // Au au
