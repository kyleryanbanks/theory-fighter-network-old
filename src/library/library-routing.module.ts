import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LibraryPageComponent} from 'library';
import {AuthGuard} from 'core';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryPageComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
