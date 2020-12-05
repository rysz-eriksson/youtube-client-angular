import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public result: Subject<string> = new Subject();

  constructor() { }

  public updateResult(result: string): void {
    this.result.next(result);
  }
}
