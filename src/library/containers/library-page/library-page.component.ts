import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import { Shelf } from '@tfn/core/models/';


@Component({
  selector: 'tfn-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  shelves: Shelf[]

  constructor(db: AngularFireDatabase) { }

  ngOnInit() {
  }

}
