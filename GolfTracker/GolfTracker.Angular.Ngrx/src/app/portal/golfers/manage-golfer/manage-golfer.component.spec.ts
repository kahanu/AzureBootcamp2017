import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGolferComponent } from './manage-golfer.component';

describe('ManageGolferComponent', () => {
  let component: ManageGolferComponent;
  let fixture: ComponentFixture<ManageGolferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGolferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGolferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
