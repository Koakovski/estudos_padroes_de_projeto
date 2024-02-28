import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderPendingState } from './shopping-order-pending.state';
import { ShoppingOrderRejectedState } from './shopping-order-rejected.state';
import { ShoppingOrderState } from './shopping-order-state.interface';

export class ShoppingOrderApprovedState implements ShoppingOrderState {
  private name = 'Approved';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Pedido já está aprovado');
  }

  rejectPayment(): void {
    this.order.setState(new ShoppingOrderRejectedState(this.order));
  }

  waitPayment(): void {
    this.order.setState(new ShoppingOrderPendingState(this.order));
  }

  shipOrder(): void {
    console.log('Enviando pedido para o usuário...');
  }
}
