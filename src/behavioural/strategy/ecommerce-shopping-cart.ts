import { DiscountStrategy } from './abstract-discount.strategy';
import { DefaultDiscountStrategy } from './discount.strategy';

export interface IECommerceProduct {
  name: string;
  price: number;
}

export class ECommerceShoppingCart {
  private products: IECommerceProduct[] = [];
  private _discountStrategy: DiscountStrategy = new DefaultDiscountStrategy();

  addProduct(...products: IECommerceProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): IECommerceProduct[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discountStrategy(discountStrategy: DiscountStrategy) {
    this._discountStrategy = discountStrategy;
  }
}
