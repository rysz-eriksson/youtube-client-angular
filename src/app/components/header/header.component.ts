import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortResult } from 'src/app/models/sort-result.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public searchResult = new EventEmitter<string>();
  @Output() public sortResult = new EventEmitter<SortResult>();
  public optionsOn: boolean = false;
  constructor() { }

  public ngOnInit(): void {
  }

  public onSearchResult(filterValue: string): void {
    this.searchResult.emit(filterValue);
  }

  public onSort(result: SortResult): void {
    this.sortResult.emit(result);
  }
}
