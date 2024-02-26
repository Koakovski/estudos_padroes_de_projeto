import { SmartHouseCommand } from './command';
import { SmartLightHouse } from './smart-light-house';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartLightHouse) {}

  undo(): void {
    const powerStatus = this.light.off();
    this.announce(powerStatus);
  }

  execute(): void {
    const powerStatus = this.light.on();
    this.announce(powerStatus);
  }

  private announce(powerStatus: boolean) {
    console.log(`${this.light.name} está ${powerStatus ? 'ON' : 'OFF'}`);
  }
}
