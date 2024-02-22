import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export abstract class DiscountStrategy {
  abstract calculateDiscount(cart: ECommerceShoppingCart): number;

  getDiscount(cart: ECommerceShoppingCart): number {
    const discount = this.calculateDiscount(cart);
    return cart.getTotal() * (1 - discount / 100);
  }
}
