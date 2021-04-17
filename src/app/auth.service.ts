import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user){
    return this.http.post<any>("http://localhost:3000/login",user)
    // .subscribe((data)=>{
    //   console.log("Success");
    // })
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }

  constructor(private http:HttpClient) { }
}
