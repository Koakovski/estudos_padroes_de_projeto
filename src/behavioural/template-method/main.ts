import { resolve } from 'path';
import { CustomerDataParserTxt } from './customer-data.parser-txt';
import { CustomerDataParserJSON } from './customer-data.parser-json';

async function run() {
  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  const customerDataTxt = customerDataParserTxt.getCustomerData();

  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJSON = new CustomerDataParserJSON(filePathJson);
  await customerDataParserJSON.fixCustomerData();
  const customerDataJSON = customerDataParserTxt.getCustomerData();

  console.log({ customerDataTxt, customerDataJSON });
}

run();
