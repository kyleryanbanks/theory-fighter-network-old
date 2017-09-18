import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@tfn/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MovelistComponent,
  NotebookSidebarComponent,
  NotebookCardComponent
} from './components';
import {
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdExpansionModule,
  MdSidenavModule,
  MdCardModule
} from '@angular/material';
import {
  BasicsPageComponent,
  NormalsPageComponent,
  NotebookInterfaceComponent
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
  MdSidenavModule
]


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MATERIAL_IMPORTS,
    NotebookRoutingModule
  ],
  declarations: [
    MovelistComponent,
    NotebookSidebarComponent,
    BasicsPageComponent,
    NormalsPageComponent,
    NotebookInterfaceComponent,
    NotebookCardComponent
  ],
  exports: []
})
export class NotebookModule { }
