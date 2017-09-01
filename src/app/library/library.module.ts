import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library.component';
import { ShelfComponent } from './shelf/shelf.component';
import { CoverCardComponent } from './cover-card/cover-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoverCardComponent,
    LibraryComponent,
    ShelfComponent],
  exports: [LibraryComponent]
})
export class LibraryModule { }
