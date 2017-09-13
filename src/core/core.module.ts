import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class CoreModule { }
