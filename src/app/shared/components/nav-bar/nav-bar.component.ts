import { Component, Input, OnInit } from '@angular/core'

import { AuthService } from 'app/shared/services'

@Component({
  selector: 'tfn-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() title: String
  @Input() initOpen: Boolean = false

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.signOut()
  }
}
