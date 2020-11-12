import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortResult } from 'src/app/models/sort-result.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(value: SearchItem[], sortProperty: SortResult): SearchItem[] {
    if (!value) {
      return;
    }
    if (value.length === 0 || !sortProperty) {
      return value;
    }
    const propArray: string[] = sortProperty.sortBy.split('.');
    if (propArray[1] === 'publishedAt') {
      if (sortProperty.asc === true) {
        return value.sort((a, b) => {
          return Number(new Date(a[propArray[0]][propArray[1]])) -
          Number(new Date(b[propArray[0]][propArray[1]]));
        });
      } else {
        return value.sort((a, b) => {
          return Number(new Date(b[propArray[0]][propArray[1]])) -
          Number(new Date(a[propArray[0]][propArray[1]]));
        });
      }
    } else {
      if (sortProperty.asc === true) {
        return value.sort((a, b) => {
          return Number(a[propArray[0]][propArray[1]]) - Number(b[propArray[0]][propArray[1]]);
        });
      } else {
        return value.sort((a, b) => {
          return Number(b[propArray[0]][propArray[1]]) - Number(a[propArray[0]][propArray[1]]);
        });
      }
    }
  }
}
