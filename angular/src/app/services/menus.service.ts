import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()
export class MenusService {
  Menu:[Object];
  Count:[Number];
  constructor(private http: HttpClient) { }
getMenu(){
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

getOrderM()
{
return this.Menu;
}

getCount()
{
return this.Count;
}
}
