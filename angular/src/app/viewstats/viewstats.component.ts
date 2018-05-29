import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {AdminmenuService} from '../services/adminmenu.service';
import {MenusService} from '../services/menus.service';
import {MyFilterEmail} from '../pipes/email';
import {MyFilterPipe} from '../pipes/food';

@Component({
  selector: 'app-viewstats',
  templateUrl: './viewstats.component.html',
  styleUrls: ['./viewstats.component.css']
})
export class ViewstatsComponent implements OnInit {
type: String;

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

    this.type="";

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

  sort()
  {
    this.MS.sort().subscribe(data=>{
      if(data['success'])
      {
        this.Menu=data['menu'];

        //console.log(this.Menu);
      }
    });
  }

  goBack()
{
  this.router.navigate(['/admin']);
}

}
