import { TestBed } from '@angular/core/testing';

import { Oth2Guard } from './oth2.guard';

describe('Oth2Guard', () => {
  let guard: Oth2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Oth2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
