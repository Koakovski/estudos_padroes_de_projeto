import { CustomerData } from './customer-data';

export abstract class CustomerDataParser {
  protected customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  readonly fixCustomerData = async (): Promise<void> => {
    await this.parseData();
    this.hook();
    this.fixCostumerDataCPF();
  };

  private fixCostumerDataCPF(): void {
    this.customerData = this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/\D/g, ''),
    }));
  }

  protected hook() {}

  protected abstract parseData(): Promise<void>;

  getCustomerData() {
    return this.customerData;
  }
}
