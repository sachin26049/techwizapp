import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderSocketService {

  constructor(private socket: Socket) { }
  placeOrder(msg: any){
    console.log("emit");
    this.socket.emit("placeOrder", msg);   
}
init(username:any){
  this.socket.emit("user",username);
}

getStatus(){
  return Observable.create((observer) => {
    this.socket.on('orderStatus', (order) => {
        console.log("new");
        observer.next(order);
    });
});
}

orderDelivered(){
  return Observable.create((observer) => {
    this.socket.on('orderDeliverd', (order) => {
        console.log("newd");
        observer.next(order);
    });
});
}

close() {
  this.socket.disconnect();
}
}
