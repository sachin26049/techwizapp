import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Menu:[Object];
  Count:[Number];
  constructor(private MS: MenusService) { }

  ngOnInit() {
    this.MS.getMenu().subscribe(data=>{
      this.Menu=data['menu'];
    });
    this.Count=this.MS.getCount();
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
