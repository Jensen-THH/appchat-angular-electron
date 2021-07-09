import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { User } from './user.model';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'firebase-angular-auth';
  isSignedIn = true
  isSignedUp = false
  error=""
  error2=""
  show=true
  currentUsers={displayName:'',photoURL:''}
  user$!: Observable<User>
  constructor(public afs : AngularFirestore,public firebaseService : FirebaseService, public router: Router,private firebaseAuth: AngularFireAuth){}
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  
  async onSignin(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(
        res => {
          console.log(res);
                this.isSignedIn = true
                this.show=false
                this.error2 =''
                localStorage.setItem('user',JSON.stringify(res.user))
                this.router.navigate(['chat']);
        },
        err => {
          this.error2 = err.message || 'Unknown error'
        }
        )
  }

  async onSignup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(
        res => {
          console.log(res);
                this.isSignedIn = false
                this.isSignedUp = false
                this.error2 =''
                localStorage.setItem('user',JSON.stringify(res.user))
                this.router.navigate(['/']);
        },
        err => {
          this.error = err.message || 'Unknown error'
        }
        )
  }
  async googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.firebaseAuth.signInWithPopup(provider);
    this.isSignedIn = true
    this.show=false
    localStorage.setItem('user',JSON.stringify(credential.user))
    var x = localStorage.getItem('user')
    this.router.navigate(['chat']);
    var currentUser = JSON.parse(localStorage.getItem('user')!);
    console.log(currentUser)
    this.currentUsers = currentUser
    console.log(typeof(this.currentUsers))
    return this.updateUserData(currentUser);

  }
  updateUserData({ uid,email,displayName,photoURL }: User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data = { 
      uid, 
      email, 
      displayName, 
      photoURL
    } 

    return userRef.set(data, { merge: true })

  }
  handleLogin(){
    this.isSignedIn = false
    this.isSignedUp = false
    this.show =true
    this.router.navigate(['/']);
  }
  handleLogout(){
    this.firebaseService.logout()
    this.show = true
    this.isSignedIn = false
    this.currentUsers={ displayName:'',photoURL:''}
    this.router.navigate(['/'])
  }
  handleSignup(){
    this.isSignedIn = true
    this.isSignedUp = true
    // this.router.navigate(['signup'])
  }

}