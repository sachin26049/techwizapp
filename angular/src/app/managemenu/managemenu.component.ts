import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
@Component({
  selector: 'app-managemenu',
  templateUrl: './managemenu.component.html',
  styleUrls: ['./managemenu.component.css']
})
export class ManagemenuComponent implements OnInit {

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private adminmenuService: AdminmenuService,
    private MS: MenusService
 

  ) { }

  ngOnInit() {
  }

  goBack()
{
  this.router.navigate(['/admin']);
}

}
