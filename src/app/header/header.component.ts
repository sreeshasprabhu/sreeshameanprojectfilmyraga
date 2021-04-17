import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AuthService } from '../auth.service';
import { RagaService } from '../raga.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  rag={
    searchText:''
    
  }
  constructor(public _auth:AuthService,private ragaService:RagaService,
    private _router:Router,public admin:AdminService) { }
  logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/'])
}
loggedUser()
{
  this._router.navigate(['/add'])
}

  ngOnInit(): void {

  }
  

}
