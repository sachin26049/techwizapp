import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Menu:[Object];
  Count:[Number];
  constructor(private MS: MenusService,private router:Router) { }

  ngOnInit() {

      this.Menu=this.MS.getMenu();

    this.Count=this.MS.getCount();

    //console.log("ininit");
  }

  goToMenu(){
    this.MS.setOrders(this.Menu,this.Count);
    this.router.navigate(['/menu']);
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

}
