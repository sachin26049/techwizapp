import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilterEmail',
    pure: false
})
export class MyFilterEmail implements PipeTransform {
    transform(orders: any[],searchText: string): any {

        if(searchText=="")
        return null;

        
        return orders.filter(person => {
            return person.email.includes(searchText);
          });
    
}

}