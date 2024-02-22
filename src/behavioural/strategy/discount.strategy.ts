import { DiscountStrategy } from './abstract-discount.strategy';
import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DefaultDiscountStrategy extends DiscountStrategy {
  calculateDiscount(cart: ECommerceShoppingCart): number {
    return 0;
  }
}

export class ByPriceDiscountStrategy extends DiscountStrategy {
  calculateDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 100 && total < 200) {
      return 10;
    }
    if (total >= 200 && total < 300) {
      return 20;
    }
    if (total >= 300) {
      return 30;
    }

    return 0;
  }
}

export class NewDiscountStrategy extends DiscountStrategy {
  calculateDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) return 5;
    return 0;
  }
}
