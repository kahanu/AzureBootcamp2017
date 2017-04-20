import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCoursesForGolfClubComponent } from './golf-courses-for-golf-club.component';

describe('GolfCoursesForGolfClubComponent', () => {
  let component: GolfCoursesForGolfClubComponent;
  let fixture: ComponentFixture<GolfCoursesForGolfClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfCoursesForGolfClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfCoursesForGolfClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
