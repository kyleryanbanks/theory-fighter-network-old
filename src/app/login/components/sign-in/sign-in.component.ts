import {
  Component,
  Inject,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'
import { MdDialog } from '@angular/material'
import { Router } from '@angular/router'

import { AuthService } from 'app/shared/services'
import { ForgotPasswordComponent } from 'app/login/containers'

@Component({
  selector: 'tfn-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  @Output() signin = new EventEmitter()
  @Output() forgotPassword = new EventEmitter()
  @Input() error: string
  signInForm: FormGroup

  constructor(private fb: FormBuilder,
              private dialog: MdDialog) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onForgotPassword(): void {
    this.forgotPassword.emit(this.signInForm.value.email)
    // const dialogRef = this.dialog.open(ForgotPasswordComponent, {
    //   data: { email: this.signInForm.value.email }
    // })

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.forgotPassword.emit(result)
    //     this.auth.forgotPassword(result)
    //       .then(() => this.errorMsg = 'An email was sent to the provided account if it exists.')
    //   }
    // })
  }

  onSignIn(): void {
    if (this.signInForm.valid) {
      this.signin.emit(this.signInForm.value)
    // const { email, password } = this.signInForm.value
    // this.auth.emailSignIn(email, password)
    //   .then(auth => this.router.navigate(['library']))
    //   .catch(({message}) => this.errorMsg = message)
    } else {
      this.error = 'Please provide missing information and try again.'
    }
  }
}
