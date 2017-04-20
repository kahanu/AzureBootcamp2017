import { TestBed, inject } from '@angular/core/testing';

import { GolferService } from './golfer.service';

describe('GolferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolferService]
    });
  });

  it('should ...', inject([GolferService], (service: GolferService) => {
    expect(service).toBeTruthy();
  }));
});
