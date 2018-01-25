import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
t=["s","ss","sss","ssss"];
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
    console.log(this.Menu);
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
