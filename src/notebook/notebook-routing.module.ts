import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NotebookInterfaceComponent,
  NormalsPageComponent,
  BasicsPageComponent,
} from './containers'
import { ComingSoonComponent } from '@tfn/core/components';
import { AuthGuard } from '@tfn/core/guards';

export const routes: Routes = [
  {
    path: 'notebook/:notebookid',
    component: NotebookInterfaceComponent,
    children: [
      {
        path: '',
        redirectTo: 'basics',
        pathMatch: 'full'
      },
      {
        path: 'normals',
        component: NormalsPageComponent,
        canActivate: [ AuthGuard ],
        children: [
          {
            path: ':moveid',
            component: NormalsPageComponent
          }
        ]
      },
      {
        path: 'basics',
        component: BasicsPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: '**',
        redirectTo: 'coming-soon'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotebookRoutingModule { }
