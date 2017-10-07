import { NgModule } from '@angular/core'
import { createLab } from 'component-lab'

import {
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdExpansionModule,
  MdSidenavModule,
  MdCardModule,
  MdTooltipModule,
  MdDialogModule,
  MdGridListModule,
  MdSelectModule,
  MdInputModule,
} from '@angular/material'

const MATERIAL_IMPORTS = [
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdExpansionModule,
  MdSidenavModule,
  MdCardModule,
  MdTooltipModule,
  MdDialogModule,
  MdGridListModule,
  MdSelectModule,
  MdInputModule,
]

import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import {
  SignInComponent,
  SignUpComponent
} from 'app/login/components'

declare var require: any

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  exports: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MATERIAL_IMPORTS,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
})
export class LabModule { }

createLab({
  /**
  * NgModule to import. All components and pipes must be exported
  * by this module to be useable in your experiments
  */
  ngModule: LabModule,

  loadExperiments() {
    /**
     * Function that returns an array of experiments.
     *
     * Here is an example using webpack's `require.context` to
     * load all modules ending in `.exp.ts` and returning thier
     * default exports as an array:
     */
    const context = require.context('.', true, /\.exp\.ts/)
    return context.keys().map(context).map(mod => mod.default)
  }
})
