import { EnterpriseCustomerVehicleFactory } from './factory/enterprise-customer-vehicle.factory';
import { IndividualCustomerVehicleFactory } from './factory/individual-customer-vehicle.factory copy';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const enterpiseCar1 = enterpriseFactory.createVehicle('Fusca', 'João');
const individualCar1 = individualFactory.createVehicle('Jeta', 'Pedro');

enterpiseCar1.pickUp();
individualCar1.pickUp();
