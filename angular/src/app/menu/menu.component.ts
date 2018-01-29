import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
type:[Object];
Menu:[Object];
count: number[] = [];
msg="";
constructor(private MS: MenusService,
  private flashMessage: FlashMessagesService
) {
  
 }

  ngOnInit() {
    this.MS.getMenu().subscribe(data => {
    if(data['success'])
    {
      console.log("hhh");
    this.Menu=data['menu'];
    //console.log(data['menu']);
    //console.log(this.Menu);
    }


  });

  this.MS.getType().subscribe(data => {
    if(data['success'])
    {
      console.log("hhh");
    this.type=data['type'];
    //console.log(data['menu']);
    console.log(this.type);
    }


  });
  }
  add(i:number){
    this.msg="";
    this.count[i]=1;
    this.msg=""+this.count[i]+i;
    this.flashMessage.show('You are now logged in', {
      cssClass: 'alert-success',
      timeout: 5000});
  }
  /*LoadMenu(){

    this.MS.getMenu().subscribe(data => {
    if(data['success'])
    {
    let Menu=data['menu'];
    }


  });
}*/
}
