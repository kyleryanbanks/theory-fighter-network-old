import {
  Component,
  EventEmitter,
  Output
} from '@angular/core'

@Component({
  selector: 'tfn-lib-speed-dial',
  template: `
    <button mat-fab (click)="onAddNotebook()"
    matTooltip="Add Notebook" matTooltipPosition="before"><mat-icon>note_add</mat-icon></button>
  `,
})
export class LibSpeedDialComponent {

  @Output() addNotebook = new EventEmitter

  constructor() { }

  onAddNotebook() {
    this.addNotebook.emit()
  }
}
