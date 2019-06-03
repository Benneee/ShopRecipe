import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  // This method signs up the user
  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log('err in signup', error));
  }
  // This method signs in the user
  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['/']);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => (this.token = token));
        console.log('sign in successful', res);
      })
      .catch(err => console.log('err in signing in', err));
  }

  // This method logs out the user
  // We also destroy the token once the process is carried out
  // We also navigate to the sign in page to lock out an unauthenticated user
  logoutUser() {
    firebase.auth().signOut();
    this.router.navigate(['signin']);
    this.token = null;
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => (this.token = token));
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
