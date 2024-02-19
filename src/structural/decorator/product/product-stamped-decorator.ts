import { ProductDecorator } from './product-decorator';

export class ProductStampedDecorator extends ProductDecorator {
  private extraPrice = 10;

  getName(): string {
    return `${this.component.getName()} Estampada`;
  }

  getPrice(): number {
    return this.component.getPrice() + this.extraPrice;
  }
}
