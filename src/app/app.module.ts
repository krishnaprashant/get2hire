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
import { HttpClientModule } from "@angular/common/http";
import { ApplicantDashboardComponent } from "./Pages/applicant-dashboard/applicant-dashboard.component";
import { RegisterEmployerComponent } from './Pages/register-employer/register-employer.component';
import { TestComponent } from './Test/test/test.component';
import { JobResultsComponent } from './Pages/job-results/job-results.component';
import { PostJobComponent } from './Pages/post-job/post-job.component';
import { MyProfileComponent } from './Pages/my-profile/my-profile.component';
import { ShortlistedJobsComponent } from './Pages/shortlisted-jobs/shortlisted-jobs.component';
import { AsideComponent } from './Components/aside/aside.component';
import { AppliedJobsComponent } from './Pages/applied-jobs/applied-jobs.component';
import { MyResumeComponent } from './Pages/my-resume/my-resume.component';
import { ChangePasswordComponent } from './Pages/change-password/change-password.component';

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
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
