import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@tfn/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {
  MdToolbarModule,
  MdButtonModule,
  MdDialogModule,
  MdIconModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule,
  MdAutocompleteModule
} from '@angular/material';
import {
  LibraryPageComponent,
  AddNotebookPageComponent,
  AddShelfPageComponent
 } from './containers';
import {
  ShelfComponent,
  CoverCardComponent,
  NavBarComponent,
  LibSpeedDialComponent
} from './components';
import {
  SmdFabSpeedDialTrigger,
  SmdFabSpeedDialActions,
  SmdFabSpeedDialComponent
} from '@tfn/core/components';

const MATERIAL_IMPORTS = [
  MdToolbarModule,
  MdButtonModule,
  MdDialogModule,
  MdIconModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule,
  MdAutocompleteModule,
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MATERIAL_IMPORTS
  ],
  declarations: [
    NavBarComponent,
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent,
    LibSpeedDialComponent,
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent,
    AddNotebookPageComponent,
    AddShelfPageComponent
  ],
  exports: [
    LibraryPageComponent
  ],
  entryComponents: [
    AddNotebookPageComponent,
    AddShelfPageComponent
  ]
})
export class LibraryModule { }
