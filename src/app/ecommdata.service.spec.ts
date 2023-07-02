import { TestBed } from '@angular/core/testing';

import { EcommdataService } from './ecommdata.service';

describe('EcommdataService', () => {
  let service: EcommdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
