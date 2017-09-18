import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ComingSoonComponent } from '@tfn/core/components';

import {
  AddNotebookPageComponent,
  AddShelfPageComponent
} from '@tfn/library/containers';


@Component({
  selector: 'tfn-lib-speed-dial',
  templateUrl: './lib-speed-dial.component.html',
  styleUrls: ['./lib-speed-dial.component.scss']
})
export class LibSpeedDialComponent {

  constructor(
    private dialog: MdDialog,
  ) {}

  addNotebook() {
    this.dialog.open(AddNotebookPageComponent)
  }

  addShelf() {
    this.dialog.open(ComingSoonComponent)
  }

  addTeam() {
    this.dialog.open(ComingSoonComponent)
  }
}
