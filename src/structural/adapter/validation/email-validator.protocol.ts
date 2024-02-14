export interface IEmailValidator {
  isEmail: IEmailValidatorFnProtocol;
}

export interface IEmailValidatorFnProtocol {
  (value: string): boolean;
}
