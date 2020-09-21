import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() public searchResult = new EventEmitter<string>();
  public searchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  public onSubmitSearch() {
    this.searchResult.emit(this.searchTerm);
  }

}
