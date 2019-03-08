import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfClubComponent } from './golf-club.component';

describe('GolfClubComponent', () => {
  let component: GolfClubComponent;
  let fixture: ComponentFixture<GolfClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
