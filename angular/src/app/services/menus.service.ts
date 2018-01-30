import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()
export class MenusService {
  Menu:[Object];
  Count:[Number];
  constructor(private http: HttpClient) { }
getMenuH(){
  return this.http.get ('http://localhost:3000/menu/LoadMenu');
}

getType(){
  return this.http.get ('http://localhost:3000/menu/LoadType');
}

setOrders(m:[Object],c:[Number])
{
this.Menu=m;
this.Count=c;
}

getMenu()
{
if(this.Menu!=undefined)
return this.Menu;
else
{
  this.getMenuH().subscribe(data => {
  if(data['success'])
  {
    //console.log("hhh");
  this.Menu=data['menu'];
  //console.log(data['menu']);
  //console.log(this.Menu);
  }
});
}
return this.Menu;
}

getCount()
{
if(this.Count!=undefined)
return this.Count;
else
{
  this.getMenu();

  this.Count=[new Number(this.Menu.length)];

  for(let i=0;i<this.Menu.length;i++)
  {
  this.Count[i]=0;
  }

}
}
}
