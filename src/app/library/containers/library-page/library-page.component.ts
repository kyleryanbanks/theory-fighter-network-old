import {
  Component,
  OnInit
} from '@angular/core'
import { MdDialog } from '@angular/material'

import { AddNotebookPageComponent } from '../add-notebook-page/add-notebook-page.component'
import { ComingSoonComponent } from 'app/shared/components'
import { AngularFireDatabase } from 'angularfire2/database'

import { AuthService } from 'app/shared/services'


@Component({
  selector: 'tfn-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  uid: String
  shelves: any


  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.uid = this.auth.currentUserId
    this.shelves = this.db.list(`/users/${this.uid}/shelves/`)
  }

  onAddNotebook() {
    this.dialog.open(AddNotebookPageComponent)
  }

  onAddShelf() {
    this.dialog.open(ComingSoonComponent)
  }

  onAddTeam() {
    this.dialog.open(ComingSoonComponent)
  }
}
