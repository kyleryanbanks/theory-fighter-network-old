import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core'

@Component({
  selector: 'tfn-cover-card',
  template: `
    <mat-card>
      <div (click)="onCover()">
        <img mat-card-image src='assets/images/mvci.png' alt="Notebook Cover Art">
        <div class="banner bg-primary">
          <div class="title">{{ notebook.title }}</div>
        </div>
      </div>
      <mat-card-actions>
        <button mat-icon-button [color]="favorited? 'warn': null" (click)="onFavorite()">
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button (click)="onInfo()">
          <mat-icon>info</mat-icon>
        </button>
        <button mat-icon-button (click)="onShare()">
          <mat-icon>share</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
      width: 150px;
      height: 255px;
      border-radius: 5px;
      padding: 0 !important;
      margin: 0 !important;
      cursor: pointer;
    }

    img {
        height: 150px;
        width: auto;
        padding: .5rem;
        margin: 0 auto !important;
        border-radius: 15px;
    }

    mat-card-actions {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .banner {
        height: 50px;
        width: 150px;
    }

    .title {
        text-align: center;
        font-size: 14px;
        padding-top: .5rem;
    }
  `]
})
export class CoverCardComponent {
  @Output() cover = new EventEmitter
  @Output() favorite = new EventEmitter
  @Output() unfavorite = new EventEmitter
  @Output() info = new EventEmitter
  @Output() share = new EventEmitter
  @Input() notebook: any
  favorited = false

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
