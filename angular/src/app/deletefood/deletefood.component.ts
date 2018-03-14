import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
import {MyFilterPipe} from '../pipes/food';
@Component({
  selector: 'app-deletefood',
 // pipes: [MyFilterPipe],
  templateUrl: './deletefood.component.html',
  styleUrls: ['./deletefood.component.css']
})

export class DeletefoodComponent implements OnInit {
type: any;
type1:"Rice";
food: String;
Menu:[any];
Type:[any];
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS: MenusService
  ) { }

  ngOnInit() {
    this.MS.getMenuH().subscribe(data=>{
      if(data['success'])
      {
        this.Menu=data['menu'];

        //console.log(this.Menu);
      }
    });

    
    
    this.MS.getType().subscribe(data=>{
      if(data['success'])
      {
        this.Type=data['type'];
       // console.log(this.Type);
      }
    });

  }
  onSignupSubmit() {
    console.log('1');
    const food=
    {
      name:this.food
      }
     console.log(food);
//inserting food
     
this.adminmenuService.deleteFood(food).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Food Deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/deletefood']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/deletefood']);
      }
    });
}
}
