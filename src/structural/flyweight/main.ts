import { deliveryContext } from './delivery.context';
import { DeliveryFactory } from './delivery.factory';

const deliveryFactory = new DeliveryFactory();

deliveryContext(deliveryFactory, 'Higor', 10, 'Rua Ravena', 'Morrinhos');
deliveryContext(deliveryFactory, 'João', 15, 'Rua Ravena', 'Morrinhos');
deliveryContext(deliveryFactory, 'Maria', 10, 'Rua Quito', 'Iporá');
deliveryContext(deliveryFactory, 'Pedro', 1, 'Rua Quito', 'Iporá');
deliveryContext(deliveryFactory, 'Anderson', 12, 'Rua Cabul', 'Iporá');

console.log(deliveryFactory.getLocations());
