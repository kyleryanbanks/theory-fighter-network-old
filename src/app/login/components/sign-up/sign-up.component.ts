import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'
import { PasswordValidation } from 'app/shared/utils'

@Component({
  selector: 'tfn-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  @Output() signUp = new EventEmitter
  @Input() error: string
  signUpForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validators: PasswordValidation.MatchPassword
    })
  }

  onSignUp() {
    if (this.signUpForm.valid) {
      this.signUp.emit(this.signUpForm.value)
    } else {
      this.error = 'Please provide missing information and try again.'
    }
  }
}
