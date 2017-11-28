import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'tfn-stick-buttons',
  templateUrl: './stick-buttons.component.html',
  styleUrls: ['./stick-buttons.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StickButtonsComponent),
      multi: true
    }
  ]
})
export class StickButtonsComponent implements OnInit, ControlValueAccessor {
  @Input() buttons: string[]
  @Output() command = new EventEmitter()
  buttonStates: { [button: string]: boolean } = {}
  _command: string

  constructor() { }

  ngOnInit() {
    for (const button of this.buttons) {
      this.buttonStates[button] = false
    }
  }

  toggleButton(label: string) {
    this.buttonStates[label] = !this.buttonStates[label]
    this.updateCommand()
  }

  updateCommand() {
    this._command = ''
    for (const button of this.buttons) {
      if (this.buttonStates[button]) {
        this._command += this._command ? '+' + button : button
      }
    }
    this.command.emit(this._command)
  }

  writeValue(command: string) {
    this._command = command
  }

  registerOnChange() { }

  registerOnTouched() { }

  setDisabledState?() { }

}
