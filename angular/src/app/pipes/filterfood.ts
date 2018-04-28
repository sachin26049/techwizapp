import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilterfood',
    pure: false
})
export class MyFilterFoodPipe implements PipeTransform {
    transform(menu: any[],searchText: string): any {
if(searchText==null)
return null;

        return menu.filter(foods => {
            return foods.type.includes(searchText);
          });
    
}

}
