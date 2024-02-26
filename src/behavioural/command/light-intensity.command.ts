import { SmartHouseCommand } from './command';
import { SmartLightHouse } from './smart-light-house';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartLightHouse) {}

  undo(): void {
    const intensity = this.light.increaseIntensity();
    this.announce(intensity);
  }

  execute(): void {
    const intensity = this.light.decraseIntensity();
    this.announce(intensity);
  }

  private announce(intensity: number) {
    console.log(`${this.light.name} está com intensidade de ${intensity}%`);
  }
}
