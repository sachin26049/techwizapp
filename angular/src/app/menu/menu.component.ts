import { Component, OnInit } from '@angular/core';
import {MenusService} from '../services/menus.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
type:[Object];
Menu:[Object];
Count:[Number];
Recommend:[object];

constructor(private MS: MenusService,private router: Router,private AS: AuthService ) {



 }

  ngOnInit() {
            //console.log('1');
            if(this.MS.Count==undefined)
            {
              //console.log("2");
              this.MS.getMenuH().subscribe(data => {
              if(data['success'])
              {
                //console.log("3");
              this.Menu=data['menu'];
              this.Count=[new Number(this.Menu.length)];

              for(let i=0;i<this.Menu.length;i++)
              {
              this.Count[i]=0;
              }
              //console.log("4"+this.Menu);
              this.MS.setOrders(this.Menu,this.Count);
              }
            });
            this.MS.getType().subscribe(data => {
              if(data['success'])
              {
                //console.log("hhh");
              this.type=data['type'];
              //console.log(data['menu']);
              //console.log(this.type);
              }


            });
            }
            else
            {
            this.Menu=this.MS.getMenu();

          //  console.log(this.Menu);
            this.Count=this.MS.getCount();

              this.MS.getType().subscribe(data => {
                if(data['success'])
                {
                  //console.log("hhh");
                this.type=data['type'];
                //console.log(data['menu']);
                //console.log(this.type);
                }


              });
            }

            let user=JSON.parse(this.AS.getUser());
            console.log(user)
            this.MS.getRecommendItems(user).subscribe(data => {
              if(data['success'])
              {
                //console.log("hhh");
              this.Recommend=data['rec'];
              console.log(data['rec']);
              //console.log(this.type);
              }


            });

  }

  //functions
  incrCount(index:number){
      this.Count[index]=(Number)(this.Count[index])+1;
      //console.log(index + ":" + this.Count[index]);
  }


  decrCount(index:number)
  {
      if(this.Count[index]!=0)
      {
        this.Count[index]=(Number)(this.Count[index])-1;
       // console.log(index + ":" + this.Count[index]);
      }
  }

  goToOrders(){
    this.MS.setOrders(this.Menu,this.Count);
    this.router.navigate(['/orders']);
  }

}