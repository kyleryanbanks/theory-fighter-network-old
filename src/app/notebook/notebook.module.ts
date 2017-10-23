import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'app/shared'
import { NotebookRoutingModule } from './notebook-routing.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import {
  MovelistComponent,
  NotebookSidebarComponent,
  NotebookCardComponent,
  StickInputComponent,
  StickButtonsComponent
} from './components'
import {
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdExpansionModule,
  MdSidenavModule,
  MdCardModule,
  MdTooltipModule,
  MdDialogModule,
  MdGridListModule,
  MdSelectModule,
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
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdExpansionModule,
  MdSidenavModule,
  MdTooltipModule,
  MdDialogModule,
  MdGridListModule,
  MdSelectModule,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MATERIAL_IMPORTS,
    NotebookRoutingModule,
    FlexLayoutModule
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
    StickButtonsComponent,
    StickInputComponent,
    NotebookCardComponent,
    MovelistComponent
  ],
  entryComponents: [
    AddNormalPageComponent
  ]
})
export class NotebookModule { }
