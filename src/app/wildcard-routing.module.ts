import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NotFoundComponent } from 'app/shared/components'

const routes: Routes = [
  {
    path: '**',
    component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
      NotFoundComponent
  ],
  exports: [RouterModule]
})
export class WildcardRoutingModule { }
