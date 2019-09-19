import { TestBed, async, inject } from '@angular/core/testing';

import { AuthEmpGuard } from './auth-emp.guard';

describe('AuthEmpGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthEmpGuard]
    });
  });

  it('should ...', inject([AuthEmpGuard], (guard: AuthEmpGuard) => {
    expect(guard).toBeTruthy();
  }));
});
