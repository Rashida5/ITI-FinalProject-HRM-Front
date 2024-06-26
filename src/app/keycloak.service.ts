import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class KeycloakAuthService {
  constructor(private keycloakService: KeycloakService) {}

  public async init() {
    await this.keycloakService.init({
      config: {
        url: 'http://localhost:8080', // Adjust this URL to your Keycloak server
        realm: 'hrm',
        clientId: 'microservice-auth'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
      }
    });
  }

  public login() {
    this.keycloakService.login();
  }

  public logout() {
    this.keycloakService.logout();
  }

  public isLoggedIn(): Promise<boolean> {
    return this.keycloakService.isLoggedIn();
  }

  public getUsername(): string {
    return this.keycloakService.getUsername();
  }

  public getToken(): Promise<string> {
    return this.keycloakService.getToken();
  }
}
