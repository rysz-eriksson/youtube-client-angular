import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  @Input() public date: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
