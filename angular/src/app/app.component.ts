import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import {FlashMessagesService} from 'angular2-flash-messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  title = 'Techwizapp';
  flag:Number;
  pass:string;
  flag1:number;
  pass1:string;
  flag2:number;
  flag0:number;
  table:number;
  constructor(private router: Router,/*private flashMessage: FlashMessagesService*/){
    this.flag=0;this.flag1=0;this.flag2=0;this.flag0=0}
  
  customer()
  {
    console.log(this.table);
    //var tableno=this.table.toString();
    localStorage.setItem('tablenumber',this.table.toString());
    this.route(1);
  }  
  checkpass()
  {
    if(this.pass=="hehe")
   { 
   /* this.flashMessage.show('You are now logged in', {
      cssClass: 'alert-success',
      timeout: 5000});*/
    this.route(2);
   
  }
  else
  {
    /*this.flashMessage.show('Wrong Password', {
      cssClass: 'alert-danger',
      timeout: 5000});*/


  }     
}
 checkpass1()
 {
   if(this.pass1=="hehe")
  {
   /* this.flashMessage.show('You are now logged in', {
      cssClass: 'alert-success',
      timeout: 5000});*/  
    this.route(3);
  }
  else

  {
    /*this.flashMessage.show('Wrong Password', {
      cssClass: 'alert-danger',
      timeout: 5000});*/

  }
}

display()
{
this.flag1=1;

}


display1()
{
this.flag2=1;

}
display0()
{
  this.flag0=1;
}


  route(code:Number)


  {
    console.log(code);
    switch(code)
    {
      case 1:this.router.navigate(['/home']);
      this.flag=1;
      break;
      case 2:
      //this.flag=2;
      this.router.navigate(['/admin']);
      this.flag=2;
      break;
      case 3:this.router.navigate(['/chef']);
      this.flag=3;
      break;
    }
    
  }
}
