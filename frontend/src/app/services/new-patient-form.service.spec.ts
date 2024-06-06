import { TestBed } from '@angular/core/testing';

import { NewPatientFormService } from './new-patient-form.service';

describe('NewPatientFormService', () => {
  let service: NewPatientFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPatientFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
