import { TestBed } from '@angular/core/testing';

import { MedServiceService } from './med-service.service';

describe('MedServiceService', () => {
  let service: MedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
