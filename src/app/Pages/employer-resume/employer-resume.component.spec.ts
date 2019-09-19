import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerResumeComponent } from './employer-resume.component';

describe('EmployerResumeComponent', () => {
  let component: EmployerResumeComponent;
  let fixture: ComponentFixture<EmployerResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
