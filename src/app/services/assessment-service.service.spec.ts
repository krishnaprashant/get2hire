import { TestBed } from '@angular/core/testing';

import { AssessmentServiceService } from './assessment-service.service';

describe('AssessmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentServiceService = TestBed.get(AssessmentServiceService);
    expect(service).toBeTruthy();
  });
});
