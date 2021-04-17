import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user={
    uname:'',
    pass:''
  }
  

  constructor(private admin:AdminService,private router:Router ) { }

  ngOnInit(): void {
  }
  loginAdmin () {
    
    this.admin.loginAdmin(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/admindashboard'])
        //console.log("suucess")
      },
      err => {
        console.log(err);
        alert("Invalid email or password")
        this.router.navigate(['/admin'])
      }
    ) 
  }

}
