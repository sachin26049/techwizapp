import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

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

close() {
  this.socket.disconnect();
}
}
