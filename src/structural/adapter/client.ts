import { EmailValidatorClassAdapter } from './validation/email-validator-class.adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn.adapter';
import { IEmailValidatorFnProtocol } from './validation/email-validator.protocol';

function validateEmail(
  emailValidator: IEmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('É válido');
  } else {
    console.log('É inválido');
  }
}

const emailValdator = new EmailValidatorClassAdapter();
const invalidEmail = 'higoremail.com';

validateEmail(emailValdator.isEmail, invalidEmail);
validateEmail(emailValidatorFnAdapter, invalidEmail);

const validEmail = 'higor@email.com';
validateEmail(emailValdator.isEmail, invalidEmail);
validateEmail(emailValidatorFnAdapter, invalidEmail);
