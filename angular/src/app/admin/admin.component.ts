import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
flag:any;
pass:any;
  constructor() { this.flag=0;}

  ngOnInit() {
  }
  checkpass()
  {
    if(this.pass=="hehe")
    this.flag=1;
  }

}
