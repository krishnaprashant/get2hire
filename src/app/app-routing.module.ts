import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { RegisterComponent } from "./Pages/register/register.component";
import { ApplicantDashboardComponent } from "./Pages/applicant-dashboard/applicant-dashboard.component";
import { RegisterEmployerComponent } from "./Pages/register-employer/register-employer.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "applicant-dashboard", component: ApplicantDashboardComponent },
  { path: "register-employer", component: RegisterEmployerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
