export interface ISystemUserAddress {
  street: string;
  number: number;
}

export interface ISystemUser {
  firstName: string;
  userName: string;

  getAddresses(): Promise<ISystemUserAddress[]>;
}
