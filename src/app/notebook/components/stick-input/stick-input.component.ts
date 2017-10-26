import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'tfn-stick-input',
  templateUrl: './stick-input.component.html',
  styleUrls: ['./stick-input.component.css']
})
export class StickInputComponent implements OnInit {

  @Output() direction = new EventEmitter
  inputs = [7, 8, 9, 4, 5, 6, 1, 2, 3]
  specials = [
    'Down Down',
    'Dragon Punch Forward',
    'Dragon Punch Backward',
    'Half-Circle Forward',
    'Half-Circle Backward',
    'Quarter-Circle Forward',
    'Quarter-Circle Backward'
  ]
  specialSelect = new FormControl

  _selected: number
  set selected(input) {
    this._selected = input
    this.direction.emit(input)
  }
  get selected() {
    return this._selected
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(input) {
    this.selected = input
    this.specialSelect.reset()
  }

  onSelect(input) {
    this.selected = input.value
  }
}
