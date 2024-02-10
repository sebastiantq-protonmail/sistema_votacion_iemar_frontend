import { TestBed } from '@angular/core/testing';

import { ContralorService } from './contralor.service';

describe('ContralorService', () => {
  let service: ContralorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContralorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
