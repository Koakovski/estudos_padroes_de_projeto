import { promises } from 'fs';
import { CustomerData } from './customer-data';
import { CustomerDataParser } from './customer-data.parser';

export class CustomerDataParserTxt extends CustomerDataParser {
  protected async parseData(): Promise<void> {
    const rawData = await promises.readFile(this.filePath);
    const data = rawData.toString();

    const lines = data.split('\n');

    this.customerData = lines.map<CustomerData>((line) => {
      const [name, age, cpf] = line.split('\t');

      return { name, age, cpf };
    });
  }
}
