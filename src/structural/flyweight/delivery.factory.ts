import { IDeliveryFlyweight } from './delivery-flyweight.interface';
import { DeliveryLocation } from './delivery-location.flyweight';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery.types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createkey(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.trim().replace(/\s+/, '_'))
      .join('-')
      .toLowerCase();
  }

  getLocations() {
    return this.locations;
  }

  makeLocation(intrinsicState: DeliveryLocationData): IDeliveryFlyweight {
    const key = this.createkey(intrinsicState);

    if (!(key in this.locations)) {
      this.locations[key] = new DeliveryLocation(intrinsicState);
    }

    return this.locations[key];
  }
}
