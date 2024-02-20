import { ISystemUser, ISystemUserAddress } from './system-user.interface';

export class SystemUserProxy implements ISystemUser {
  public firstName: string;
  public userName: string;
  private realUserAddresses: ISystemUserAddress[] | null = null;

  constructor(private realUser: ISystemUser) {
    this.firstName = `[Proxy]  realUser.firstName`;
    this.userName = `[Proxy] ${realUser.userName}`;
  }

  async getAddresses(): Promise<ISystemUserAddress[]> {
    if (!this.realUserAddresses) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
