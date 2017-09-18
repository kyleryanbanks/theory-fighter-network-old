import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryPageComponent } from './library';
import { LoginPageComponent } from './login';
import { NotebookModule } from './notebook';
import { AuthGuard } from '@tfn/core/guards';

import { ComingSoonComponent } from '@tfn/core/components';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
