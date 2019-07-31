import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { JobPost } from "src/app/Model/Job.model";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.css"]
})
export class PostJobComponent implements OnInit {
  PostJob: FormGroup;
  jobPost: JobPost;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  get f() {
    return this.PostJob.controls;
  }

  ngOnInit() {
    this.PostJob = this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      jobtype: ["", Validators.compose([Validators.required])],
      description: [
        "",
        Validators.compose([Validators.required, Validators.minLength(160)])
      ],
      categories: ["", Validators.compose([Validators.required])],
      experience: ["", Validators.compose([Validators.required])],
      salary: ["", Validators.compose([Validators.required])],

      industry: ["", Validators.compose([Validators.required])],
      qualification: ["", Validators.compose([Validators.required])],
      requirements: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])]
    });
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.PostJob.valid) {
      console.log(e);
      this.jobPost = new JobPost();
      this.jobPost.title = this.f.title.value;
      this.jobPost.jobtype = this.f.jobtype.value;
      this.jobPost.description = this.f.description.value;
      this.jobPost.categories = this.f.categories.value;
      this.jobPost.experience = this.f.experience.value;
      this.jobPost.salary = this.f.salary.value;
      this.jobPost.industry = this.f.industry.value;
      this.jobPost.qualification = this.f.qualification.value;
      this.jobPost.requirements = this.f.requirements.value;
      this.jobPost.city = this.f.city.value;
      // this.jobPostService
      //   .GetRegister(this.register)
      //   .pipe(first())
      //   .subscribe(data => {
      //     console.log("the component Data:" + data);
      //   });
    }
  }
}
