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

sort(){
  return this.http.get ('http://localhost:3000/menu/Sort');
}
getorders(){
  return this.http.get ('http://localhost:3000/orders/LoadOrders');
}
getOffers(){
  return this.http.get ('http://localhost:3000/offer/LoadOffer');
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

getTopRated(type)
{
  return this.http.post('http://localhost:3000/menu/getTopRated',{"type":type});
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