import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoundsComponent } from './view-rounds.component';

describe('ViewRoundsComponent', () => {
  let component: ViewRoundsComponent;
  let fixture: ComponentFixture<ViewRoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRoundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
