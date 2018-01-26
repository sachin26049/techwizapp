import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
type:[Object];
Menu:[Object];
constructor(private MS: MenusService,) {

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
  /*LoadMenu(){

    this.MS.getMenu().subscribe(data => {
    if(data['success'])
    {
    let Menu=data['menu'];
    }


  });
}*/
}
