import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'app/shared'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { EFFECTS } from './effects'
import { featureKey, reducer } from './reducers/library.reducer'
import {
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatAutocompleteModule,
} from '@angular/material'
import { LibraryPageComponent } from './containers'
import {
  AddNotebookComponent,
  CoverCardComponent,
  LibSpeedDialComponent,
  ShelfComponent,
} from './components'
import { LibraryRoutingModule } from './library.routing'

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
    StoreModule.forFeature(featureKey, reducer),
    EffectsModule.forFeature(EFFECTS),
    SharedModule,
    ReactiveFormsModule,
    LibraryRoutingModule,
    MATERIAL_IMPORTS,
  ],
  declarations: [
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent,
    LibSpeedDialComponent,
    AddNotebookComponent,
  ],
  exports: [
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent,
    LibSpeedDialComponent,
  ],
  entryComponents: [AddNotebookComponent],
})
export class LibraryModule {}
