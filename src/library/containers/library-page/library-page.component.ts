import { Component, OnInit } from '@angular/core';

import { shelves, notebooks } from '@tfn/core/assets';

@Component({
  selector: 'tfn-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  shelves: any[] = shelves

  constructor() { }

  ngOnInit() {
  }

}
