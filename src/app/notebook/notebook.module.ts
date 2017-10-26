import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared'
import { NotebookRoutingModule } from './notebook-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MovelistComponent,
  NotebookSidebarComponent,
  NotebookCardComponent,
  StickInputComponent,
  StickButtonsComponent
} from './components'
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule,
} from '@angular/material'
import {
  BasicsPageComponent,
  NormalsPageComponent,
  NotebookInterfaceComponent,
  AddNormalPageComponent
} from './containers'
import {
  ComingSoonComponent
} from 'app/shared/components'

const MATERIAL_IMPORTS = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MATERIAL_IMPORTS,
    NotebookRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MovelistComponent,
    NotebookSidebarComponent,
    BasicsPageComponent,
    NormalsPageComponent,
    NotebookInterfaceComponent,
    NotebookCardComponent,
    AddNormalPageComponent,
    StickInputComponent,
    StickButtonsComponent
  ],
  exports: [
    StickInputComponent,
    NotebookCardComponent,
    MovelistComponent,
    StickButtonsComponent
  ],
  entryComponents: [
    AddNormalPageComponent
  ]
})
export class NotebookModule { }
