import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()
export class MenusService {

  constructor(private http: HttpClient) { }
getMenu(){
  return this.http.get ('http://localhost:3000/menu/LoadMenu');
}

getType(){
  return this.http.get ('http://localhost:3000/menu/LoadType');
}
}
