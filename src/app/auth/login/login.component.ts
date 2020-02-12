import { Component, OnInit } from '@angular/core';
import{AuthService} from '../login/../../services/auth.service'
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  
  loginUserData:string=JSON.stringify({id:101,name:"demo"})
  
  base64str:string="";

  constructor(private _auth:AuthService,
              private _router:Router) { }

  ngOnInit() {
  }
  Tobase64(){
    this.base64str=btoa(this.loginUserData);
    alert(this.base64str)
  }
  fromase64(){
    this.loginUserData=atob(this.base64str);
    alert("yyuyuy" + this.loginUserData)
  }
  loginUser(){
    
    console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
          console.log(res)
          localStorage.setItem('access', res.access)
          this._router.navigate(['/event'])
      },
      err => console.log(err)
    )
    console.log(this.loginUserData)
  }
}
