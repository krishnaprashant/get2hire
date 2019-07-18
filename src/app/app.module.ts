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
    RegisterEmployerComponent
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
