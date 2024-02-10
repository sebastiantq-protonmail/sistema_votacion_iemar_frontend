import { TestBed } from '@angular/core/testing';

import { VoterAuthService } from './voter_auth.service';

describe('VoterAuthService', () => {
  let service: VoterAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
