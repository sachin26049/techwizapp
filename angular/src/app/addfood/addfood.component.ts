import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
type: String;
food: String;
price: String;
Menu:[any];
Type:[any];

  constructor( 
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS :MenusService) { }
    
  ngOnInit() {
    //console.log("Sss");
    this.MS.getMenuH().subscribe(data=>{
      if(data['success'])
      {
        this.Menu=data['menu'];
        console.log(this.Menu);
      }
    });
    this.MS.getType().subscribe(data=>{
      if(data['success'])
      {
        this.Type=data['type'];
        console.log(this.Type);
      }
    });
  }
  onSignupSubmit() {
    console.log('1');
    const food= {
      price: this.price,
      name: this.food,
      type: this.type,
      //password: this.password
     };
     console.log(food);
//inserting food
     
this.adminmenuService.addFood(food).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Food Inserted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/addfood']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/addfood']);
      }
    });
}


goBack()
{
  this.router.navigate(['/managemenu']);
}

goHome()
{
this.router.navigate(['/admin']);

}
}