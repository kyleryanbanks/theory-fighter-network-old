import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule
} from '@angular/material';
import {
  ComingSoonComponent,
  NavBarComponent,
  SmdFabSpeedDialTrigger,
  SmdFabSpeedDialActions,
  SmdFabSpeedDialComponent
} from './components';

const MATERIAL_IMPORTS = [
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
  MdListModule
]


@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    MATERIAL_IMPORTS
  ],
  declarations: [
    ComingSoonComponent,
    NavBarComponent,
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent
  ],
  exports: [
    ComingSoonComponent,
    NavBarComponent,
    SmdFabSpeedDialTrigger,
    SmdFabSpeedDialActions,
    SmdFabSpeedDialComponent
    ],
  entryComponents: [
    ComingSoonComponent
  ]
})
export class CoreModule { }
