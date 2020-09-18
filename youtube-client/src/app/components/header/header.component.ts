import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public searchResult = new EventEmitter<string>();
  public searchTerm: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmitSearch() {
    this.searchResult.emit(this.searchTerm);
  }

}
