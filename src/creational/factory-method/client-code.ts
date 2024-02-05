import { randomVehicleAlgorithm } from './main/random-vehicle.algorithm';

const clients = [
  'Simão',
  'André',
  'Tiago',
  'João',
  'Filipe',
  'Bartolomeu',
  'Mateus',
  'Tomé',
  'Tiago',
  'Tadeu',
  'Simão',
  'Judas',
];

for (const client of clients) {
  const randomVehicle = randomVehicleAlgorithm();
  randomVehicle.pickUp(client);
  randomVehicle.stop();
}
