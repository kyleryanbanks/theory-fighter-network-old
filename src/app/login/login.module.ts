import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
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
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MATERIAL_IMPORTS
  ],
  declarations: [
    LoginPageComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  exports: [
    LoginPageComponent
  ],
  entryComponents: [
    ForgotPasswordComponent
  ]
})
export class LoginModule { }
