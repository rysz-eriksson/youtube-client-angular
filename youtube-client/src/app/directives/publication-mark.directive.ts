import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[publicationMark]'
})
export class PublicationMark implements OnInit {
  @Input('appDate') public date: string;

  constructor(private element: ElementRef) { }

  public ngOnInit() {
    this.changeBorderColor();
  }

  public changeBorderColor() {
    const now: number = Date.now();
    const then: Date = new Date(this.date);
    const thenInMs: number = then.getTime();
    const difference: number = now - thenInMs;
    if (difference < 604800000) {
      this.element.nativeElement.style.borderBottomColor = 'blue';
    } else if (difference > 604800000 && difference < 2592000000) {
      this.element.nativeElement.style.borderBottomColor = 'green';
    } else if (difference > 15724800000) {
      this.element.nativeElement.style.borderBottomColor = 'red';
    } else {
      return;
    }
  }
}
