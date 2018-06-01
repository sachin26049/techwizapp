import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdminsocketService {

  constructor(private socket: Socket) { }

  sendHI(){
    console.log("hi");
    this.socket.emit("admin", "hi");   
  }
  getOrders() {
    return Observable.create((observer) => {
      this.socket.on('order', (order) => {
          console.log("new");
          observer.next(order);
      });
  });
  }

}
