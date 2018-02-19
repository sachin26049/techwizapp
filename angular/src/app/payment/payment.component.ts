import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {MenusService} from '../services/menus.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  count:any[];
  menu:[any];
  sum:number;
  display:boolean;

  constructor(private router:Router,private AS:AuthService,private OS:OrdersService, private MS:MenusService) { }

  ngOnInit() {
    this.count=this.OS.getTotalCount();
    this.menu=this.MS.getMenu();
    this.display=false;
  }

  total()
  {
    
    this.sum=0;
    for(let i=0;i<this.count.length;i++)
    {
      if(this.count[i]!=0)
      {
      let x= +this.count[i];
      let y=this.menu[i];
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

  pay()
  {
    this.AS.logout();
    this.router.navigate(['/login']);
    //this.router.navigate(['/payment']);
  }

  Show()
  {
    this.display=true;
  }

}
