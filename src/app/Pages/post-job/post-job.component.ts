import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { EmployerService } from "src/app/services/employer.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.css"]
})
export class PostJobComponent implements OnInit {
  PostJobForm: FormGroup;

  loader: boolean = false;
  loading_message: string;

  isSubmitted: boolean = false;

  allResponse: any;
  postJobResponse: any;

  HaveRegistered: boolean;

  constructor(
    private employerService: EmployerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.PostJobForm = this.formBuilder.group({
      jobtitle: ["", Validators.compose([Validators.required])],
      industry: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
      experience: ["", Validators.compose([Validators.required])],
      salary: ["", Validators.compose([Validators.required])],
      qual: ["", Validators.compose([Validators.required])],
      skills: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])]
    });
    this.getDetails();
  }

  get f() {
    return this.PostJobForm.controls;
  }

  getDetails() {
    let data = {
      email: sessionStorage.getItem("employer")
    };
    this.employerService
      .getAll(data)
      .pipe(first())
      .subscribe(data => {
        this.allResponse = data;
      });
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.PostJobForm.valid) {
      this.loader = true;
      this.loading_message = "Posting Job. Please wait..";
      let data = {
        jobtitle: this.f.jobtitle.value,
        industry: this.f.industry.value,
        description: this.f.description.value,
        experience: this.f.experience.value,
        salary: this.f.salary.value,
        qual: this.f.qual.value,
        skills: (<HTMLInputElement>document.getElementById("skills")).value,
        city: this.f.city.value
      };
      this.employerService
        .postJob(data)
        .pipe(first())
        .subscribe(data => {
          this.postJobResponse = data;
          if (this.postJobResponse == "Job posted successfully") {
            this.HaveRegistered = true;
          }
          this.loader = false;
        });
    }
  }
}
