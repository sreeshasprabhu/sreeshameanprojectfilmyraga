import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RagaService {

  constructor(private http:HttpClient) { }
  getRaga(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getRagas(){
    return this.http.get("http://localhost:3000/ragas")
  }
  newRaga(item){
    return this.http.post("http://localhost:3000/insert",{"song":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
  deleteProduct(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data =>{console.log(data)})
  }
  
}
