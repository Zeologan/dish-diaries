import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailFormatValidator(): ValidatorFn {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    return email && !emailPattern.test(email) ? { invalidEmail: true } : null;
  };
}