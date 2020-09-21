import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortResult } from 'src/app/models/sort-result.model';
import { results } from './search-results-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public searchResults: SearchItem[] = [...results];
  @Input() public filtered: string;
  @Input() public sorted: SortResult;
  constructor() { }

  public ngOnInit(): void {
  }

}
