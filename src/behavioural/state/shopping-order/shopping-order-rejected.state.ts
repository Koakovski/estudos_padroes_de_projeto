import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderApprovedState } from './shopping-order-approved.state';
import { ShoppingOrderPendingState } from './shopping-order-pending.state';
import { ShoppingOrderState } from './shopping-order-state.interface';

export class ShoppingOrderRejectedState implements ShoppingOrderState {
  private name = 'Rejected';
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não é possível aprovar um pagamento rejeitado');
  }

  rejectPayment(): void {
    console.log('O pedido já está recusado');
  }

  waitPayment(): void {
    console.log('Não é possível esperar um pagamento rejeitado');
  }

  shipOrder(): void {
    console.log(
      'Não é possível realizar o envio pois o pagamento está rejeitado',
    );
  }
}
