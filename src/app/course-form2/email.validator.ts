import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';
@Directive({
  selector: '[validateEmail]',
  standalone: true,
  providers: [
    { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true },
  ],
})
export class EmailValidator implements Validator {
  validate(control: FormControl): any {
    const emailRegexp =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailRegexp.test(control.value)) {
      return { emailInvalid: 'Email is invalid' };
    }
    return null;
  }
}
