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
  getnotification() {
    return Observable.create((observer) => {
      this.socket.on('notification', (noti) => {
          console.log("new");
          observer.next(noti);
      });
  });
  }

}
