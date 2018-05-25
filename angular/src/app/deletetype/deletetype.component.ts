import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';

@Component({
  selector: 'app-deletetype',
  templateUrl: './deletetype.component.html',
  styleUrls: ['./deletetype.component.css']
})
export class DeletetypeComponent implements OnInit {
type: String;
Type:[any];
  constructor(
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    //private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS :MenusService


  ) { }

  ngOnInit() {
    this.MS.getType().subscribe(data=>{
      if(data['success'])
      {
        this.Type=data['type'];
        console.log(this.Type);
      }
    });
  }

  onSignupSubmit() {
   // console.log('1');
    const type= {
     
      type: this.type,
      //password: this.password
     };
     //console.log(food);
//inserting type
     
this.adminmenuService.deleteType(type).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Type Deleted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/managemenu']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/deletetype']);
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


