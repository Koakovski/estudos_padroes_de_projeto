import { AdminUser } from './admin.user';
import { ISystemUser } from './system-user.interface';
import { SystemUserProxy } from './system-user.proxy';

async function run(systemUser: ISystemUser) {
  console.time(systemUser.userName);
  await systemUser.getAddresses();
  await systemUser.getAddresses();
  await systemUser.getAddresses();
  console.timeEnd(systemUser.userName);
}

const adminUser = new AdminUser('Higor', 'HIGOR');
const adminUserProxy = new SystemUserProxy(adminUser);

run(adminUser); // 2s
run(adminUserProxy); // 6s
