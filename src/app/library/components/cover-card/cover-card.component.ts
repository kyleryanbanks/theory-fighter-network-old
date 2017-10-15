import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core'

@Component({
  selector: 'tfn-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.css']
})
export class CoverCardComponent {
  @Output() cover = new EventEmitter
  @Output() favorite = new EventEmitter
  @Output() unfavorite = new EventEmitter
  @Output() info = new EventEmitter
  @Output() share = new EventEmitter
  @Input() notebook: any
  favorited = true

  constructor() { }

  onCover() {
    this.cover.emit(this.notebook.id)
  }

  onFavorite() {
    if (this.favorited) {
      this.unfavorite.emit(this.notebook.id)
    } else {
      this.favorite.emit(this.notebook.id)
    }
    this.favorited = !this.favorited
  }

  onInfo() {
    this.info.emit(this.notebook.id)
  }

  onShare() {
    this.share.emit(this.notebook.id)
  }
}
