import { Component } from '@angular/core';
import {Router} from '@angular/router';
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
  constructor(private router: Router,){this.flag=0;}
  
  /*checkpass2()
  {
    if(this.pass=="hehe")
    this.route(2);
  }

display()
{
this.flag1=1;

}
*/
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
