import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolferListComponent } from './golfer-list.component';

describe('GolferListComponent', () => {
  let component: GolferListComponent;
  let fixture: ComponentFixture<GolferListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolferListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
