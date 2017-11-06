import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'tfn-add-normal-page',
  templateUrl: './add-normal-page.component.html',
  styleUrls: ['./add-normal-page.component.scss']
})
export class AddNormalPageComponent implements OnInit {

  form = this.fb.group({
    jumping: false,
    followups: false,
    moveType: 'Normals'
  })
  moveTypes = [
    'Normals',
    'Specials',
    'Supers',
  ]
  input = '...'
  direction = ''
  command = ''

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  onDirection(direction) {
    this.direction = direction
  }

  onCommand(command) {
    this.command = command
  }
}
