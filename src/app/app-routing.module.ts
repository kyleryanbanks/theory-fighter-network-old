import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LoginPageComponent } from './login'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'library',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
