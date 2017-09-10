import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MdDialogModule,
    MdInputModule,
    MdButtonModule
} from '@angular/material';

import { LoginPageComponent } from './containers';

import {
  SignInComponent,
  SignUpComponent,
  ForgotPasswordComponent
} from './components';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule
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
  entryComponents: [ForgotPasswordComponent]
})
export class LoginModule { }
