import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
@Injectable()
export class MenusService {
  Menu:[any];
  Count:[Number];

  constructor(private http: HttpClient, private AS:AuthService ) {

}

getMenuH(){
  return this.http.get ('http://localhost:3000/menu/LoadMenu');
}

getorders(){
  return this.http.get ('http://localhost:3000/orders/LoadOrders');
}


getType(){
  return this.http.get ('http://localhost:3000/menu/LoadType');
}
getRecommendations(){
  var email=JSON.parse(this.AS.getUser()).email;
  return this.http.post('http://localhost:3000/menu/LoadRecommendation',{"email":email});
}
getCollabRecommendations(){
  var email=JSON.parse(this.AS.getUser()).email;
  return this.http.post('http://localhost:3000/menu/LoadCollabRecommendation',{"email":email});
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