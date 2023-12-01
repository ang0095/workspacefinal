import { TestBed } from '@angular/core/testing';

import { OthGuard } from './oth.guard';

describe('OthGuard', () => {
  let guard: OthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
