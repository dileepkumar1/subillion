import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _loginUrl= "http://www.subillion.com/api/user/login"
  // constructor(private http: HttpClient, private _router:Router) { }

  // loginUser(user){
  //   return this.http.post<any>(this._loginUrl, {"token":String(baseencoded)})
  // }
}
