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
Count:[Number];
constructor(private MS: MenusService,) {

 }

  ngOnInit() {
    this.MS.getMenu().subscribe(data => {
    if(data['success'])
    {
      //console.log("hhh");
    this.Menu=data['menu'];
    //console.log(data['menu']);
    //console.log(this.Menu);
    }

this.Count=[new Number(this.Menu.length)];

for(let i=0;i<this.Menu.length;i++)
{
this.Count[i]=0;
}
  });

  this.MS.getType().subscribe(data => {
    if(data['success'])
    {
      //console.log("hhh");
    this.type=data['type'];
    //console.log(data['menu']);
    //console.log(this.type);
    }


  });

  }
  incrCount(index:number){
    this.Count[index]=(Number)(this.Count[index])+1;
    console.log(index + ":" + this.Count[index]);
  }
  decrCount(index:number)
  {
    if(this.Count[index]!=0)
    {
      this.Count[index]=(Number)(this.Count[index])-1;
      console.log(index + ":" + this.Count[index]);
    }
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
