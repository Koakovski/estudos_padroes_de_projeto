import { IDeliveryFlyweight } from './delivery-flyweight.interface';
import { DeliveryLocationData } from './delivery.types';

export class DeliveryLocation implements IDeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, number: number): void {
    console.log(`Entrega para ${name}`);
    console.log(`Em ${this.intrinsicState.street} ${this.intrinsicState.city}`);
    console.log(`Número: ${number}`);
    console.log('#####');
  }
}
