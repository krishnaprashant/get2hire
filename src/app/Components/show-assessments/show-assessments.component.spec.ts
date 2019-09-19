import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssessmentsComponent } from './show-assessments.component';

describe('ShowAssessmentsComponent', () => {
  let component: ShowAssessmentsComponent;
  let fixture: ComponentFixture<ShowAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
