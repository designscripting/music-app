import { Injectable, Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'FilterPipe'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items
    }
    // To search values only of "name" variable of your object(item)
    //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);

    // To search in values of every variable of your object(item)
    return items.filter(
      item =>
        JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1
    )
  }
}
