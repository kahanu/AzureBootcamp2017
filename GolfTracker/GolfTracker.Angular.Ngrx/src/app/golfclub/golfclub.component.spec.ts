import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfclubComponent } from './golfclub.component';

describe('GolfclubComponent', () => {
  let component: GolfclubComponent;
  let fixture: ComponentFixture<GolfclubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfclubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
