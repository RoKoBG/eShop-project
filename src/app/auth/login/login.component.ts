import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  user:[] = [];
  ngOnInit(): void {}
  constructor(private auth: AuthService) {}
  login() {
   
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
