import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@tfn/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MovelistComponent,
  NotebookSidebarComponent,
  NotebookCardComponent,
  StickInputComponent,
} from './components';
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
} from '@angular/material';
import {
  BasicsPageComponent,
  NormalsPageComponent,
  NotebookInterfaceComponent,
  AddNormalPageComponent
} from './containers';
import {
  ComingSoonComponent
} from '@tfn/core/components';
import { NotebookRoutingModule } from './notebook-routing.module';

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
    CoreModule,
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
    StickInputComponent
  ],
  entryComponents: [
    AddNormalPageComponent
  ]
})
export class NotebookModule { }
