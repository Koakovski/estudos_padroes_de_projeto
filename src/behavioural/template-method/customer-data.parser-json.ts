import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data.parser';

export class CustomerDataParserJSON extends CustomerDataParser {
  protected async parseData(): Promise<void> {
    const rawData = await promises.readFile(this.filePath);
    const data = JSON.parse(rawData.toString());

    const customerData: CustomerData[] = [];

    for (const customer of data) {
      const { name, age, cpf } = customer;
      customerData.push({ name, age, cpf });
    }

    this.customerData = customerData;
  }

  protected hook(): void {
    console.log('Exemplo de uso do hook');
  }
}
