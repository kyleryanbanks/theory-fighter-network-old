import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core'

@Component({
  selector: 'tfn-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent {
  @Input() title: string
  @Input() notebooks: any[]
  @Output() favorite = new EventEmitter
  @Output() unfavorite = new EventEmitter
  @Output() info = new EventEmitter
  @Output() share = new EventEmitter
  @Output() cover = new EventEmitter

  constructor() { }

  onCover(event) {
    this.cover.emit(event)
  }

  onFavorite(event) {
      this.favorite.emit(event)
  }

  onUnfavorite(event) {
    this.unfavorite.emit(event)
  }

  onInfo(event) {
    this.info.emit(event)
  }

  onShare(event) {
    this.share.emit(event)
  }
}
