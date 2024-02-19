import { ProductDecorator } from './product-decorator';

export class ProductCustomizedDecorator extends ProductDecorator {
  private extraPrice = 50;

  getName(): string {
    return `${this.component.getName()} Customizado`;
  }

  getPrice(): number {
    return this.component.getPrice() + this.extraPrice;
  }
}
