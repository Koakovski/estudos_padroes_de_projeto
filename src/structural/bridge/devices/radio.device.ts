import { IDeviceImplementation } from './device.implementation';

export class Radio implements IDeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'Radio';

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }
  setVolume(volume: number): void {
    if (volume < 0) return;
    if (volume > 100) return;

    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
  getName(): string {
    return this.name;
  }
}
