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
import { EmployerDashboardComponent } from "./Pages/employer-dashboard/employer-dashboard.component";
import { EmployerResumeComponent } from "./Pages/employer-resume/employer-resume.component";
import { AssessmentComponent } from "./Pages/assessment/assessment.component";
import { AddAssessmentComponent } from "./Pages/add-assessment/add-assessment.component";
import { AuthGuard } from "./auth.guard";
import { AuthEmpGuard } from "./auth-emp.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "applicant-dashboard",
    canActivate: [AuthGuard],
    component: ApplicantDashboardComponent
  },
  { path: "register-employer", component: RegisterEmployerComponent },
  {
    path: "job-results/:keyword/:location",
    component: JobResultsComponent
  },
  {
    path: "shortlisted-jobs",
    canActivate: [AuthGuard],
    component: ShortlistedJobsComponent
  },
  {
    path: "applied-jobs",
    canActivate: [AuthGuard],
    component: AppliedJobsComponent
  },
  {
    path: "my-resume",
    canActivate: [AuthGuard],
    component: MyResumeComponent
  },
  {
    path: "change-password",
    canActivate: [AuthGuard],
    component: ChangePasswordComponent
  },
  { path: "test", component: TestComponent },
  { path: "post-job", component: PostJobComponent },
  {
    path: "employer-dashboard",
    canActivate: [AuthEmpGuard],
    component: EmployerDashboardComponent
  },
  {
    path: "employer-resume",
    canActivate: [AuthEmpGuard],
    component: EmployerResumeComponent
  },
  { path: "add-assessment", component: AddAssessmentComponent },
  { path: "assessment", component: AssessmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
