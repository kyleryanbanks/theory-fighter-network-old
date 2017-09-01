import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [],
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
