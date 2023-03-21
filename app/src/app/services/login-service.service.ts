import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private url='http://localhost:8080/';
  constructor(private http:HttpClient) { }
  login(UserData:any){
    return this.http.post(this.url+ 'api/auth/login',UserData);
  }
  isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token){
return true;
    }
    else{
      return false;
    }
  }
  forgotpassword(email:String): Observable<any> {
    const baseurl = `${this.url}api/auth/mot-de-passe-oublie`
    return this.http.post(baseurl, { email });
  }
  changermdp(UserData:any){
    return this.http.post(this.url+'api/auth/changer-mdp',UserData);
  }
}
