import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApplicantService } from "src/app/services/applicant.service";
import { first } from "rxjs/operators";
import * as $ from "jquery";

@Component({
  selector: "app-add-education-modal",
  templateUrl: "./add-education-modal.component.html",
  styleUrls: ["./add-education-modal.component.css"]
})
export class AddEducationModalComponent implements OnInit {
  response: any;
  button_save: string;
  eductionForm: FormGroup;
  isSubmitted: boolean = false;
  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.button_save = "Save";
    this.eductionForm = this.formBuilder.group({
      type: ["", Validators.compose([Validators.required])],
      from_date: ["", Validators.compose([Validators.required])],
      to_date: ["", Validators.compose([Validators.required])],
      institute: ["", Validators.compose([Validators.required])],
      board: ["", Validators.compose([Validators.required])],
      course: ["", Validators.compose([Validators.required])]
    });
  }
  get f() {
    return this.eductionForm.controls;
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.eductionForm.valid) {
      this.button_save = "Adding Details.Please Wait..";
      let data = {
        email: sessionStorage.getItem("applicant"),
        type: this.f.type.value,
        from_date: this.f.from_date.value,
        to_date: this.f.to_date.value,
        institute: this.f.institute.value,
        board: this.f.board.value,
        course: this.f.course.value
      };

      this.applicantService
        .addDetails(data)
        .pipe(first())
        .subscribe(data => {
          this.response = data;
          this.button_save = "Details Added";
          setTimeout(function() {
            window.location.href = window.location.pathname;
          }, 1000);
        });
    }
  }
}
