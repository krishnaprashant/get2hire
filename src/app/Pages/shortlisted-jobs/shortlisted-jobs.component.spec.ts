import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedJobsComponent } from './shortlisted-jobs.component';

describe('ShortlistedJobsComponent', () => {
  let component: ShortlistedJobsComponent;
  let fixture: ComponentFixture<ShortlistedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
