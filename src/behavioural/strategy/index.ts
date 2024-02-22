import {
  ByPriceDiscountStrategy,
  NewDiscountStrategy,
} from './discount.strategy';
import {
  ECommerceShoppingCart,
  IECommerceProduct,
} from './ecommerce-shopping-cart';

const tShirt: IECommerceProduct = { name: 'Camiseta', price: 50 };
const shoppingCart = new ECommerceShoppingCart();

shoppingCart.addProduct(tShirt, tShirt, tShirt, tShirt);
console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discountStrategy = new ByPriceDiscountStrategy();
console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discountStrategy = new NewDiscountStrategy();
console.log(shoppingCart.getTotalWithDiscount());
