import {
  Component,
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

  @Output() signIn = new EventEmitter()
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

  onForgotPassword() {
    this.forgotPassword.emit(this.signInForm.value.email)
  }

  onSignIn() {
    if (this.signInForm.valid) {
      this.signIn.emit(this.signInForm.value)
    } else {
      this.error = 'Please provide missing information and try again.'
    }
  }
}
