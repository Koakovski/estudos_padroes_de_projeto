import { ShoppingOrderPendingState } from './shopping-order-pending.state';
import { ShoppingOrderState } from './shopping-order-state.interface';

export class ShoppingOrder {
  private state: ShoppingOrderState = new ShoppingOrderPendingState(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState) {
    console.log(
      `Alterando estado de '${this.state.getName()}' para '${state.getName()}'`,
    );
    this.state = state;
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
