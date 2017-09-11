import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tfn-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.scss']
})
export class CoverCardComponent implements OnInit {
  @Input() notebook: Object

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('card clicked')
  }

  onFavorite() {
    console.log('fav clicked')
  }

  onBookmark() {
    console.log('bookmark clicked')
  }

  onShare() {
    console.log('share clicked')
  }
}
