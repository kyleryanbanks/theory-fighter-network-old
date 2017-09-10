import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '@tfn/core/services';
import { PasswordValidation } from '@tfn/core/utils';

@Component({
  selector: 'tfn-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup
  errorMsg: String

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: PasswordValidation.MatchPassword
    })
  }

  onSignUp(): void {

    if (this.signUpForm.valid) {
      const { email, password, confirmPassword } = this.signUpForm.value
      this.auth.emailSignUp(email, password)
        .then(auth => this.router.navigate(['library']))
        .catch(({message}) => this.errorMsg = message)
    } else {
      this.errorMsg = 'Please provide missing information and try again.'
    }
  }
}
