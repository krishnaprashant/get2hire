import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as $ from "jquery";
import { ApplicantService } from "src/app/services/applicant.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-add-work-experience-modal",
  templateUrl: "./add-work-experience-modal.component.html",
  styleUrls: ["./add-work-experience-modal.component.css"]
})
export class AddWorkExperienceModalComponent implements OnInit {
  response: any;
  experienceForm: FormGroup;
  isSubmitted: boolean = false;
  save_button: string;
  @ViewChild("to_date", { static: false }) to_date: ElementRef;

  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.experienceForm = this.formBuilder.group({
      designation: ["", Validators.compose([Validators.required])],
      from_date: ["", Validators.compose([Validators.required])],
      to_date: ["", Validators.compose([Validators.required])],
      company: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])]
    });
    this.save_button = "Save";
  }

  checkValue(e) {
    if (e.target.checked) {
      this.to_date.nativeElement.type = "text";
      this.f.to_date.setValue("Current");
    } else {
      this.to_date.nativeElement.type = "date";
    }
  }

  get f() {
    return this.experienceForm.controls;
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.experienceForm.valid) {
      this.save_button = "Saving Wait...";
      let data = {
        email: sessionStorage.getItem("applicant"),
        designation: (<HTMLInputElement>document.getElementById("keyword"))
          .value,
        from_date: this.f.from_date.value,
        to_date: this.f.to_date.value,
        company: this.f.company.value,
        description: this.f.description.value
      };
      this.applicantService
        .addExperience(data)
        .pipe(first())
        .subscribe(data => {
          this.response = data;
          this.save_button = "Details were saved";
          setTimeout(function() {
            window.location.href = window.location.pathname;
          }, 1000);
        });
    }
  }
}
