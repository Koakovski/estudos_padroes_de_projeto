import { Vehicle } from '../vehicles/vehicle';

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): Vehicle;

  pickup(costumerName: string, vehicleName: string): Vehicle {
    const vehicle = this.getVehicle(vehicleName);
    vehicle.pickUp(costumerName);
    return vehicle;
  }
}
