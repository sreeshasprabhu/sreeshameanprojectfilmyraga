import { Component, OnInit } from '@angular/core';
import {SignupModel } from '../signup/signupmodel';
import { Router } from '@angular/router';
import {UserService } from '../user.service'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:SignupModel[];
  dtOptions: any = {};
  constructor(private userService:UserService,private router:Router,public _auth:AuthService,) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data)); 
    });

    setTimeout(()=>{                       
      $('#dataxample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"desc"]]
    } );
     }, 50);
  }
  editProduct(user:any)
  {
    localStorage.setItem("userId", user._id.toString());
    this.router.navigate(['updateuser']);

  }
  deleteProduct(product:any)
  {
    this.userService.deleteUser(product._id)
      .subscribe((data) => {
        this.users= this.users.filter(p => p !== product);
      })
  

   }
   
}
