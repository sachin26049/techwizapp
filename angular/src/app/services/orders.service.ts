import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrdersService {

  Count:[any];
  order:any;
  TCount:[Number];
  constructor(private http: HttpClient) { }

  StoreOrder(order:any,c:[Number])
  {
  
    localStorage.setItem('order', JSON.stringify(order));
    this.order=order;
    //console.log(c);
    this.TCount=c;
    //console.log("q"+this.TCount);
    if(this.Count==undefined)
    {
      //console.log("xx");
      this.Count=c;
    }
    else{
    for(let i=0;i<this.Count.length;i++)
    {
      this.Count[i]+=c[i];
    }
  }
  }

  getCompleteOrder()
  {
   return JSON.parse(localStorage.getItem('order')); 
  }

  getCurrentCount()
  {
    console.log("1"+this.TCount);
    return this.TCount;
  }

  getTotalCount()
  {
    return this.Count;
  }


}
