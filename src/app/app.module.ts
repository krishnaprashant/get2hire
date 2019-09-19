import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoaderComponent } from "./Components/loader/loader.component";
import { NavComponent } from "./Components/nav/nav.component";
import { HomeComponent } from "./Pages/home/home.component";
import { HeaderHomeComponent } from "./Components/header-home/header-home.component";
import { HeaderAllComponent } from "./Components/header-all/header-all.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { RegisterComponent } from "./Pages/register/register.component";
import { LoginModalComponent } from "./Components/login-modal/login-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApplicantDashboardComponent } from "./Pages/applicant-dashboard/applicant-dashboard.component";
import { RegisterEmployerComponent } from "./Pages/register-employer/register-employer.component";
import { TestComponent } from "./Test/test/test.component";
import { JobResultsComponent } from "./Pages/job-results/job-results.component";
import { PostJobComponent } from "./Pages/post-job/post-job.component";
import { MyProfileComponent } from "./Pages/my-profile/my-profile.component";
import { ShortlistedJobsComponent } from "./Pages/shortlisted-jobs/shortlisted-jobs.component";
import { AsideComponent } from "./Components/aside/aside.component";
import { AppliedJobsComponent } from "./Pages/applied-jobs/applied-jobs.component";
import { MyResumeComponent } from "./Pages/my-resume/my-resume.component";
import { ChangePasswordComponent } from "./Pages/change-password/change-password.component";
import { EmployerDashboardComponent } from "./Pages/employer-dashboard/employer-dashboard.component";
import { TokenIntercepterService } from "./services/token-intercepter.service";
import { EmployerResumeComponent } from "./Pages/employer-resume/employer-resume.component";
import { AssessmentComponent } from "./Pages/assessment/assessment.component";
import { AddAssessmentComponent } from "./Pages/add-assessment/add-assessment.component";
import { AddQuestionComponent } from "./Components/add-question/add-question.component";
import { ShowAssessmentsComponent } from "./Components/show-assessments/show-assessments.component";
import { AuthGuard } from "./auth.guard";
import { AuthEmpGuard } from "./auth-emp.guard";
import { AddEducationModalComponent } from "./Components/add-education-modal/add-education-modal.component";
import { AddWorkExperienceModalComponent } from "./Components/add-work-experience-modal/add-work-experience-modal.component";
import { AddSkillsModalComponent } from "./Components/add-skills-modal/add-skills-modal.component";
import { AddProjectsModalComponent } from "./Components/add-projects-modal/add-projects-modal.component";
import { SnackbarComponent } from "./Components/snackbar/snackbar.component";
import { TimeAgoPipe } from "time-ago-pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    NavComponent,
    HomeComponent,
    HeaderHomeComponent,
    HeaderAllComponent,
    FooterComponent,
    RegisterComponent,
    LoginModalComponent,
    ApplicantDashboardComponent,
    RegisterEmployerComponent,
    TestComponent,
    JobResultsComponent,
    PostJobComponent,
    MyProfileComponent,
    ShortlistedJobsComponent,
    AsideComponent,
    AppliedJobsComponent,
    MyResumeComponent,
    ChangePasswordComponent,
    EmployerDashboardComponent,
    EmployerResumeComponent,
    AssessmentComponent,
    AddAssessmentComponent,
    AddQuestionComponent,
    ShowAssessmentsComponent,
    AddEducationModalComponent,
    AddWorkExperienceModalComponent,
    AddSkillsModalComponent,
    AddProjectsModalComponent,
    SnackbarComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    [AuthGuard],
    [AuthEmpGuard],
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
