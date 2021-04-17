import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userItem= {
    name :'',
    email:'',
    password:'',
   phone:''
    
    }
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("userId");
    this.userService.getUser(productId).subscribe((data)=>{
      this.userItem=JSON.parse(JSON.stringify(data));
  })

  }
  editUser()
  {    
    this.userService.editUser(this.userItem);   
    alert("Success");
    this.router.navigate(['user']);
  }
}
