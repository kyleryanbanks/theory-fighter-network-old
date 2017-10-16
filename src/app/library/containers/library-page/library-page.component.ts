import {
  Component,
  OnInit
} from '@angular/core'
import { Router } from '@angular/router'
import { MdDialog } from '@angular/material'

import { AddNotebookPageComponent } from '../add-notebook-page/add-notebook-page.component'
import { ComingSoonComponent } from 'app/shared/components'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs/observable'

import { AuthService } from 'app/shared/services'
import { Notebook } from 'app/shared/models'


@Component({
  selector: 'tfn-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  uid: String
  recent = []
  favorites = []
  notebooksCollection: AngularFirestoreCollection<Notebook>
  notebooks: Observable<Notebook[]>

  constructor(
    private afs: AngularFirestore,
    private dialog: MdDialog,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.notebooksCollection = this.afs.collection('notebooks')
    this.notebooks = this.notebooksCollection.valueChanges()
    this.uid = this.auth.currentUserId
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

  onCover(event) {
    this.router.navigate(['notebook', event])
  }

  onFavorite(event) { }

  onUnfavorite(event) { }

  onInfo(event) {
    this.dialog.open(ComingSoonComponent)
  }

  onShare(event) {
    this.dialog.open(ComingSoonComponent)
  }
}
