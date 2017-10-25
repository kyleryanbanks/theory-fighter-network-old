import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material'
import {
  ComingSoonComponent,
  NavBarComponent,
  SmdFabSpeedDialTrigger,
  SmdFabSpeedDialActions,
  SmdFabSpeedDialComponent
} from './components'

const MATERIAL_IMPORTS = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
]


@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
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
export class SharedModule { }
