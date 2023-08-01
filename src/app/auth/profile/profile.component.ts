import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, user } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router:Router
  ) {}

  user = JSON.parse(localStorage.getItem('user')!);

  ngOnInit(): void {
  
  }

 
}
