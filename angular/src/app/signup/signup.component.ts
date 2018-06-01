import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {MenusService} from '../services/menus.service' ;
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  Type:[any];
  pre1:any;
  pre2:any;
  pre3:any;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private MS:MenusService
  ) { }

  ngOnInit() {
    this.MS.getType().subscribe(data=>{
        console.log(data);
        if(data['success']==true)
        {
          this.Type=data['type'];
          console.log(this.Type);
        }
    });
  }

    onSignupSubmit() {
    console.log('1');
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      pre1:this.pre1,
      pre2:this.pre2,
      pre3:this.pre3
      
     };
  console.log(user);
    // Required Fields
    if ( !this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
console.log('trying');
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if (data['success']) {
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show(data['msg'], {cssClass: 'alert-danger', timeout: 3000});
        alert(data['msg']);
        this.router.navigate(['/signup']);
      }
    });

  }

}

