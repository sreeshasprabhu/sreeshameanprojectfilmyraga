import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AdminService } from './admin.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthService,private _router:Router,private admin:AdminService)
  {

  }
  canActivate():boolean{
    if (this._auth.loggedIn())
    {
      console.log('true')
      return true

    }
    else if(this.admin.loggedIn()){
      console.log('true')
      return true
    }
    else{
      this._router.navigate(['/ragas'])
      return false

    }

    
  }
  
}
