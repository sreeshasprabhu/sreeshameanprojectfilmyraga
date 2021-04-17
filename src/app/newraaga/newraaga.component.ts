import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RagaService } from '../raga.service';
import {  RagaModel} from '../ragas-list/ragamodel';

@Component({
  selector: 'app-newraaga',
  templateUrl: './newraaga.component.html',
  styleUrls: ['./newraaga.component.css']
})
export class NewraagaComponent implements OnInit {

  constructor(private RagaService: RagaService,private router: Router) { }
  ragaItem= new RagaModel(null,null,null,null,null)
   

  ngOnInit(): void {
  }
  AddProduct()
  {    
    this.RagaService.newRaga(this.ragaItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/ragas']);
  }

}
