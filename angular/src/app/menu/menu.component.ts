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
<<<<<<< HEAD
count: number[] = [];
msg="";
constructor(private MS: MenusService,
  private flashMessage: FlashMessagesService
) {
  
=======
Count:[Number];
constructor(private MS: MenusService,) {

>>>>>>> 488332edb5a79f74a8d8dd7a907c269b49391639
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
<<<<<<< HEAD
  add(i:number){
    this.msg="";
    this.count[i]=1;
    this.msg=""+this.count[i]+i;
    this.flashMessage.show('You are now logged in', {
      cssClass: 'alert-success',
      timeout: 5000});
  }
=======
  decrCount(index:number)
  {
    if(this.Count[index]!=0)
    {
      this.Count[index]=(Number)(this.Count[index])-1;
      console.log(index + ":" + this.Count[index]);
    }
}
>>>>>>> 488332edb5a79f74a8d8dd7a907c269b49391639
  /*LoadMenu(){

    this.MS.getMenu().subscribe(data => {
    if(data['success'])
    {
    let Menu=data['menu'];
    }


  });
}*/
}
