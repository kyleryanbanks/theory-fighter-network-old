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
  @Output() click = new EventEmitter
  @Output() favorite = new EventEmitter
  @Output() info = new EventEmitter
  @Output() share = new EventEmitter
  @Input() notebook: any
  favorited = true

  constructor() { }

  onClick() {
    this.click.emit()
  }

  onFavorite() {
    this.favorited = !this.favorited
    this.favorite.emit(this.favorited)
  }

  onInfo() {
    this.info.emit()
  }

  onShare() {
    this.info.emit()
  }
}
