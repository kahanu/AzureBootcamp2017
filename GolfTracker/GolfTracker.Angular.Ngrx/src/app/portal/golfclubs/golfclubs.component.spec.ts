import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfclubsComponent } from './golfclubs.component';

describe('GolfclubsComponent', () => {
  let component: GolfclubsComponent;
  let fixture: ComponentFixture<GolfclubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfclubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
