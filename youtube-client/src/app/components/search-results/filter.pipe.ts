import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: SearchItem[], filterTerm: string): unknown {
    if (!filterTerm) {
      return;
    }
    if (value.length === 0) {
      return value;
    }
    return value.filter(({snippet}) => snippet.title.toLowerCase().includes(filterTerm.toLowerCase()));
  }
}
