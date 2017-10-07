import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { LibraryPageComponent } from './containers'
import { AuthGuard } from 'app/shared/guards'

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
