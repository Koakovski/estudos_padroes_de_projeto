import isEmail from 'validator/lib/isEmail';
import { IEmailValidatorFnProtocol } from './email-validator.protocol';

export const emailValidatorFnAdapter: IEmailValidatorFnProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
