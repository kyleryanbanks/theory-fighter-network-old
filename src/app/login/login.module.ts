import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import {
  LoginPageComponent,
  ForgotPasswordComponent
} from './containers'

import {
  SignInComponent,
  SignUpComponent,
} from './components'

import {
    MatDialogModule,
    MatInputModule,
    MatButtonModule
} from '@angular/material'

const MATERIAL_IMPORTS = [
  MatDialogModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MATERIAL_IMPORTS
  ],
  declarations: [
    LoginPageComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  exports: [
    LoginPageComponent,
    SignInComponent,
    SignUpComponent
  ],
  entryComponents: [
    ForgotPasswordComponent
  ]
})
export class LoginModule { }
