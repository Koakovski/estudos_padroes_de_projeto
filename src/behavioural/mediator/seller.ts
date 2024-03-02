import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.products.forEach((product) => console.log(product));
  }

  addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(productId: string): SellerProduct | undefined {
    const productIndex = this.products.findIndex(
      (product) => product.id === productId,
    );
    if (productIndex === -1) return;

    const [product] = this.products.splice(productIndex, 1);

    return product;
  }
}
