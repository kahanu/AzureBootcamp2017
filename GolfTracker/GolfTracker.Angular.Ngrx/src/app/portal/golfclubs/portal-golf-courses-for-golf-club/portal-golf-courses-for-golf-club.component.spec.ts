import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalGolfCoursesForGolfClubComponent } from './portal-golf-courses-for-golf-club.component';

describe('PortalGolfCoursesForGolfClubComponent', () => {
  let component: PortalGolfCoursesForGolfClubComponent;
  let fixture: ComponentFixture<PortalGolfCoursesForGolfClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalGolfCoursesForGolfClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalGolfCoursesForGolfClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
