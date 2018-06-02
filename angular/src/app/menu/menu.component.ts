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
Menu:[any];
Count:[Number];
Recommendations:[any];
CollabRecommendations:[any];
index:any[];
collabIndex:any[];
flag:any;
collabFlag:any;
duplicate:any[];
pre1:any[];
pre2:any[];
pre3:any[];
preIndex:any[];
preFlag:any;
preduplicate:any[];
constructor(private MS: MenusService,private router: Router,private AS:AuthService) {



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
              //console.log(this.Menu);
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
            //preferences
            var user=JSON.parse(this.AS.getUser());
            this.MS.getTopRated(user.pre1).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre1=data['food'];
                console.log(this.pre1);
              

            this.MS.getTopRated(user.pre2).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre2=data['food'];
                for(var i=0;i<this.pre2.length;i++)
                this.pre1.push(this.pre2[i]);
                console.log(this.pre1);
              }
            });

            this.MS.getTopRated(user.pre3).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre3=data['food'];
                for(var i=0;i<this.pre3.length;i++)
                this.pre1.push(this.pre3[i]);

                console.log(this.pre1);
                this.preIndex=new Array(this.pre1.length);
                this.preduplicate=new Array(this.pre1.length);
                if(this.Menu)
                {
                for(var i=0;i<this.pre1.length;i++)
                {
                  this.preIndex[i]=this.Menu.findIndex((element)=>{return element.name==this.pre1[i].name}); 
                }
                console.log(this.preIndex);
                this.preFlag=1;
                }
              }
            });
          }
        });
            //content-Based
            this.MS.getRecommendations().subscribe(data=>{
              if(data['success'])
              { //console.log(data['recommendation'][0].items);
                this.Recommendations=data['recommendation'][0].items;
                console.log(this.CollabRecommendations);
                this.index=new Array(this.Recommendations.length);
                for(var i=0;i<this.Recommendations.length;i++)
                {
                  this.index[i]=this.Menu.findIndex((element)=>{return element.name==this.Recommendations[i].category.name});

                }
                console.log(this.index);
                this.flag=1;
              }
             });

             //collab
             this.MS.getCollabRecommendations().subscribe(data=>{
              if(data['success'])
              { console.log(data['recommendation'][0].items);
                this.CollabRecommendations=data['recommendation'][0].items;
                console.log(this.CollabRecommendations);
                this.collabIndex=new Array(this.CollabRecommendations.length);
                this.duplicate=new Array(this.CollabRecommendations.length);
                for(var i=0;i<this.CollabRecommendations.length;i++)
                {
                  this.collabIndex[i]=this.Menu.findIndex((element)=>{return element.name==this.CollabRecommendations[i].name});
                  if(this.Recommendations.findIndex((element)=>{return element.category.name==this.CollabRecommendations[i].name})==-1)
                  this.duplicate[i]=0;
                  else
                  this.duplicate[i]=1;
                }
                console.log(this.collabIndex);
                this.collabFlag=1;
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

              //preferences
            var user=JSON.parse(this.AS.getUser());
            this.MS.getTopRated(user.pre1).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre1=data['food'];
                console.log(this.pre1);
              

            this.MS.getTopRated(user.pre2).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre2=data['food'];
                for(var i=0;i<this.pre2.length;i++)
                this.pre1.push(this.pre2[i]);
                console.log(this.pre1);
              }
            });

            this.MS.getTopRated(user.pre3).subscribe(data=>{
              if(data['success']==true)
              {
                this.pre3=data['food'];
                for(var i=0;i<this.pre3.length;i++)
                this.pre1.push(this.pre3[i]);

                console.log(this.pre1);
                this.preIndex=new Array(this.pre1.length);
                this.preduplicate=new Array(this.pre1.length);
                if(this.Menu)
                {
                for(var i=0;i<this.pre1.length;i++)
                {
                  this.preIndex[i]=this.Menu.findIndex((element)=>{return element.name==this.pre1[i].name}); 
                }
                console.log(this.preIndex);
                this.preFlag=1;
                }
              }
            });
          }
        });
              //content-based
              this.MS.getRecommendations().subscribe(data=>{
                if(data['success'])
                { //console.log(data['recommendation'][0].items);
                  this.Recommendations=data['recommendation'][0].items;
                  console.log(this.CollabRecommendations);
                  this.index=new Array(this.Recommendations.length);
                  for(var i=0;i<this.Recommendations.length;i++)
                  {
                    this.index[i]=this.Menu.findIndex((element)=>{return element.name==this.Recommendations[i].category.name});
  
                  }
                  console.log(this.index);
                  this.flag=1;
                }
               });
               //collab
               this.MS.getCollabRecommendations().subscribe(data=>{
                if(data['success'])
                { console.log(data['recommendation'][0].items);
                  this.CollabRecommendations=data['recommendation'][0].items;
                  console.log(this.Recommendations);
                  this.collabIndex=new Array(this.Recommendations.length);
                  this.duplicate=new Array(this.Recommendations.length);
                  for(var i=0;i<this.CollabRecommendations.length;i++)
                  {
                    this.collabIndex[i]=this.Menu.findIndex((element)=>{return element.name==this.CollabRecommendations[i].name});
                    if(this.Recommendations.findIndex((element)=>{return element.category.name==this.CollabRecommendations[i].name})==-1)
                    this.duplicate[i]=0;
                    else
                    this.duplicate[i]=1;
                  }
                  console.log(this.collabIndex);
                  this.collabFlag=1;
                }
               });
            }

           

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