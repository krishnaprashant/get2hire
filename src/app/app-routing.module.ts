import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { RegisterComponent } from "./Pages/register/register.component";
import { ApplicantDashboardComponent } from "./Pages/applicant-dashboard/applicant-dashboard.component";
import { RegisterEmployerComponent } from "./Pages/register-employer/register-employer.component";
import { TestComponent } from "./Test/test/test.component";
import { JobResultsComponent } from "./Pages/job-results/job-results.component";
import { PostJobComponent } from "./Pages/post-job/post-job.component";
import { MyProfileComponent } from "./Pages/my-profile/my-profile.component";
import { ShortlistedJobsComponent } from "./Pages/shortlisted-jobs/shortlisted-jobs.component";
import { AppliedJobsComponent } from "./Pages/applied-jobs/applied-jobs.component";
import { MyResumeComponent } from "./Pages/my-resume/my-resume.component";
import { ChangePasswordComponent } from "./Pages/change-password/change-password.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "applicant-dashboard", component: ApplicantDashboardComponent },
  { path: "register-employer", component: RegisterEmployerComponent },
  { path: "my-profile", component: MyProfileComponent },
  {
    path: "job-results/:keyword/:location",
    component: JobResultsComponent
  },
  { path: "post-job", component: PostJobComponent },
  { path: "shortlisted-jobs", component: ShortlistedJobsComponent },
  { path: "applied-jobs", component: AppliedJobsComponent },
  { path: "my-resume", component: MyResumeComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
