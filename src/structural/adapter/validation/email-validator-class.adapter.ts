import isEmail from 'validator/lib/isEmail';
import { IEmailValidator } from './email-validator.protocol';

export class EmailValidatorClassAdapter implements IEmailValidator {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
