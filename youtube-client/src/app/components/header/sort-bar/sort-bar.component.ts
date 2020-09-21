import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SortResult } from 'src/app/models/sort-result.model';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent implements OnInit {
  @Output() public sortCriteria = new EventEmitter<SortResult>();
  public criteria: string  = 'word';
  public asc: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(value: string) {
    if (this.criteria === value) {
      this.asc = !this.asc;
    } else {
      this.criteria = value;
      this.asc = false;
    }

    if (this.criteria === 'date') {
      this.sortCriteria.emit({
        sortBy: 'snippet.publishedAt',
        asc: this.asc
      });
    } else if (this.criteria === 'views') {
      this.sortCriteria.emit({
        sortBy: 'statistics.viewCount',
        asc: this.asc
      });
    } else {
      return;
    }
  }

}
