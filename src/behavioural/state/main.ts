import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();

order.approvePayment();
order.waitPayment();
order.waitPayment();
order.rejectPayment();
order.approvePayment();
order.shipOrder();