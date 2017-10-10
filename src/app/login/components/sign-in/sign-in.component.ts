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

  constructor(private fb: FormBuilder) {
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
