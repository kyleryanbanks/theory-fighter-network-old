import {
  Component,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'
import { MdDialog } from '@angular/material'

import { AuthService } from 'app/shared/services'
import { ForgotPasswordComponent } from 'app/login/containers/forgot-password'

@Component({
  selector: 'tfn-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signInError = ''
  signUpError = ''

  constructor(
    private auth: AuthService,
    private router: Router,
    private dialog: MdDialog
  ) {}

  ngOnInit() {
    if (this.auth.authenticated) {
      this.router.navigate(['/library'])
    }
  }

  onSignIn(signInValues: { [key: string]: string }) {
    const { email, password, confirmPassword } = signInValues
    this.auth.emailSignIn(email, password)
      .then(auth => this.router.navigate(['library']))
      .catch(({message}) => this.signInError = message)
  }

  onForgotPassword(email: string) {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      data: { email: email }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.auth.forgotPassword(result).then(
          () => this.signInError = 'An email was sent to the provided account if it exists.')
      }
    })
  }

  onSignUp(signUpValues: { [key: string]: string }) {
    const { email, password } = signUpValues
    this.auth.emailSignUp(email, password)
      .then(auth => this.router.navigate(['library']))
      .catch(({message}) => this.signUpError = message)
   }

}
