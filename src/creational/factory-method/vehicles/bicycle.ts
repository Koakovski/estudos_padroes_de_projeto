import { Vehicle } from './vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  pickUp(costumerName: string): void {
    console.log(`${this.name} esta buscando ${costumerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
