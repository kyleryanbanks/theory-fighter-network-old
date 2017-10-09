import {
  Component,
  EventEmitter,
  Output
} from '@angular/core'


@Component({
  selector: 'tfn-lib-speed-dial',
  template: `
    <smd-fab-speed-dial #myFab (mouseenter)="myFab.open = true" (mouseleave)="myFab.open = false">
      <smd-fab-trigger spin="true">
          <button md-fab (click)="onAddNotebook()"
          mdTooltip="New Notebook" mdTooltipPosition="before"><md-icon>note_add</md-icon></button>
      </smd-fab-trigger>

      <smd-fab-actions>
          <button md-mini-fab (click)="onAddShelf()"
          mdTooltip="New Shelf" mdTooltipPosition="before"><md-icon>library_add</md-icon></button>
          <button md-mini-fab (click)="onAddTeam()"
          mdTooltip="New Team Notebook" mdTooltipPosition="before"><md-icon>group_add</md-icon></button>
      </smd-fab-actions>
    </smd-fab-speed-dial>
  `
})
export class LibSpeedDialComponent {

  @Output() addNotebook = new EventEmitter
  @Output() addShelf = new EventEmitter
  @Output() addTeam = new EventEmitter

  constructor() { }

  onAddNotebook() {
    this.addNotebook.emit()
  }

  onAddShelf() {
    this.addShelf.emit()
  }

  onAddTeam() {
    this.addTeam.emit()
  }
}
