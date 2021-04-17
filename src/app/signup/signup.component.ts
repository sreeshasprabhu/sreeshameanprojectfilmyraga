import { Component, OnInit } from '@angular/core';
import { SignupModel } from './signupmodel';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService: UserService,private router: Router) { }
  userItem= new SignupModel(null,null,null,null)
   

  ngOnInit(): void {
  }
  AddUser()
  {    
    this.UserService.newUser(this.userItem);
    console.log("Called");    
    alert("Successfully Registerd");
    this.router.navigate(['/login']);
  }


}
