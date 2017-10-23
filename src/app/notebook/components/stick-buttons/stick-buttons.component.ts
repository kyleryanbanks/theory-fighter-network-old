import { Component, OnInit, Input, forwardRef } from '@angular/core'
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
  buttonStates: { [button: string]: boolean } = {}
  command: string

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
    this.command = ''
    for (const button of this.buttons) {
      if (this.buttonStates[button]) {
        this.command += this.command ? '+' + button : button
      }
    }
    this.writeValue(this.command)
  }

  writeValue(command: string) {
    this.command = command
  }

  registerOnChange() { }

  registerOnTouched() { }

  setDisabledState?() { }

}
