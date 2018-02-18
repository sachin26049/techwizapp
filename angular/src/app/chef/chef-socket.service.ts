import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChefSocketService {

  constructor(private socket: Socket) {
    /*this.socket.on('orders',function(msg){

    });*/
   }

  sendHI(){
    console.log("hi");
    this.socket.emit("chef", "hi");   
  }
  getOrders() {
    return Observable.create((observer) => {
      this.socket.on('order', (order) => {
          console.log("new");
          observer.next(order);
      });
  });
  }
  sendOrderStatus(status:any)
  {
    this.socket.emit("orderStatus",status);
  }
close() {
  this.socket.disconnect()
}

}
