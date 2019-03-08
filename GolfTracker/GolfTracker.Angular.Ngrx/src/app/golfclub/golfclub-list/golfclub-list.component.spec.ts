import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfclubListComponent } from './golfclub-list.component';

describe('GolfclubListComponent', () => {
  let component: GolfclubListComponent;
  let fixture: ComponentFixture<GolfclubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfclubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfclubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
