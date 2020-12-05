import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchResult: string;
  public updatedResult: Subject<string> = new Subject();

  constructor() { }

  public getResult(): string {
    return this.searchResult;
  }

  public updateResult(result: string): void {
    this.searchResult = result;
    this.updatedResult.next();
  }
}
