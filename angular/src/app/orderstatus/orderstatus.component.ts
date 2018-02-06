import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';
import { log } from 'util';
import {AuthService} from '../services/auth.service';
import {OrdersService} from '../services/orders.service'


@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  Menu:[any];
  Count:Number[];
  
  constructor(private MS: MenusService,private router:Router,
    private AS:AuthService,private OS:OrdersService) { }

  ngOnInit() {
    this.MS.getMenuH().subscribe(data=>{
    if(data['success'])
    {
      this.Menu=data['menu'];
      //console.log(this.Menu);
    

    this.Count=this.OS.getTotalCount();
   // console.log(this.Count);
   // console.log(this.Menu);
    }
    });
}

checkOut()
{
  let user=JSON.parse(this.AS.getUser());
    //console.log(user);
    let orderArray=[];
    //let c=[new Number(this.Count.length)];
    /*for(let i=0;i<this.Count.length;i++)
    {
    c[i]=this.Count[i];  
    }*/
    //console.log("p"+c);
    for(let i=0;i<this.Count.length;i++)
    {
      if(this.Count[i]!=0)
      {
        let o={
          foodname:this.Menu[i].name,
          Count:this.Count[i],
        };
        orderArray.push(o);
        //this.Count[i]=0;
      }
    }
    //console.log(orderArray);
   let order={
     userEmail:user.email,
     orders:orderArray
    };

    //console.log(order);
    //console.log("p"+c);
    this.OS.finalOrder(order).subscribe(data=>{
      console.log(data);
    });
    this.AS.logout();
    this.router.navigate(['/login']);
}
}
