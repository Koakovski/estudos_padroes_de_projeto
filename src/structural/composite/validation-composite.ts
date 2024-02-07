export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmailLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateCompanyPrefixLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return value.startsWith('company');
  }
}

export class ValidationComposite extends ValidationComponent {
  private children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    return !this.children.some(
      (validation) => validation.validate(value) === false,
    );
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((product) => this.children.push(product));
  }
}

const validateEmailLeaf = new ValidateEmailLeaf();
const validateCompanyPrefixLeaf = new ValidateCompanyPrefixLeaf();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmailLeaf, validateCompanyPrefixLeaf);

const invalidEmail1 = 'company';
const invalidEmail2 = 'company.com';
const invalidEmail3 = 'higor@email.com';
const validEmail = 'companyhigor@email.com';

console.log(invalidEmail1, validationComposite.validate(invalidEmail1));
console.log(invalidEmail2, validationComposite.validate(invalidEmail2));
console.log(invalidEmail3, validationComposite.validate(invalidEmail3));
console.log(validEmail, validationComposite.validate(validEmail));
