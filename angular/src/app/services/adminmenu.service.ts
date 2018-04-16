
import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable()

export class AdminmenuService {

    food: any;
  constructor(private http: HttpClient) {

}

addFood(food)
{


    return this.http.post ('http://localhost:3000/menu/add', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

addOffer(food)
{


    return this.http.post ('http://localhost:3000/offer/add', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}


addType(food)
{


    return this.http.post ('http://localhost:3000/menu/addType', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

updateFood(food)
{


    return this.http.put ('http://localhost:3000/menu/update', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

updateOffer(food)
{


    return this.http.put ('http://localhost:3000/Offer/update', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}


deleteFood(food)
{


    return this.http.post ('http://localhost:3000/menu/delete', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}

deleteOffer(food)
{


    return this.http.post ('http://localhost:3000/offer/delete', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}



deleteType(food)
{


    return this.http.post ('http://localhost:3000/menu/deleteType', food, {
    headers: new HttpHeaders().set('content-type', 'application/json'),
  });
}



}