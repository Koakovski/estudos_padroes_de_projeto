import { LightIntensityCommand } from './light-intensity.command';
import { LightPowerCommand } from './light-power.command';
import { SmartHouseApp } from './smart-house.app';
import { SmartLightHouse } from './smart-light-house';

const bedroomlight = new SmartLightHouse('Bedroom Light');
const bedroomLightPowerCommand = new LightPowerCommand(bedroomlight);
const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomlight);

const bathroomlight = new SmartLightHouse('Bathroom Light');
const bathroomlightPowerCommand = new LightPowerCommand(bathroomlight);
const bathroomLightIntensityCommand = new LightIntensityCommand(bathroomlight);

enum Btns {
  btn_1 = 'btn_1',
  btn_2 = 'btn_2',
  btn_3 = 'btn_3',
  btn_4 = 'btn_4',
}

const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand(Btns.btn_1, bedroomLightPowerCommand);
smartHouseApp.addCommand(Btns.btn_2, bedroomLightIntensityCommand);
smartHouseApp.addCommand(Btns.btn_3, bathroomlightPowerCommand);
smartHouseApp.addCommand(Btns.btn_4, bathroomLightIntensityCommand);

smartHouseApp.executeCommand(Btns.btn_1);
smartHouseApp.undoCommand(Btns.btn_1);
smartHouseApp.executeCommand(Btns.btn_2);
smartHouseApp.undoCommand(Btns.btn_2);

smartHouseApp.executeCommand(Btns.btn_3);
smartHouseApp.undoCommand(Btns.btn_3);
smartHouseApp.executeCommand(Btns.btn_4);
smartHouseApp.undoCommand(Btns.btn_4);
