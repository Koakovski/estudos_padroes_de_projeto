import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/Enterprise-vehicle';
import { CustomerVehicleFactory } from './customer-vehicle.factory';

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): EnterpriseCustomer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): EnterpriseVehicle {
    const enterpriseCustomer = this.createCustomer(customerName);
    return new EnterpriseVehicle(vehicleName, enterpriseCustomer);
  }
}
