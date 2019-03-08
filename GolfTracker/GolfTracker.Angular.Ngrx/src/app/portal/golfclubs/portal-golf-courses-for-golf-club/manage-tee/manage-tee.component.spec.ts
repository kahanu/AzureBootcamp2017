import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeeComponent } from './manage-tee.component';

describe('ManageTeeComponent', () => {
  let component: ManageTeeComponent;
  let fixture: ComponentFixture<ManageTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
