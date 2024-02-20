import { ISystemUser, ISystemUserAddress } from './system-user.interface';

export class AdminUser implements ISystemUser {
  constructor(public firstName: string, public userName: string) {}

  async getAddresses(): Promise<ISystemUserAddress[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          {
            street: 'Rua A',
            number: 10,
          },
          {
            street: 'Rua B',
            number: 10,
          },
        ]);
      }, 2000);
    });
  }
}
