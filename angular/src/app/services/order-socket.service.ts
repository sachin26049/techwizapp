import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class OrderSocketService {

  constructor(private socket: Socket) { }
  sendMessage(msg: any){
    console.log("emit");
    this.socket.emit("message", msg);   
}
getMessage() {
  return this.socket.on('orderStatus',function(msg:any){
  });
      
}
close() {
  this.socket.disconnect()
}
}
