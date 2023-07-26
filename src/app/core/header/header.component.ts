import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private auth: AuthService, public router: Router) {}

  get isLoggedIn(): boolean {
    return this.auth.isLogged;
  }
  logout(): void {
    this.auth
      .logout()
      .then(() => {
        this.router.navigate(['auth/login']);
      })
      .catch((err) => {
        this.router.navigate(['auth/login']);
      });
  }
}
