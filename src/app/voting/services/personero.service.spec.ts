import { TestBed } from '@angular/core/testing';

import { PersoneroService } from './personero.service';

describe('PersoneroService', () => {
  let service: PersoneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersoneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
