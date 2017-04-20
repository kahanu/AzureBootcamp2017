import { TestBed, inject } from '@angular/core/testing';

import { HandicapCalculatorService } from './handicap-calculator.service';

describe('HandicapCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandicapCalculatorService]
    });
  });

  it('should ...', inject([HandicapCalculatorService], (service: HandicapCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
