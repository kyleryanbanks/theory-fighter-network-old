import { Component, Input, OnInit } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseObjectObservable
} from 'angularfire2/database';

@Component({
  selector: 'tfn-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.scss']
})
export class CoverCardComponent implements OnInit {
  @Input() notebook: any
  notebookRef: FirebaseObjectObservable<any>
  favorite: Boolean

  constructor(
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.notebookRef = this.db.object(`mvci/notebooks/${this.notebook}`)
    }

  onClick() {
    console.log('card clicked')
  }

  onFavorite() {
    console.log('favorite is now ' + this.favorite)
    this.favorite = !this.favorite
  }

  onBookmark() {
    console.log('bookmark clicked')
  }

  onShare() {
    console.log('share clicked')
  }
}
