import { TestBed } from '@angular/core/testing';

import { InstitutionAuthService } from './institution_auth.service';

describe('InstitutionAuthService', () => {
  let service: InstitutionAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
