import { IProduct } from './product.interface';

export class ProductDecorator implements IProduct {
  constructor(protected component: IProduct) {}

  getName(): string {
    return this.component.getName();
  }

  getPrice(): number {
    return this.component.getPrice();
  }
}
