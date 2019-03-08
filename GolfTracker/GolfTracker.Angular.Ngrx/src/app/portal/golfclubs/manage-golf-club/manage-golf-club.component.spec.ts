import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGolfClubComponent } from './manage-golf-club.component';

describe('ManageGolfClubComponent', () => {
  let component: ManageGolfClubComponent;
  let fixture: ComponentFixture<ManageGolfClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGolfClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGolfClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
