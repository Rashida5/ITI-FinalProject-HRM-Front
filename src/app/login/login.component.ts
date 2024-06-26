import { Component, OnInit } from '@angular/core';
import { KeycloakAuthService } from '../keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  username = '';

  constructor(private auth: KeycloakAuthService) {}

  async ngOnInit() {
    this.isLoggedIn = await this.auth.isLoggedIn();
    if (this.isLoggedIn) {
      this.username = this.auth.getUsername();
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
