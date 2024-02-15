import { IDeviceImplementation } from '../devices/device.implementation';

export class RemoteControll {
  constructor(protected device: IDeviceImplementation) {}

  togglePower() {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
