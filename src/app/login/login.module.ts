import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  LoginPageComponent,
  ForgotPasswordComponent
} from './containers'

import {
  SignInComponent,
  SignUpComponent,
} from './components'

import {
    MdDialogModule,
    MdInputModule,
    MdButtonModule
} from '@angular/material'

const MATERIAL_IMPORTS = [
  MdDialogModule,
  MdInputModule,
  MdButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
