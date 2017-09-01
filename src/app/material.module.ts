import { NgModule } from '@angular/core';
import {
  MdSidenavModule,
  MdButtonModule,
  MdListModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
  ]
})
export class MaterialModule { }
