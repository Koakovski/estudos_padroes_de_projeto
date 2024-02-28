import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderApprovedState } from './shopping-order-approved.state';
import { ShoppingOrderRejectedState } from './shopping-order-rejected.state';
import { ShoppingOrderState } from './shopping-order-state.interface';

export class ShoppingOrderPendingState implements ShoppingOrderState {
  private name = 'Pending';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new ShoppingOrderApprovedState(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new ShoppingOrderRejectedState(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está pendente');
  }

  shipOrder(): void {
    console.log('Não é possível realizar o envio com o pagamento pendente');
  }
}
