import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'app/shared'
import {
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule
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
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent,
    LibSpeedDialComponent
  ],
  entryComponents: [
    AddNotebookPageComponent
  ]
})
export class LibraryModule { }
