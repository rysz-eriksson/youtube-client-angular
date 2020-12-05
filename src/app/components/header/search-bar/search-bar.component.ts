import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public searchTerm: string = '';
  constructor(private searchService: SearchService) { }

  public ngOnInit(): void {
  }
  public onSubmitSearch(): void {
    this.searchService.updateResult(this.searchTerm);
  }

}
