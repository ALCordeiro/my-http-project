import { TestBed } from '@angular/core/testing';

import { ApicallObservableService } from './apicall-observable.service';

describe('ApicallObservableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApicallObservableService = TestBed.get(ApicallObservableService);
    expect(service).toBeTruthy();
  });
});
