import { Mediator } from './mediator';

export class Buyer {
  constructor(private mediator: Mediator) {}

  viewProducts(): void {
    this.mediator.showProducts();
  }

  buy(productId: string) {
    this.mediator.buy(productId);
  }
}
