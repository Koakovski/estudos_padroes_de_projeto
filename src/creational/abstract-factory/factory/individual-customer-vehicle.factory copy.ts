import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { CustomerVehicleFactory } from './customer-vehicle.factory';

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): IndividualCustomer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IndividualVehicle {
    const enterpriseCustomer = this.createCustomer(customerName);
    return new IndividualVehicle(vehicleName, enterpriseCustomer);
  }
}
