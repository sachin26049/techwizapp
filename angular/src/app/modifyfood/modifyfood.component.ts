import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';

@Component({
  selector: 'app-modifyfood',
  templateUrl: './modifyfood.component.html',
  styleUrls: ['./modifyfood.component.css']
})
export class ModifyfoodComponent implements OnInit {

type: String;
//type: any;
type1:"Rice";
food: String;
Menu:[any];
Type:[any];
price:String;

  constructor(
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS: MenusService,
    private flashMessage: FlashMessagesService
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

  onSubmit()
  {
    const food=
    {
      name:this.food,
      type:this.type,
      price:this.price,
      //des:this.des,
      }
     console.log(food);
//inserting food
     
this.adminmenuService.updateFood(food).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Food Updated Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/modifyfood']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/modifyfood']);
      }
    });



  }

}
