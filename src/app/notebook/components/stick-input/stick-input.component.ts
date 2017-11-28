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
    {
      value: '22',
      display: '(DD) Down Down'
    },
    {
      value: '623',
      display: '(DPF) Dragon Punch Forwards'
    },
    {
      value: '421',
      display: '(DPB) Dragon Punch Backwards'
    },
    {
      value: '41236',
      display: '(HCF) Half-Circle Forward'
    },
    {
      value: '53214',
      display: '(HCB) Half-Circle Backward'
    },
    {
      value: '236',
      display: '(QCF) Quarter-Circle Forward'
    },
    {
      value: '214',
      display: '(QCB) Quarter-Circle Backward'
    }
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
    this.selected = 5
  }

  onClick(input) {
    this.selected = input
    this.specialSelect.reset()
  }

  onSelect(input) {
    this.selected = input.value
  }
}
