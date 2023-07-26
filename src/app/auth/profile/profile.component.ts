import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  authh = getAuth();

  constructor(private router: Router, public auth: AngularFireAuth) {}

  ngOnInit(): void {
    onAuthStateChanged(this.authh, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log(user.uid);
        console.log(user.email);
        // ...
      } else {
        return;
      }
    });
  }
}
