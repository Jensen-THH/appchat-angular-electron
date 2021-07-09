import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({ 
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  islogin = false
  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth) {}

async signup(username: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(username, password).then(
      res=>{
        this.islogin = true
        localStorage.setItem("user",JSON.stringify(res.user))
        this.router.navigate(['/']);
      }
    );
  }
  ngOnInit(): void {
  }

}
