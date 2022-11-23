import { TestBed } from '@angular/core/testing';

import { RentsHttpService } from './rents-http.service';

describe('RentsHttpService', () => {
  let service: RentsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
