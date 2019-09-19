import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApplicantService } from "src/app/services/applicant.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-add-skills-modal",
  templateUrl: "./add-skills-modal.component.html",
  styleUrls: ["./add-skills-modal.component.css"]
})
export class AddSkillsModalComponent implements OnInit {
  response: any;
  skillForm: FormGroup;
  isSubmitted: boolean = false;
  save_button: string;

  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.save_button = "Save";
    this.skillForm = this.formBuilder.group({
      skill: ["", Validators.compose([Validators.required])],
      percent: ["", Validators.compose([Validators.required])]
    });
  }

  get f() {
    return this.skillForm.controls;
  }

  onSubmit(e) {
    this.isSubmitted = true;
    if (this.skillForm.valid) {
      this.save_button = "Adding Skill. Please wait...";
      let data = {
        email: sessionStorage.getItem("applicant"),
        skill: (<HTMLInputElement>document.getElementById("skills")).value,
        percent: this.f.percent.value
      };
      this.applicantService
        .addSkill(data)
        .pipe(first())
        .subscribe(data => {
          this.response = data;
          console.log(data);
          this.save_button = "Skill Added.";
          setTimeout(function() {
            window.location.href = window.location.pathname;
          }, 1000);
        });
    }
  }
}
