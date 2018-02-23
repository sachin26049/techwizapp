import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Injectable()
export class MenusService {
  Menu:[any];
  Count:[Number];

  constructor(private http: HttpClient) {

}

getMenuH(){
  return this.http.get ('http://localhost:3000/menu/LoadMenu');
}

getType(){
  return this.http.get ('http://localhost:3000/menu/LoadType');
}

getRecommendItems(user:any){
  console.log(user['email']);
  let email=user['email'];
  return this.http.get('http://localhost:3000/menu/RecommendedItems/'+email);
}

setOrders(m:[Object],c:[Number])
{
this.Menu=m;
this.Count=c;
}

getMenu()
{
return this.Menu;
}

getCount()
{
return this.Count;
}

}