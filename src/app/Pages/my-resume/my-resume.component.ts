import { Component, OnInit } from "@angular/core";
import { ApplicantService } from "src/app/services/applicant.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-my-resume",
  templateUrl: "./my-resume.component.html",
  styleUrls: ["./my-resume.component.css"]
})
export class MyResumeComponent implements OnInit {
  EducationDetails: any;
  WorkExperienceDetails: any;
  PersonalDetails: any;
  ProjectDetails: any;
  Skills: any;

  loader: boolean = false;
  loading_message: string;

  SkillDeletedResponse: any;
  EducationDetailsDeletedResponse: any;
  ProjectDetailsDeletedResponse: any;
  ExpererienceDeletedResponse: any;

  constructor(private applicantService: ApplicantService) {}

  ngOnInit() {
    this.getPersonalDetails();
    this.getEducationDetails();
    this.getWorkExperience();
    this.getSkills();
    this.getProjectDetails();
  }

  getPersonalDetails() {
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.applicantService
      .getPersonalDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.PersonalDetails = data;
      });
  }
  getEducationDetails() {
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.applicantService
      .GetEducationalDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.EducationDetails = data;
      });
  }
  getWorkExperience() {
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.applicantService
      .GetExperienceDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.WorkExperienceDetails = data;
      });
  }
  getSkills() {
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.applicantService
      .GetSkills(data)
      .pipe(first())
      .subscribe(data => {
        this.Skills = data;
      });
  }

  getProjectDetails() {
    let data = {
      email: sessionStorage.getItem("applicant")
    };
    this.applicantService
      .getProjectDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.ProjectDetails = data;
        console.log(data);
      });
  }

  DeleteSkills(id) {
    let data = {
      id: id
    };
    this.loader = true;
    this.loading_message = "Deleting";
    this.applicantService
      .deleteSkill(data)
      .pipe(first())
      .subscribe(data => {
        this.SkillDeletedResponse = data;
        this.getSkills();
        this.loader = false;
      });
  }
  DeleteEducationDetails(id) {
    let data = {
      id: id
    };
    this.loader = true;
    this.loading_message = "Deleting";
    this.applicantService
      .deleteEducationDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.EducationDetailsDeletedResponse = data;
        this.getEducationDetails();
        this.loader = false;
      });
  }
  DeleteExperienceDetails(id) {
    let data = {
      id: id
    };
    this.loader = true;
    this.loading_message = "Deleting";
    this.applicantService
      .deleteExperienceDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.ExpererienceDeletedResponse = data;
        this.getWorkExperience();
        this.loader = false;
      });
  }
  DeleteProjectDetails(id) {
    let data = {
      id: id
    };
    this.loader = true;
    this.loading_message = "Deleting";
    this.applicantService
      .deleteProjectDetails(data)
      .pipe(first())
      .subscribe(data => {
        this.ProjectDetailsDeletedResponse = data;
        this.getProjectDetails();
        this.loader = false;
      });
  }
}
