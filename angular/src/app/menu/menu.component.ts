import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
type:[Object];
Menu:[Object];
Count:[Number];
constructor(private MS: MenusService,private router: Router) {
  this.MS.getMenu().subscribe(data=>{
    if(data['success'])
    {
      this.Menu=data['menu'];
      console.log(this.Menu);
      this.Count=[new Number(this.Menu.length)];
for(let i=0;i<this.Menu.length;i++)
{
  this.Count[i]=0;
}
this.MS.setOrders(this.Menu,this.Count);
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
  

  ngOnInit() {

           


            //this.Count=this.MS.getCount();

             

  }

  //functions
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

  goToOrders(){
    this.MS.setOrders(this.Menu,this.Count);
    this.router.navigate(['/orders']);
  }

}
