import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SortBarComponent } from './sort-bar.component';

describe('SortBarComponent', () => {
  let component: SortBarComponent;
  let fixture: ComponentFixture<SortBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
