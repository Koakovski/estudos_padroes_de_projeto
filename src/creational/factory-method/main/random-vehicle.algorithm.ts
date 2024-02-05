import { BicycleFactory } from '../factories/bicycle.factory';
import { CarFactory } from '../factories/car.factory';
import { randomNumber } from '../utils/random-numbers';
import { Vehicle } from '../vehicles/vehicle';

export function randomVehicleAlgorithm(): Vehicle {
  const carFacotry = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFacotry.getVehicle('Fusca');
  const car2 = carFacotry.getVehicle('Celta Preto');

  const bicycle = bicycleFactory.getVehicle('Monark');

  const vehicles = [car1, car2, bicycle];
  return vehicles[randomNumber(vehicles.length)];
}
