import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialog } from '@angular/material';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'tfn-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup

  constructor(private fb: FormBuilder, private dialog: MdDialog) {
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
      this.forgotPassword = result
    })
  }

  signIn(): void {
    console.log(this.signInForm)
  }
}
