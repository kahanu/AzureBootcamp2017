import { TestBed, inject } from '@angular/core/testing';

import { GolfclubService } from './golfclub.service';

describe('GolfclubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfclubService]
    });
  });

  it('should ...', inject([GolfclubService], (service: GolfclubService) => {
    expect(service).toBeTruthy();
  }));
});
