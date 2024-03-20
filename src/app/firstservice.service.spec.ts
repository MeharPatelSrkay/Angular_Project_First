import { TestBed } from '@angular/core/testing';

import { FirstserviceService } from './firstservice.service';

describe('FirstserviceService', () => {
  let service: FirstserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
