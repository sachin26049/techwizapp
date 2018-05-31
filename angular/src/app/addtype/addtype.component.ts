
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';import { Component, OnInit } from '@angular/core';
import {AdminmenuService} from '../services/adminmenu.service';

@Component({
  selector: 'app-addtype',
  templateUrl: './addtype.component.html',
  styleUrls: ['./addtype.component.css']
})
export class AddtypeComponent implements OnInit {
type: String;
  constructor (
    //private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    //private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    //private MS :MenusService
  ) { }

  ngOnInit() {
  }

  onSignupSubmit() {
    console.log('1');
    const type= {
     
      type: this.type,
      //password: this.password
     };
     //console.log(food);
//inserting type
     
this.adminmenuService.addType(type).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('Food Inserted Successfully', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/addtype']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/addtype']);
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
