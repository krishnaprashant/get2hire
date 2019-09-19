import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectsModalComponent } from './add-projects-modal.component';

describe('AddProjectsModalComponent', () => {
  let component: AddProjectsModalComponent;
  let fixture: ComponentFixture<AddProjectsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
