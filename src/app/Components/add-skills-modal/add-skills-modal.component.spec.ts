import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsModalComponent } from './add-skills-modal.component';

describe('AddSkillsModalComponent', () => {
  let component: AddSkillsModalComponent;
  let fixture: ComponentFixture<AddSkillsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
