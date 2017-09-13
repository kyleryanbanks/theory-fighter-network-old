import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tfn-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.scss']
})
export class CoverCardComponent implements OnInit {
  @Input() notebook: any
  favorite: Boolean

  constructor() { }

  ngOnInit() {
    if (this.notebook) {
      this.favorite = this.notebook.favorite
    }
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
