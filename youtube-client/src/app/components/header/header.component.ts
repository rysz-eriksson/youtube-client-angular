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
  optionsOn = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSearchResult(filterValue: string) {
    this.searchResult.emit(filterValue);
  }

  onSort(result: SortResult) {
    this.sortResult.emit(result);
  }
}
