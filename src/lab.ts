import { NgModule } from '@angular/core'
import { createLab } from 'component-lab'

import { CommonModule } from '@angular/common'

import { ReactiveFormsModule } from '@angular/forms'

import { LoginModule } from 'app/login'
import { LibraryModule } from 'app/library'
import { NotebookModule } from 'app/notebook'
import { SharedModule } from 'app/shared'

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material'

const MATERIAL_IMPORTS = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatSidenavModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
]

declare var require: any

@NgModule({
  imports: [
    MATERIAL_IMPORTS,
    ReactiveFormsModule,
    SharedModule,
    NotebookModule,
    LibraryModule,
    LoginModule
  ],
  declarations: [ ],
  exports: [
    SharedModule,
    NotebookModule,
    LibraryModule,
    LoginModule
  ],
  providers: [
  ]
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
