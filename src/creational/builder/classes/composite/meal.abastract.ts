import { IMealComposite } from '../../interfaces/meal.composite.interface';

export abstract class Meal implements IMealComposite {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  getName(): string {
    return this._name;
  }

  getPrice(): number {
    return this._price;
  }
}
