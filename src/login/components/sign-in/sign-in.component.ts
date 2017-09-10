import {
  Component,
  Inject
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from '@tfn/core/services';
import { ForgotPasswordComponent } from './components';

@Component({
  selector: 'tfn-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup
  errorMsg: String

  constructor(private fb: FormBuilder,
              private dialog: MdDialog,
              private auth: AuthService,
              private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  forgotPassword(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      data: { email: this.signInForm.value.email }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.auth.forgotPassword(result)
          .then(() => this.errorMsg = 'An email was sent to the provided account if it exists.')
      }
    })
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
    const { email, password } = this.signInForm.value
    this.auth.emailSignIn(email, password)
      .then(auth => this.router.navigate(['library']))
      .catch(({message}) => this.errorMsg = message)
    } else {
      this.errorMsg = 'Please provide missing information and try again.'
    }
  }
}
