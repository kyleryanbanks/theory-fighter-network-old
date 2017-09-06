import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../shared/material.module';
import { MdDialogModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './sign-in/forgot-password/forgot-password.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdDialogModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [ForgotPasswordComponent]
})
export class LoginModule { }
