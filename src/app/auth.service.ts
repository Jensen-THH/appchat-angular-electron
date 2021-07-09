import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$!: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
) {   }
async googleSignin() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const credential = await this.afAuth.signInWithPopup(provider);
  console.log( credential.user)
  // return this.updateUserData(credential.user);
  // return credential.user;
}

}
 