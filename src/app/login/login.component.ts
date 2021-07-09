import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = "";
  // constructor(private router: Router){}
  // login(username: string, password: string){
  //   this.router.navigate(['chat']);
  // }
  islogin = false
  constructor(
    private router: Router,
    private firebaseAuth: AngularFireAuth) {}
    async login(username: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(username, password).then(
      credential => {
        console.log(credential);
        this.router.navigate(['chat']);
      },
      err => {
        this.error = err.message || 'Unknown error'
      }
      )
    }
  //     res=>{
  //       this.islogin = true
  //       localStorage.setItem("user",JSON.stringify(res.user))
  //     }
  //   );
  // }
  

  ngOnInit(): void {
  }

}
