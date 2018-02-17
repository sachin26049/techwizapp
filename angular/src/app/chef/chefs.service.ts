import { Injectable } from '@angular/core';
import {ChefSocketService} from './chef-socket.service';
@Injectable()
export class ChefsService {
orderList:[any];
  constructor(private CSO:ChefSocketService) { }
init()
{
this.CSO.sendHI();  
}
newOrder(){
  this.CSO
  .getOrders()
  .subscribe((order: any) => {
    this.orderList.push(order);
  });
}
getList()
{
return this.orderList;  
}

}
