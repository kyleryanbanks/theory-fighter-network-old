import { Component, OnInit } from '@angular/core'
import {
  AngularFireDatabase
} from 'angularfire2/database'

import { AuthService } from 'app/shared/services'
import { Shelf } from 'app/shared/models/'


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
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.uid = this.auth.currentUserId
    this.shelves = this.db.list(`/users/${this.uid}/shelves/`)
  }

}
