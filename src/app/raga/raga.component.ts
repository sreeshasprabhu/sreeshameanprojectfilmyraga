import { Component, OnInit } from '@angular/core';
import { RagaModel } from '../ragas-list/ragamodel'
import { Router } from '@angular/router';
import { RagaService } from '../raga.service';
import { AuthService } from '../auth.service';
declare let $: any;
@Component({
  selector: 'app-raga',
  templateUrl: './raga.component.html',
  styleUrls: ['./raga.component.css']
})
export class RagaComponent implements OnInit {
 
  songs:RagaModel[];
  dtOptions: any = {};
  constructor(private ragaService:RagaService,private router:Router,public _auth:AuthService,) { }

  ngOnInit(): void {
    
    this.ragaService.getRagas().subscribe((data)=>{
      this.songs=JSON.parse(JSON.stringify(data));  
     
    });
    setTimeout(()=>{                       
      $('#datatableexample').DataTable( {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true,
        lengthMenu : [5, 10, 25],
        order:[[1,"desc"]]
    } );
     }, 50);
        
  }
 
  editProduct(song:any)
  {
    localStorage.setItem("editProductId", song._id.toString());
    this.router.navigate(['update']);

  }
  deleteProduct(product:any)
  {
    this.ragaService.deleteProduct(product._id)
      .subscribe((data) => {
        this.songs= this.songs.filter(p => p !== product);
      })
  

   }
   
  
}
