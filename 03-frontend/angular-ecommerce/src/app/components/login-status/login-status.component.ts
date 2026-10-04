import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-status.component.html',
  styleUrl: './login-status.component.css'
})
export class LoginStatusComponent {

  isAuthenticated = false;
  userName = '';

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(authenticated => {
      this.isAuthenticated = authenticated;
    });

    this.auth.user$.subscribe(user => {
      this.userName = user?.name || user?.email || 'User';
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
