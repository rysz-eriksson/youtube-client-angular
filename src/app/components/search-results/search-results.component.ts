import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchItem } from 'src/app/models/search-item.model';
import { SortResult } from 'src/app/models/sort-result.model';
import { SearchService } from 'src/app/services/search.service';
import { SortService } from 'src/app/services/sort.service';
import { results } from './search-results-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  private searchSubscription: Subscription;
  private sortSubscription: Subscription;

  public searchResults: SearchItem[] = [...results];
  public filtered: string;
  public sorted: SortResult;

  constructor(
    private searchService: SearchService,
    private sortService: SortService
    ) { }

  public ngOnInit(): void {
    this.searchSubscription = this.searchService.result.subscribe(result => this.filtered = result);
    this.sortSubscription = this.sortService.updateSort.subscribe(() => {
      this.sorted = this.sortService.getSort();
    });
  }

  public ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.sortSubscription.unsubscribe();
  }

}
