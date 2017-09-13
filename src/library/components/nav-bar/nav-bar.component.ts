import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@tfn/core/services';

@Component({
  selector: 'tfn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() title: String

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.signOut()
  }
}
