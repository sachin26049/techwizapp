import { Component, OnInit } from '@angular/core';
import {ChefsService} from './chefs.service';
import {ChefSocketService} from './chef-socket.service';
@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
orderList:any[];
orderStatus:any[];
  constructor(private CS:ChefsService,private CSO:ChefSocketService) {}

  ngOnInit() {
    this.orderList=new Array();
    this.orderStatus=new Array();
    this.CS.init();
    //this.orderList.push("hehe");
    /*this.CS.newOrder();
    this.OrderList=this.CS.getList();*/
    this.CSO
  .getOrders()
  .subscribe((order: any) => {
    console.log(order);
    this.orderList.push(order);
    this.orderStatus[this.orderStatus.length]=new Array();
  });

  }
  sendStatus(i:any)
  {
    
    let orders=new Array();
    for(let j=0;j<this.orderList[i].orders.length;j++)
    {
      let x={
        "foodName":this.orderList[i].orders[j].foodname,
        "Time":this.orderStatus[i][j]
      };  
      orders.push(x);
    }
    let order={
      "userEmail":this.orderList[i].userEmail,
      "orders":orders
    }
    this.CSO.sendOrderStatus(order);
  }
  

}
