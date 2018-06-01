import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {MenusService} from '../services/menus.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {OrderSocketService} from '../services/order-socket.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  count:any[];
  menu:[any];
  rating:any[];
  sum:number;
  display:boolean;

  constructor(private OSS:OrderSocketService , private router:Router,private AS:AuthService,private OS:OrdersService, private MS:MenusService) { }

  ngOnInit() {
    this.count=this.OS.getTotalCount();
    this.menu=this.MS.getMenu();
    this.rating=new Array(this.menu.length);
    for(var i=0;i<this.menu.length;i++)
    this.rating[i]=0;
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
    let user=JSON.parse(this.AS.getUser());
    let orderArray=[];
    //let c=[new Number(this.Count.length)];
    /*for(let i=0;i<this.count.length;i++)
    {
    c[i]=this.count[i];  
    }*/
    //console.log("p"+c);
    for(let i=0;i<this.count.length;i++)
    {
      if(this.count[i]!=0)
      {
        let o={
          foodname:this.menu[i].name,
          price:this.menu[i].price,
          Count:this.count[i],
          rating:this.rating[i]
        };
        orderArray.push(o);
        //this.Count[i]=0;
      }
    }
    //console.log(orderArray);
   let order={
     userEmail:user.email,
     tableno:localStorage.getItem('tablenumber'),
     orders:orderArray,
     total:this.sum
    };

    //console.log(order);
    //console.log("p"+c);
    this.OS.finalOrder(order).subscribe(data=>{
      console.log(data);
    });
    this.OS.reset();
    
    this.OSS.payment({email:user.email,tableNo:localStorage.getItem('tablenumber')});
    //this.AS.logout();
    this.router.navigate(['/end']);
    //this.router.navigate(['/payment']);
  }

  Show()
  {
    this.display=true;
  }
  

}
