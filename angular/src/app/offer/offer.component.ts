import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
import {MyFilterPipe} from '../pipes/food';



@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
name:string;
price:string;
  type: any;
  offer1:string;
type1:"Rice";
food: String;
Menu:[any];
Type:[any];
offer:[any];
flag:number;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS: MenusService
  ) { }

  delete()
  {
const food={
  name:this.offer1
}
    this.adminmenuService.deleteOffer(food).subscribe(data => {
      this.flashMessage.show('Offer Deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/offer']);
     
     
    });


    this.MS.getOffers().subscribe(data=>{
      
        this.offer=data['menu'];

        //console.log(this.Menu);
      
    });
}
  
  ngOnInit() {
    this.flag=0;
    this.MS.getMenuH().subscribe(data=>{
      if(data['success'])
      {
        this.Menu=data['menu'];

        //console.log(this.Menu);
      }
    });
    this.MS.getOffers().subscribe(data=>{
      if(data['success'])
      {
        this.offer=data['menu'];

        //console.log(this.Menu);
      }
    });


    
    
    this.MS.getType().subscribe(data=>{
      console.log("inside fn")
      if(data['success'])
      {console.log("success")
        this.Type=data['type'];
       // console.log(this.Type);
      }
    });

  }

  view()
  {
this.flag=0;
    
  }

  add()
  {
    this.flag=1;
  }

  remove()
  {
    this.flag=2;
  }

  onSignupSubmit() {
    console.log('1');
    const food=
    {
      name:this.name,
      price:this.price
      }
     console.log(food);
//inserting food
     
this.adminmenuService.addOffer(food).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Offer added Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/offer']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/offer']);
      }
    });

    this.MS.getOffers().subscribe(data=>{
      
        this.offer=data['menu'];

        
    });
}

goBack()
{
  this.router.navigate(['/admin']);
}


}
