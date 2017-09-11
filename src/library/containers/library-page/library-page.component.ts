import { Component, OnInit } from '@angular/core';

const notebooks = [
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
  {title: 'Marvel vs. Capcom: Infinite'},
]

@Component({
  selector: 'tfn-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {
  data: any[] = notebooks

  constructor() { }

  ngOnInit() {
  }

}
