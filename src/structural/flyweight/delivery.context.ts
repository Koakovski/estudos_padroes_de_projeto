import { DeliveryFactory } from './delivery.factory';

export const deliveryContext = (
  factory: DeliveryFactory,
  name: string,
  number: number,
  street: string,
  city: string,
): void => {
  const location = factory.makeLocation({
    city,
    street,
  });

  location.deliver(name, number);
};
