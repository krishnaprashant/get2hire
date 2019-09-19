import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApplicantService } from "src/app/services/applicant.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-add-projects-modal",
  templateUrl: "./add-projects-modal.component.html",
  styleUrls: ["./add-projects-modal.component.css"]
})
export class AddProjectsModalComponent implements OnInit {
  response: any;
  AddProjectsForm: FormGroup;
  isSubmitted: boolean = false;
  button_save: string;

  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  get f() {
    return this.AddProjectsForm.controls;
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.AddProjectsForm.valid) {
      this.button_save = "Adding Project Details. Please wait..";
      let data = {
        email: sessionStorage.getItem("applicant"),
        title: this.f.title.value,
        from_date: this.f.from_date.value,
        to_date: this.f.to_date.value,
        company: this.f.company.value,
        description: this.f.description.value
      };
      this.applicantService
        .addProjectDetails(data)
        .pipe(first())
        .subscribe(data => {
          this.response = data;
          this.button_save = "Details Were added.";
          setTimeout(function() {
            window.location.href = window.location.pathname;
          }, 1000);
        });
    }
  }

  ngOnInit() {
    this.AddProjectsForm = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      from_date: ["", Validators.compose([Validators.required])],
      to_date: ["", Validators.compose([Validators.required])],
      company: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])]
    });
    this.button_save = "Save";
  }
}
