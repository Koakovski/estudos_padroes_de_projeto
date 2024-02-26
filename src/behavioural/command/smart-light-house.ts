export class SmartLightHouse {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  on(): boolean {
    this.isOn = true;
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    return this.isOn;
  }

  increaseIntensity(): number {
    this.intensity = this.intensity >= 100 ? 100 : this.intensity + 1;
    return this.intensity;
  }

  decraseIntensity(): number {
    this.intensity = this.intensity <= 0 ? 0 : this.intensity - 1;
    return this.intensity;
  }
}
