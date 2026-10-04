import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    // Automatically trigger login with redirect when visiting /login
    this.auth.loginWithRedirect();
  }
}
