import { Component } from '@angular/core';
import { SortResult } from './models/sort-result.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tslint:disable-next-line:typedef
  public title = 'youtube-client';
  public filteredResult: string;
  public sortedResult: SortResult;
}
