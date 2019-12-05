import { TestBed } from '@angular/core/testing';

import { ApicallPromisseService } from './apicall-promisse.service';

describe('ApicallPromisseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApicallPromisseService = TestBed.get(ApicallPromisseService);
    expect(service).toBeTruthy();
  });
});
