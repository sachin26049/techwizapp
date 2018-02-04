import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';
import { log } from 'util';
import {AuthService} from '../services/auth.service';
import {OrdersService} from '../services/orders.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  Menu:[any];
  Count:[Number];
  sum:number;
  constructor(private MS: MenusService,private router:Router,
  private AS:AuthService,private OS:OrdersService) { }

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

  total()
  {
    
    this.sum=0;
    for(let i=0;i<this.Count.length;i++)
    {
      if(this.Count[i]!=0)
      {
      let x= +this.Count[i];
      let y=this.Menu[i];
      let z=+y.price;
      //console.log(x*z);  
      if(z)
      {    
      this.sum=this.sum + x*z;
      //console.log(this.sum); 
      }
    }
    }
    //console.log(this.sum);
    return this.sum;
  }

  placeOrder()
  {
    let user=JSON.parse(this.AS.getUser());
    //console.log(user);
    let orderArray=[];
    let c=[new Number(this.Count.length)];
    for(let i=0;i<this.Count.length;i++)
    {
    c[i]=this.Count[i];  
    }
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
        this.Count[i]=0;
      }
    }
    //console.log(orderArray);
   let order={
     userEmail:user.email,
     orders:orderArray
    };

    //console.log(order);
    //console.log("p"+c);
    this.OS.StoreOrder(order,c);
    this.MS.setOrders(this.Menu,this.Count);
    this.router.navigate(['/OrderStatus']);
  }

  getOrder()
  {
    let orders=this.OS.getCompleteOrder();
    console.log("2"+orders);
    //let count:[any]=this.OS.get;
  }

}
