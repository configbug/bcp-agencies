import { TestBed } from '@angular/core/testing';

import { AgenciesResolver } from './agencies.resolver';

describe('AgenciesResolver', () => {
  let resolver: AgenciesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AgenciesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
