import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUser(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getUsers(){
    return this.http.get("http://localhost:3000/user")
  }
  newUser(item){
    return this.http.post("http://localhost:3000/user",{"user":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  deleteUser(id:any)
  {

    return this.http.delete("http://localhost:3000/rem/"+id)

  }
  editUser(user:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/upd",user)
    .subscribe(data =>{console.log(data)})
  }
  
}
