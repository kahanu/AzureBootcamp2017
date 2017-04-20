import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfersComponent } from './golfers.component';

describe('GolfersComponent', () => {
  let component: GolfersComponent;
  let fixture: ComponentFixture<GolfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
