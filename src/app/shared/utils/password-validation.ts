import { FormGroup } from '@angular/forms'


export class PasswordValidation {

  static passwordMatchValidator(fg: FormGroup) {
      return fg.get('password').value === fg.get('confirmPassword').value
        ? null : {'mismatch': true}
  }
}

