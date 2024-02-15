import { Radio } from './devices/radio.device';
import { Tv } from './devices/tv.device';
import { RemoteControll } from './remote-controll/remote-controll';
import { RemoteControllWithVolume } from './remote-controll/remote-controll-with-volume';

function client(abstraction: RemoteControll | RemoteControllWithVolume) {
  abstraction.togglePower(); // true

  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
  abstraction.volumeDown(); // 10
  abstraction.volumeDown(); // 0
  abstraction.volumeDown(); // 0
}

const tv = new Tv();
const radio = new Radio();

const tvRemoteControll = new RemoteControllWithVolume(tv);
const radioRemoteControll = new RemoteControll(radio);

client(tvRemoteControll);
client(radioRemoteControll);
