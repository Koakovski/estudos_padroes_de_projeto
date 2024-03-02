import { Seller } from './seller';
import { SellerProduct } from './seller-product';

export class Mediator {
  private sellers: Seller[] = [];

  addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      this.sellers.push(seller);
      seller.setMediator(this);
    });
  }

  buy(productId: string): SellerProduct | undefined {
    let product: SellerProduct | undefined;

    this.sellers.some((seller) => {
      const productOrUndefined = seller.sell(productId);
      product = productOrUndefined;
      return !!productOrUndefined;
    });

    const message = product
      ? `Produto comprado [id: ${product.id}]: ${product.name} | R$ ${product.price}`
      : `Nenhum produto com id ${productId} foi encontrado`;
    console.log(message);

    return product;
  }

  showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}
