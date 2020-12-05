import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortResult } from '../models/sort-result.model';

@Injectable({
  providedIn: 'root'
})
export class SortService {
  private sortCriteria: SortResult;
  private criteria: string  = 'word';
  private asc: boolean = false;

  public updateSort: Subject<SortResult> = new Subject();
  constructor() { }

  public getSort(): SortResult {
    return this.sortCriteria;
  }

  public sendUpdatedCriteria(): void {
    if (this.criteria === 'date') {
      this.sortCriteria = {
        sortBy: 'snippet.publishedAt',
        asc: this.asc
      };
      this.updateSort.next();
    } else if (this.criteria === 'views') {
      this.sortCriteria = {
        sortBy: 'statistics.viewCount',
        asc: this.asc
      };
      this.updateSort.next();
    } else {
      return;
    }

  }

  public updateCriteria(value: string): void {
    if (this.criteria === value) {
      this.asc = !this.asc;
    } else {
      this.criteria = value;
      this.asc = false;
    }
    this.sendUpdatedCriteria();
  }
}
