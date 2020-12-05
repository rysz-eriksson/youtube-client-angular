import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortResult } from 'src/app/models/sort-result.model';
import { SearchService } from 'src/app/services/search.service';
import { results } from './search-results-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  private searchSubscription: Subscription;

  @Input() public sorted: SortResult;

  public searchResults: SearchItem[] = [...results];
  public filtered: string;

  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
    this.searchSubscription = this.searchService.result.subscribe(result => this.filtered = result);
  }

  public ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

}
