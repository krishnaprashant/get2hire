import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssessmentServiceService } from "src/app/services/assessment-service.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-add-question",
  templateUrl: "./add-question.component.html",
  styleUrls: ["./add-question.component.css"]
})
export class AddQuestionComponent implements OnInit {
  AssessmentForm: FormGroup;
  isSubmitted: boolean = false;
  processing: boolean = false;
  status: string = "Add Assessment";

  responseData = "";
  DeletedResponseData = "";

  AssessmentsList: any;

  SelectedAssessment = "";

  data = {
    id: "",
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
    answer: "",
    updated_at: "",
    created_at: ""
  };

  constructor(
    private formBuilder: FormBuilder,
    private assessmentService: AssessmentServiceService
  ) {}

  get f() {
    return this.AssessmentForm.controls;
  }

  ngOnInit() {
    this.AssessmentForm = this.formBuilder.group({
      question: ["", Validators.compose([Validators.required])],
      choice1: ["", Validators.compose([Validators.required])],
      choice2: ["", Validators.compose([Validators.required])],
      choice3: ["", Validators.compose([Validators.required])],
      choice4: ["", Validators.compose([Validators.required])],
      answer: ["", Validators.compose([Validators.required])]
    });
    this.GetAssessments();
  }

  GetAssessments() {
    this.assessmentService
      .GetAssessments()
      .pipe(first())
      .subscribe(data => {
        this.AssessmentsList = data;
      });
  }

  deleteQustion(qid) {
    let delete_id = {
      id: qid
    };
    this.assessmentService.DeleteQustion(delete_id).subscribe(data => {
      this.DeletedResponseData = data;
      this.GetAssessments();
    });
  }
  onSubmit(e) {
    this.isSubmitted = true;
    this.data.question = this.f.question.value;
    this.data.choice1 = this.f.choice1.value;
    this.data.choice2 = this.f.choice2.value;
    this.data.choice3 = this.f.choice3.value;
    this.data.choice4 = this.f.choice4.value;
    this.data.answer = this.f.answer.value;

    if (this.AssessmentForm.valid) {
      this.processing = true;
      this.status = "Adding";
      this.assessmentService
        .AddAssessment(this.data)
        .pipe(first())
        .subscribe(data => {
          this.responseData = data;
          this.processing = false;
          this.status = "Add Assessment";
          this.GetAssessments();
        });
      this.processing = false;
      this.status = "Add Assessment";
    }
  }
}
