import { Component, Input, OnInit } from '@angular/core';

import {
  FirebaseObjectObservable,
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

@Component({
  selector: 'tfn-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  @Input() shelf: any
  shelf$: FirebaseObjectObservable<any>
  notebooks$: FirebaseListObservable<any>

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    if (this.shelf && this.shelf.query) {
      this.notebooks$ = this.db.list(`/mvci/notebooks/`, this.shelf.query)
    } else {
      this.notebooks$ = this.db.list('/mvci/notebooks')
    }
  }

}
