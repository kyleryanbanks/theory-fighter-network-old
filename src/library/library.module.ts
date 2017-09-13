import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@tfn/core';
import { LibraryPageComponent } from './containers';
import {
  ShelfComponent,
  CoverCardComponent,
  NavBarComponent
} from './components';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdCardModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {AngularFireDatabaseModule } from 'angularfire2/database';

const MATERIAL_IMPORTS = [
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdCardModule
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FlexLayoutModule,
    MATERIAL_IMPORTS,
    AngularFireDatabaseModule
  ],
  declarations: [
    NavBarComponent,
    LibraryPageComponent,
    CoverCardComponent,
    ShelfComponent
  ],
  exports: [LibraryPageComponent]
})
export class LibraryModule { }
