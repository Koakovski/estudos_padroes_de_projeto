import { RemoteControll } from './remote-controll';

export class RemoteControllWithVolume extends RemoteControll {
  volumeUp(): void {
    this.changeVolume('UP');
  }

  volumeDown(): void {
    this.changeVolume('DOWN');
  }

  private changeVolume(status: 'UP' | 'DOWN') {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(oldVolume + (status === 'UP' ? 10 : -10));
    console.log(
      `${this.device.getName()} had volume ${oldVolume} now it has volume ${this.device.getVolume()}`,
    );
  }
}
