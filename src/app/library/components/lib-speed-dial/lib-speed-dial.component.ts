import {
  Component,
  EventEmitter,
  Output
} from '@angular/core'


@Component({
  selector: 'tfn-lib-speed-dial',
  templateUrl: './lib-speed-dial.component.html',
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
