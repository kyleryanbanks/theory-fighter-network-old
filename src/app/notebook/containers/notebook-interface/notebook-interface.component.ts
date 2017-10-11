import { Component, OnInit } from '@angular/core'
import { MdDialog } from '@angular/material'
import { AddNormalPageComponent } from '../add-normal-page/add-normal-page.component'

@Component({
  selector: 'tfn-notebook-interface',
  templateUrl: './notebook-interface.component.html',
  styleUrls: ['./notebook-interface.component.scss']
})
export class NotebookInterfaceComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  addNormal() {
    this.dialog.open(AddNormalPageComponent)
  }
}
