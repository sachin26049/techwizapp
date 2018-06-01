import { Component, OnInit } from '@angular/core';
import {AdminsocketService} from './adminsocket.service';
@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  msgList:any[];
  constructor(private ASS:AdminsocketService) { }

  ngOnInit() {
    this.msgList=new Array();
    this.ASS.sendHI();
    this.ASS.getnotification().subscribe((msg:any)=>{

        this.msgList.push(msg);
    });
  }

}
