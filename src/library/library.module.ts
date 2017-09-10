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
  MdIconModule
} from '@angular/material';

const MATERIAL_IMPORTS = [
  MdToolbarModule,
  MdButtonModule,
  MdIconModule
]

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    MATERIAL_IMPORTS
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
