import { Component, OnInit } from "@angular/core";
import { AssessmentServiceService } from "src/app/services/assessment-service.service";
import { first } from "rxjs/operators";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-assessment",
  templateUrl: "./assessment.component.html",
  styleUrls: ["./assessment.component.css"]
})
export class AssessmentComponent implements OnInit {
  AssessmentsList: any;
  AssessmentForm: FormGroup;

  constructor(
    private assessmentService: AssessmentServiceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.assessmentService
      .GetAssessments()
      .pipe(first())
      .subscribe(data => {
        this.AssessmentsList = data;
        console.log(data);
      });
    this.AssessmentForm = this.formBuilder.group({});
  }
}
