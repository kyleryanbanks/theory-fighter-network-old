import { Component, Input, OnInit } from '@angular/core'
import { MdDialog } from '@angular/material'
import { NotebookInfoPageComponent } from 'app/library/containers'
import { ComingSoonComponent } from 'app/shared/components'
import { Router } from '@angular/router'
import {
  AngularFireDatabase
} from 'angularfire2/database'

@Component({
  selector: 'tfn-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.css']
})
export class CoverCardComponent implements OnInit {
  @Input() notebook: any
  favorite: Boolean

  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog,
    private router: Router
  ) { }

  ngOnInit() {
    }

  onClick() {
    this.router.navigate([`notebook/${this.notebook.$key}`])
  }

  onFavorite() {
    console.log('favorite is now ' + this.favorite)
    this.favorite = !this.favorite
  }

  onInfo() {
    this.dialog.open(ComingSoonComponent)
  }

  onShare() {
    this.dialog.open(ComingSoonComponent)
  }
}
