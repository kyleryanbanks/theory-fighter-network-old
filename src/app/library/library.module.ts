import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'app/shared'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import {
  MdToolbarModule,
  MdButtonModule,
  MdDialogModule,
  MdIconModule,
  MdCardModule,
  MdTooltipModule,
  MdInputModule,
  MdAutocompleteModule
} from '@angular/material'
import {
  LibraryPageComponent,
  AddNotebookPageComponent,
 } from './containers'
import {
  ShelfComponent,
  CoverCardComponent,
  LibSpeedDialComponent
} from './components'
import { LibraryRoutingModule } from './library-routing.module'

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
    SharedModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
    MATERIAL_IMPORTS
  ],
  declarations: [
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent,
    LibSpeedDialComponent,
    AddNotebookPageComponent,
  ],
  exports: [
    LibraryPageComponent
  ],
  entryComponents: [
    AddNotebookPageComponent
  ]
})
export class LibraryModule { }
