import { Component, OnInit} from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Router } from '@angular/router'

import { AuthService } from 'app/shared/services'

@Component({
  selector: 'tfn-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.auth.authenticated) {
      this.router.navigate(['/library'])
    }
  }
}
