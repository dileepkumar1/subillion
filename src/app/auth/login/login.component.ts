import { Component, OnInit } from '@angular/core';
import{AuthService} from '../login/../../services/auth.service'
import{Router} from '@angular/router'
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  
  // loginUserData={}

  

  constructor(private _auth:AuthService,
              private _router:Router,private http: HttpClient,) { }

  ngOnInit() { }

  loginUser(username, password){
    let jsondata = {
      'email': username,
      'password': password
    };
    let baseencoded = btoa(JSON.stringify(jsondata));
    // console.log(baseencoded);
    let headers = new Headers();
    headers.append("Accept", "q=0.8;application/json;q=0.9");
    headers.append("Access-Control-Allow-Methods","GET, POST");
    headers.append("Access-Control-Allow-Origin","*");
    this.http.post<any>('http://www.subillion.com/api/user/login', {"token":String(baseencoded)})
    .subscribe(
      res => {
          console.log(res)
          localStorage.setItem('access', res.access)
          this._router.navigate(['/event'])
      },
      err => {
        console.log("dileep")
      }
    )
  }
}
