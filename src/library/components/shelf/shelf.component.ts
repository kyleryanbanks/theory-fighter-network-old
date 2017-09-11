import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tfn-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  @Input() notebooks: any[]

  constructor() { }

  ngOnInit() {
  }

}
