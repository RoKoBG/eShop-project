import { Injectable, NgZone } from '@angular/core';
import { User } from './user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { updatePhoneNumber } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;
  constructor(
    public fireAuth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
    public ngZone: NgZone
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Login

  login(email: string, password: string) {
    this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.SetUserData(res.user);
        this.fireAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['home']);
          }
        });
      })
      .catch((err) => {
        console.log(err.message);

        this.router.navigate(['home']);
      });
  }
  // Register
  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    photoUrl: string,
  ) {
    this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.SetUserData(res.user);
        res.user?.updateProfile({
          displayName: firstName + ' ' + lastName,
          photoURL: photoUrl,
        });
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    this.router.navigate(['home']);
  }

  get isLogged(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `user/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
  async logout() {
    await this.fireAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
  update(displayname:string,photo:string) {
    
    this.router.navigate(['/auth/profile'])
  }
}
