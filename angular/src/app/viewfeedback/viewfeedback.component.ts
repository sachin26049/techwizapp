import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
import {MyFilterEmail} from '../pipes/email';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  orderz:[any];
  email:string;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS: MenusService

  ) { }

  ngOnInit() {

    this.MS.getorders().subscribe(data=>{
      if(data['success'])
      {
        this.orderz=data['orders'];

      console.log(this.orderz);
      console.log(this.orderz[0].email)
      console.log(this.orderz[0].orders[0].foodname)
      }
    });
  }

  goBack()
  {
    this.router.navigate(['/admin']);
  }

}
