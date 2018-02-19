import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {OrderSocketService} from '../services/order-socket.service';

@Injectable()
export class OrdersService {

  Count:any[];
  orders;
  TCount:Number[];
  orderId:number;
  orderStatus;
  deliverd;
  constructor(private http: HttpClient,private OSS:OrderSocketService) { this.orders=new Array();this.orderId=0;this.orderStatus
  =new Array();
  this.deliverd=new Array();
  this.OSS.getStatus().subscribe((order: any) => {
    this.orderStatus[order.orderId-1]=order;
    this.deliverd[order.orderId-1]=0;
    console.log(this.orderStatus);
  });

  this.OSS.orderDelivered().subscribe((order: any) => {
    //console.log(order);
    //console.log("status");
    //this.orderStatus.push(order);
    this.deliverd[order.orderId-1]=1;
  });
}

  getDeliveryStat()
  {
    return this.deliverd;
  }
  StoreOrder(order:any,c:Number[])
  {
  
    //localStorage.setItem('order', JSON.stringify(order));
    this.orders.push(order);
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
  this.OSS.init(order.userEmail);
  this.OSS.placeOrder(order);
  }

  getCompleteOrder()
  {
   return this.orders; 
  }

  
  getStat()
  {
    return this.orderStatus;
  }
  getCurrentCount()
  {
    //console.log("1"+this.TCount);
    return this.TCount;
  }

  getTotalCount()
  {
    return this.Count;
  }

  reset()
  {
    this.Count=undefined;
  }

  finalOrder(order:any)
  {
    return this.http.post('http://localhost:3000/orders/add',order);
  }


}
