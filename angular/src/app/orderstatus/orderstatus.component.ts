import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';
import { log } from 'util';
import {AuthService} from '../services/auth.service';
import {OrdersService} from '../services/orders.service';
import {OrderSocketService} from '../services/order-socket.service'



@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  Menu:[any];
  Count:Number[];
  orders:[any]; 
  orderStatus;
  deliverd;
  //public now: Date = new Date();
  constructor(private MS: MenusService,private router:Router,
    private AS:AuthService,private OS:OrdersService,private OSS:OrderSocketService) { }

  ngOnInit() {
    //console.log(this.now);
    this.MS.getMenuH().subscribe(data=>{
      if(data['success'])
    {
      this.Menu=data['menu'];
      //console.log(this.Menu);
    

    this.Count=this.OS.getTotalCount();
   // console.log(this.Count);
   // console.log(this.Menu);
    }
    });
    this.orders=this.OS.getCompleteOrder();
    this.orderStatus=new Array(this.orders.length);
    this.deliverd=new Array(this.orders.length);
    this.orderStatus=this.OS.getStat();
    this.deliverd=this.OS.getDeliveryStat();
    console.log(this.orderStatus);
    
    //console.log(this.orders);
    

    this.OSS.getStatus().subscribe((order: any) => {
    //console.log(order);
   // console.log("status");
    this.orderStatus[order.orderId-1]=order;
    this.deliverd[order.orderId-1]=0;
    console.log(this.orderStatus);
  });
  this.OSS.orderDelivered().subscribe((order: any) => {
    //console.log(order);
   // console.log("status");
    //this.orderStatus.push(order);
    this.deliverd[order.orderId-1]=1;
    console.log(this.deliverd);
  });

}

checkOut()
{
  let user=JSON.parse(this.AS.getUser());
    //console.log(user);
   /* let orderArray=[];
    //let c=[new Number(this.Count.length)];
    /*for(let i=0;i<this.Count.length;i++)
    {
    c[i]=this.Count[i];  
    }
    //console.log("p"+c);
    for(let i=0;i<this.Count.length;i++)
    {
      if(this.Count[i]!=0)
      {
        let o={
          foodname:this.Menu[i].name,
          Count:this.Count[i],
        };
        orderArray.push(o);
        //this.Count[i]=0;
      }
    }
    //console.log(orderArray);
   let order={
     userEmail:user.email,
     orders:orderArray
    };

    //console.log(order);
    //console.log("p"+c);
    this.OS.finalOrder(order).subscribe(data=>{
      console.log(data);
    });
    */
    //this.AS.logout();
    //this.router.navigate(['/login']);
    this.router.navigate(['/payment']);
}
}
