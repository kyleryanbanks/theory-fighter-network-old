import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core'

@Component({
  selector: 'tfn-shelf',
  template: `
  <span class="mat-title">{{title}}</span>
  <div>
    <tfn-cover-card
      *ngFor="let notebook of notebooks"
      (cover)="onCover($event)"
      (favorite)="onFavorite($event)"
      (unfavorite)="onUnfavorite($event)"
      (info)="onInfo($event)"
      (share)="onShare($event)"
      [notebook]="notebook"></tfn-cover-card>
  </div>
  `,
  styles: [`
    section {
      padding: 1rem;
    }

    div {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(auto-fit, 150px);
        justify-content: center;
    }
  `]
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
