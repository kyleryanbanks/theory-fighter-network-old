import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tfn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: String

  constructor() { }

  ngOnInit() {
  }

}
