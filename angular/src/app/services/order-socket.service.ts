import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class OrderSocketService {

  constructor(private socket: Socket) { }
  sendMessage(msg: any){
    this.socket.emit("message", msg);
}
getMessage() {
  return this.socket
      .fromEvent("message")
      .map( data => data);
}
}
