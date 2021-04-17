import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RagaService } from '../raga.service'

@Component({
  selector: 'app-update-raaga',
  templateUrl: './update-raaga.component.html',
  styleUrls: ['./update-raaga.component.css']
})
export class UpdateRaagaComponent implements OnInit {
  ragaItem= {
    filmSong :'',
    language:'',
    film:'',
    musicDirector:'',
    raga:''
    }

  constructor(private router:Router,private ragaService:RagaService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.ragaService.getRaga(productId).subscribe((data)=>{
      this.ragaItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.ragaService.editProduct(this.ragaItem);   
    alert("Success");
    this.router.navigate(['raga']);
  }

}
