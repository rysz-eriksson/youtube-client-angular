import { Component} from '@angular/core';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sort-bar',
  templateUrl: './sort-bar.component.html',
  styleUrls: ['./sort-bar.component.scss']
})
export class SortBarComponent {

  constructor(private sortService: SortService) { }

  public onSelect(value: string): void {
    this.sortService.updateCriteria(value);
  }
}
