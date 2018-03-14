import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(menu: any[],searchText: string): any {
        return menu.filter(foods => {
            return foods.type.includes(searchText);
          });
    
}

}
