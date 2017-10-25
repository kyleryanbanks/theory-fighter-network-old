import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { AddNormalPageComponent } from '../add-normal-page/add-normal-page.component'

@Component({
  selector: 'tfn-notebook-interface',
  templateUrl: './notebook-interface.component.html',
  styleUrls: ['./notebook-interface.component.scss']
})
export class NotebookInterfaceComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addNormal() {
    this.dialog.open(AddNormalPageComponent)
  }
}
