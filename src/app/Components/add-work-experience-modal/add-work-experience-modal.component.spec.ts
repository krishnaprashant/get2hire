import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkExperienceModalComponent } from './add-work-experience-modal.component';

describe('AddWorkExperienceModalComponent', () => {
  let component: AddWorkExperienceModalComponent;
  let fixture: ComponentFixture<AddWorkExperienceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkExperienceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkExperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
