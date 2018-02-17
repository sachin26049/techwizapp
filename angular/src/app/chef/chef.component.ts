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
  constructor(private CS:ChefsService,private CSO:ChefSocketService) {}

  ngOnInit() {
    this.orderList=new Array();
    this.CS.init();
    //this.orderList.push("hehe");
    /*this.CS.newOrder();
    this.OrderList=this.CS.getList();*/
    this.CSO
  .getOrders()
  .subscribe((order: any) => {
    console.log(order);
    this.orderList.push(order);
  });

  }

}
